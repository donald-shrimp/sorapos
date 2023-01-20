import { Icon } from "@chakra-ui/react";
import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FileWatcherEventKind } from "typescript";

export type Props = {
  icon?: string;
  text: string;
  onClick: () => void;
};

const LargeButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 288px;
  background-color: #1cb3c8;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PaymentButtonText = styled.p<Props>`
  text-align: ${(props) => (props.icon ? "start" : "center")};
  padding-left: ${(props) => props.icon && "25px"};
  flex: 1;
  color: white;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
`;

const iconWidth = 46;

const LargeButton: FC<Props> = (props) => {
  return (
    <LargeButtonContainer>
      {props.icon && (
        <div className="pl-[30px]">
          <Image src={props.icon} width={iconWidth} height={46} alt="" />
        </div>
      )}
      <PaymentButtonText {...props}>{props.text}</PaymentButtonText>
    </LargeButtonContainer>
  );
};

export default LargeButton;
