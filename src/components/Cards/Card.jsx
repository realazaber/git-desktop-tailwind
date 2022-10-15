const Card = (props) => (
  <div className="flex flex-col">
    {/* <img src={props.img} alt={props.title} /> */}
    <h3 className="text-white">{props.title}</h3>
    <p className="text-slate-600">{props.body}</p>
  </div>
);

export default Card;
