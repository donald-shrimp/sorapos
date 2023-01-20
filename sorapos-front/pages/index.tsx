import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Image from 'next/image'
import BalanceCard from "../components/BalanceCard";

export default function Home() {
  const [balance, setbalance] = useState(2048);

  return (
    <BaseLayout>
    <div className="flex flex-col h-full">

    <BalanceCard balance={balance}/>
      
      <div className="flex flex-[1] justify-center ">
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
