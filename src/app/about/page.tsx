import React from "react";

type Props = {};
const page = (props: Props) => {
  return (
    <div className="p-3 flex lg:flex-row flex-col gap-12 lg:justify-around w-full items-center ">
      <div>
        <img
          src="/images/meee.jpg"
          className="w-[600px] h-[600px] object-contain"
        />
      </div>

      <div className="w-full">
        <p className="text-5xl font-bold pb-4">
          Okereke Faith is a seasoned developer...
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          praesentium rerum at dignissimos maxime qui maiores ullam culpa quis
          facilis excepturi unde hic molestias, ea voluptates, ratione
          temporibus! Maxime, doloribus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero praesentium dolores delectus ab quia
          architecto cupiditate? Vero ex minima perferendis nihil dolore, eum
          cumque! Nesciunt quis saepe dolore obcaecati. Exercitationem? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Iusto quisquam
          necessitatibus veritatis officiis ratione, asperiores et, explicabo
          delectus saepe, repellendus nemo aliquid fugit adipisci optio minima
          rem architecto. Velit, nihil. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatibus voluptas blanditiis labore velit qui
          consectetur quos esse officiis facilis at laborum pariatur fugiat
          natus consequuntur rem voluptatem dolores, animi debitis!
        </p>
      </div>
    </div>
  );
};

export default page;
