import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

// here we used object distructuring bcoz we know the objects key and var name if same then we can use it so instead using props manually we directly used this

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </div>
  );
}

export default App;
