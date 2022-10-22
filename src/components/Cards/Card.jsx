import { useState } from "react";

function Card(props) {
  let imgUrl = "/images/" + props.img;
  return (
    <div className="flex flex-col w-4/12 text-center mx-1 h-48">
      {imgUrl != "/images/" ? (
        <img
          src={imgUrl}
          alt={props.title}
          className="w-14 m-auto bg-[#7b63ab] py-3 px-4 rounded"
        />
      ) : (
        ""
      )}
      <h3 className="text-white my-2 font-semibold">{props.title}</h3>
      <p className="text-gray-400 font-normal h-24">
        {props.bodyStart}{" "}
        <a className="link" href={props.downloadLink}>
          {props.downloadText}
        </a>
        {props.bodyEnd}
      </p>
    </div>
  );
}

export default Card;
