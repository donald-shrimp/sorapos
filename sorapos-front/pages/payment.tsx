import React, { useState } from 'react';
import BaseLayout from "../components/BaseLayout";
import QRReader, { QRCode } from './QRReader';



export default function Payment() {
  const [stopOnRecognize, setStopOnRecognize] = React.useState(true);
  const [qrParam, setQRParam] = useState({
    width: 500,
    height: 500,
    pause: true,
  });

  const [code, setCode] = useState('');

  const onRecognizeCode = (e: QRCode) => {
    setCode(e.data);
    if (stopOnRecognize) {
      setQRParam(e => { return { ...e, pause: true }; });
    }
  }

  const toggleVideoStream = () => {
    setQRParam(e => { return { ...e, pause: !e.pause }; });
  }


  // const [total_amount, setAmount] = useState(2048)
  return (
    <BaseLayout>
        <div className="App">
        <QRReader {...qrParam} gecognizeCallback={onRecognizeCode} />
        <div>
          {/* 認識時に自動停止 */}
          <input type="hidden" name="rdo" value="0" onChange={(e) => setStopOnRecognize(e.target.value === "0")} checked={stopOnRecognize} />
          {/* <label>
          <input type="radio" name="rdo" value="1" onChange={(e) => setStopOnRecognize(e.target.value === "0")} checked={!stopOnRecognize} />認識時も処理継続
        </label>
         */}
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mg-auto' onClick={toggleVideoStream}>{(qrParam.pause ? '読み取り開始' : '読み取り停止')}</button>
          <p>QRコード：{code}</p>
        </div>

      </div>
    </BaseLayout>
  );
}
