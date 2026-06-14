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
            header={" شرکت ها "}
            text={
              " به دانشجویان مستعد و آماده ورود به بازار کار دسترسی پیدا کنید و فرآیند جذب کارآموز را به شکلی ساده و هدفمند مدیریت کنید "
            }
          />
        </Cart>
        <Cart>
          <Content
            header={" دانشجویان "}
            text={
              "فرصت‌های کارآموزی معتبر را در یک بستر واحد پیدا کنید و بدون دغدغه تأیید دانشگاه، سریع‌تر وارد دنیای حرفه‌ای شوید"
            }
          />
        </Cart>
        <Cart>
          <Content
            header={"دانشگاه‌ها"}
            text={
              " ما فرآیند معرفی، تأیید و مدیریت کارآموزی را ساده کرده‌ایم تا دانشگاه‌ها بتوانند با سرعت و اطمینان بیشتری دانشجویان را به شرکت‌های معتبر متصل کنند "
            }
          />
        </Cart>
      </div>
    </div>
  );
}
