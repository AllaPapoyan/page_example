
import './App.css';
import "./assets/style/index.scss"
import Header from "./components/header";
import TitleComponent from "./components/title-component";
import ApplyComponent from "./components/apply-component";
import OurServices from "./components/our-services";
import OurWork from "./components/our-work";
import Router from "./router";
import Cursor from "./components/cursor";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">

        <Header />
       <Router />
        <Footer />
    </div>
  );
}

export default App;
