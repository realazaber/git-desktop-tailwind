const Card = (props) => (
  <div className="flex flex-col w-4/12 text-center">
    {/* <img src={props.img} alt={props.title} /> */}
    <h3 className="text-white my-2 font-semibold">{props.title}</h3>
    <p className="text-gray-400">
      {props.bodyStart}{" "}
      <a className="text-purple-500" href={props.downloadLink}>
        {props.downloadText}
      </a>
      {props.bodyEnd}
    </p>
  </div>
);

export default Card;
