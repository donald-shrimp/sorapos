import { useState } from "react";
import BaseLayout from "../components/BaseLayout";
import Image from "next/image";
import BalanceCard from "../components/BalanceCard";
import styled from "styled-components";
import HomeButtons from "../components/HomeButtons";
import LargeButton from "../components/LargeButton";

export default function Home() {
  const [balance, setbalance] = useState(2048);

  return (
    <BaseLayout>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="mt-[20px]">
            <BalanceCard balance={balance} />
          </div>
          <div className="mt-[20px]">
            <HomeButtons />
          </div>
          <div className="mt-[20px]">
            <LargeButton
              icon="/ic_payment.svg"
              text="支払い"
              onClick={() => console.log("CLICK")}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
