import "./TreeCard.css";
export default function TreeCard(props) {
  return (
    <div id="tree-card">
      <h1>{props.treeName}</h1>
      <img className="tree-img" src={props.imgLink} alt=""></img>
      <p>{props.location}</p>
    </div>
  );
}
