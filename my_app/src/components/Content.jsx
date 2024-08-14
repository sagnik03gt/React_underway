// import profile from "data.js";

export default function Content({ image, title, spot, medal }) {
  return (
    <li>
      <img src={image} alt=""></img>
      <h3>{title}</h3>
      <img id="med" src={medal} alt=""></img>
      {/* <p>{spot}</p> */}
    </li>
  );
}
