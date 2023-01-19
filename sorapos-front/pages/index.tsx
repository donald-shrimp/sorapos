import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Image from 'next/image'

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
        <div className="w-full flex justify-center mb-auto">
          <a href="/charge"><Image src="/charge.svg" width={250} height={70} alt="charge" /></a>
        </div>

        <div className="w-full flex justify-center mb-auto">
          <a href="/payment"><Image src="/payment.svg" width={250} height={70} alt="payment" /></a>
        </div>
      </div>
    </div>
    </BaseLayout>
  );
}
