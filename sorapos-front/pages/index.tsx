import { useState } from "react";
import BaseLayout from "../components/BaseLayout";

export default function Home() {

  const [balance, setbalance] = useState(2048);

  return (
    <BaseLayout>
    <div className="flex flex-col h-full">
      <div className="flex justify-center text-center items-center flex-[0.5]">
        <div>
          <h1 className="text-2xl" >残高</h1>
          <p className="text-4xl">
            {balance} <span className="text-2xl">sora</span>
          </p>
        </div>
      </div>
      <div className="flex flex-[1] justify-center flex-col">
        <div className="w-full flex justify-center">
          <a href="/charge">チャージ</a>
        </div>

        <div className="w-full flex justify-center">
          <a href="/charge">支払い</a>
        </div>
      </div>
    </div>
     
     
    </BaseLayout>
  );
}
