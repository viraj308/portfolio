import "./card.css";

export default function Card(props) {
  return (
    <>
      <li className="card-wrapper">
        <div className="card-image-wrapper">
          <img className="card-image" src={props.src} />
        </div>
        <div className="card-text">
          <p className="card-text-heading">{props.title}</p>
          <p className="card-text-para">{props.text}</p>
        </div>
      </li>
    </>
  );
}
