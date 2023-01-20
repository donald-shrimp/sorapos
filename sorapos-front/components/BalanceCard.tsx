import { FC } from "react";
import styled from "styled-components";

export type Props = {
  balance: number;
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 143px;
  width: 286px;
  border: 2px solid;
  border-radius: 17px;
  border-color: #1cb3c8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BalanceCard: FC<Props> = ({ balance }) => {
  return (
    <CardContainer>
      <div className=" flex flex-col justify-center text-center">
        <h1 className="text-2xl ">残高</h1>
        <p className="text-4xl mt-[5px]">
          {balance} <span className="text-2xl">sora</span>
        </p>
      </div>
    </CardContainer>
  );
};

export default BalanceCard;
