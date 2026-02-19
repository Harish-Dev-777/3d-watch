import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

let App = () => {
  return (
    <div>
      <Navbar/>
      <h1>I am App Component</h1>
      <hr />
      <Home/>
      <About/>
    </div>
  );
};

export default App;
