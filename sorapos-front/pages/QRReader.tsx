import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import jsqr, { QRCode } from "../lib/jsQR";
export type { QRCode } from "jsQR";

export type QRReaderProps = {
  width?: number;
  height?: number;
  pause?: boolean;
  showQRFrame?: boolean;
  timerInterval?: number;
  gecognizeCallback?: (e: QRCode) => void;
};

type Point = {
  x: number;
  y: number;
};

type OverlayPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const RelativeWrapperDiv = styled.div<QRReaderProps>`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const VideoArea = styled.video`
  position: absolute;
  z-index: -100;
`;

const OverlayDiv = styled.div<OverlayPosition>`
  position: absolute;
  border: 1px solid #f00;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const QRReader: React.FC<QRReaderProps> = (props) => {
  const [overlay, setOverlay] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const video = useRef(null as HTMLVideoElement);
  const timerId = useRef(null);

  const drawRect = (topLeft: Point, bottomRight: Point) => {
    setOverlay({
      top: topLeft.y < bottomRight.y ? topLeft.y : bottomRight.y,
      left: topLeft.x < bottomRight.x ? topLeft.x : bottomRight.x,
      width: Math.abs(bottomRight.x - topLeft.x),
      height: Math.abs(bottomRight.y - topLeft.y),
    });
  };

  useEffect(() => {
    (async () => {
      if (props.pause) {
        video.current.pause();
        clearInterval(timerId.current);
        timerId.current = null;
        return;
      }

      const { width, height } = props;

      const constraints = {
        audio: false,
        video: {
          facingMode: "environment",
          width,
          height,
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.current.srcObject = stream;
      video.current.play();

      const canvas = new OffscreenCanvas(width, height);
      const context = canvas.getContext("2d");

      if (!timerId.current) {
        timerId.current = setInterval(() => {
          context.drawImage(video.current, 0, 0, width, height);
          const imageData = context.getImageData(0, 0, width, height);
          const qr = jsqr(imageData.data, imageData.width, imageData.height);
          if (qr) {
            console.log(qr.data);
            if (props.showQRFrame) {
              drawRect(
                qr.location.topLeftCorner,
                qr.location.bottomRightCorner
              );
            }
            if (props.gecognizeCallback) props.gecognizeCallback(qr);
          }
        }, props.timerInterval);
      }
      return () => clearInterval(timerId.current);
    })();
  }, [props]);

  return (
    <RelativeWrapperDiv {...props}>
      <VideoArea ref={video}></VideoArea>
      <OverlayDiv {...overlay}></OverlayDiv>
    </RelativeWrapperDiv>
  );
};

// propsのデフォルト値を設定
QRReader.defaultProps = {
  width: 300,
  height: 300,
  pause: false,
  showQRFrame: true,
  timerInterval: 300,
};

export default QRReader;
