const card = (props) => (
  <div>
    <img src={props.img} alt={props.title} />
    <h1>{props.title}</h1>
    <p>{props.body}</p>
  </div>
);

export default card;
