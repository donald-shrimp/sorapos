import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

export type Props = {};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

const SubButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 109px;
  width: 109px;
  background-color: #1cb3c8;
  border-radius: 20px;
  border-color: #1cb3c8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HomeButtons: FC<Props> = (props: Props) => {
  return (
    <div className="flex justify-around">
      <ButtonContainer>
        <SubButton>
          <a href="/charge">
            <Image src="/ic_charge.png" width={62} height={62} alt="charge" />
          </a>
        </SubButton>
        <p className="text-lg my-[10px]">チャージ</p>
      </ButtonContainer>
      <ButtonContainer>
        <SubButton>
          <a href="/history">
            <Image src="/ic_history.png" width={62} height={62} alt="history" />
          </a>
        </SubButton>
        <p className="text-lg my-[10px]">取引履歴</p>
      </ButtonContainer>
    </div>
  );
};

export default HomeButtons;
