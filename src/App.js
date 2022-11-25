import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import Banner from "./Pages/Banner/Banner";
import Component from "./Pages/Component/Component";
import HotDeal from "./Pages/HotDeal/HotDeal";
import SearchedItems from "./Pages/SearchedItems/SearchedItems";
import FurnitureDeal from "./Pages/furnitureDeal/FurnitureDeal";
import Review from "./Pages/Review/Review";
import Footer from "./Pages/Footer/Footer";

function App() {
  return <div>
    <Header></Header>
    <Banner></Banner>
    <Component></Component>
    <HotDeal></HotDeal>
    <SearchedItems></SearchedItems>
    <FurnitureDeal></FurnitureDeal>
    <Review></Review>
    <Footer></Footer>
  </div>;
}

export default App;
