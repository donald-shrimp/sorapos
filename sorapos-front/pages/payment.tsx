import { useState } from "react";
import BaseLayout from "../components/BaseLayout";

export default function Payment() {
  const [total_amount, setAmount] = useState(2048)
  return (
    <BaseLayout>
      <div className="bg-red-400 ">

      </div>
      <div className="flex justify-center text-center items-center flex-[0.5]">
        <div>
          <h1 className="text-2xl" >合計</h1>
          <p className="text-4xl">
            {total_amount} <span className="text-2xl">sora</span>
          </p>
        </div>
      </div>

      <form action="">
        <div class="form-example">
          <label for="id">WalletID: </label>
          <input type="text" name="id" id="id" required>
        </div>
        <button className="text-3xl font-bold rounded-full bg-sora-400 hover:bg-sora-300 w-1/2 py-2">購入</button>
      </form>
    </BaseLayout>
  )
}
