import React from "react";
import Header from "./components/header/header";
import SubHeader from "./components/subheader/subheader";
import StockList from "./components/stockList/stockList";
import data from "./data/data";
import data2 from "./data/data";
import Footer from "./components/footer/footer";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <SubHeader>
        <StockList stocks={data.stocks}></StockList>
      </SubHeader>
      <Footer />
    </div>
  );
}

export default App;
