import logo from "../assets/olympic.png";
export default function Header({ type, ...props }) {
  return (
    <header {...props}>
      <img src={logo} alt="logo"></img>
      <h1>INDIA AT OLYMPIC 2024</h1>
    </header>
  );
}
