import './App.css';
import AboutUs from "./component/aboutUs/AboutUs";
import ContaktsPage from "./component/contaktsPage/ContaktsPage"
import PortfolioPage from "./component/portfolioPage/PortfolioPage";
function App() {
  return (
    <div className="App">
        <AboutUs/>
        <PortfolioPage/>
      <ContaktsPage/>

    </div>
  );
}

export default App;
