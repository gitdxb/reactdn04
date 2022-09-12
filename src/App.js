import "./App.css";
import CardRCC from "./components/CardRCC/CardRCC";
import HomeComponent from "./components/BTComponent/HomeComponent/HomeComponent";
import DataBinding from "./components/DataBinding/DataBinding";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import DemoState from "./DemoState/DemoState";
import TangGiamFont from "./DemoState/TangGiamFont";
import DemoStyling from "./DemoState/DemoStyling";
import DoiMauXe from "./DemoState/DoiMauXe/DoiMauXe";
import DemoArray from "./components/DemoArray/DemoArray";

function App() {
  return (
    <div className="App">
      <DemoArray/>
      {/* <DoiMauXe/> */}
      {/* <TangGiamFont/> */}
      {/* <p className="demoCSS">DemoCSS</p>
      <DemoStyling/> */}
      {/* <DemoState/> */}
      {/* <HandleEvent /> */}
      {/* <DataBinding/> */}
      {/* component */}
      {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
