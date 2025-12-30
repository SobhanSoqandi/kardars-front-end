import React from "react";
import Cart from "../../../components/Cart";
import Content from "./Content";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="font-bold text-2xl">درباره کاردرس</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        <Cart>
          <Content
            header={"دانشگاه‌ها"}
            text={
              "ارتباط موثر بین دانشگاه و صنعت را تقویت کنید و کیفیت آموزش را ارتقا دهید."
            }
          />
        </Cart>
        <Cart>
          <Content
            header={"دانشگاه‌ها"}
            text={
              "ارتباط موثر بین دانشگاه و صنعت را تقویت کنید و کیفیت آموزش را ارتقا دهید."
            }
          />
        </Cart>
        <Cart>
          <Content
            header={"دانشگاه‌ها"}
            text={
              "ارتباط موثر بین دانشگاه و صنعت را تقویت کنید و کیفیت آموزش را ارتقا دهید."
            }
          />
        </Cart>
      </div>
    </div>
  );
}
