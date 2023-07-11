import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TipCalculator from "./components/tip-calculator/tip-calculator";

import "./App.css";

function App() {
  return (
    <div className="test">
      <div className="flex-0-5">
        <Header />
      </div>
      <div className="flex-2">
        <TipCalculator />
      </div>
      <div className="flex-0-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
