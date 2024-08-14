import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import gif from "./assets/oly.gif";
import "./components/Header.css";
import { sportsDet } from "./data";
import TopContent from "./components/TopContent";
import Button from "./components/Button";
function App() {
  const [sports, namingSport] = useState("");
  function handelSelect(sportName) {
    namingSport(sportName);
  }

  let tabContent = <p>Choose any sport..</p>;
  if (sports) {
    tabContent = (
      <div id="tab-content">
        <h3>{sportsDet[sports].title}</h3>

        <p>{sportsDet[sports].description}</p>
      </div>
    );
  }

  return (
    <>
      <Header className="header" type="MNC" />
      <TopContent />
      <img id="gif" src={gif} height="350px"></img>
      <menu>
        <Button
          isSelect={sports === "javelin"}
          onClick={() => handelSelect("javelin")}
        >
          Javelin
        </Button>
        <Button
          isSelect={sports === "hockey"}
          onClick={() => handelSelect("hockey")}
        >
          Hockey
        </Button>
        <Button
          isSelect={sports === "shooting"}
          onClick={() => handelSelect("shooting")}
        >
          Shooting
        </Button>
        <Button
          isSelect={sports === "wrestling"}
          onClick={() => handelSelect("wrestling")}
        >
          Wrestling
        </Button>
      </menu>
      {tabContent}
    </>
  );
}

export default App;
