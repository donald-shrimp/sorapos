import { FC } from "react";
import styled from "styled-components";


export type Props = {
    balance: number;
}

const BalanceCard: FC<Props> = ({balance}) => {
    return (
      <div className="flex justify-center h-[143px] w-[286px] border-2 rounded-[20px] border-[#1CB3C8]">
        <div className=" flex flex-col justify-center text-center">
          <h1 className="text-2xl " >残高</h1>
          <p className="text-4xl mt-[5px]">
            {balance} <span className="text-2xl">sora</span>
          </p>
      </div>
    </div>  
  );
};

export default BalanceCard;