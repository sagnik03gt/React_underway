import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Select a topic..</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      <Tabs
        ButtonsContainer="menu"
        button={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handelSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handelSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handelSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handelSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
