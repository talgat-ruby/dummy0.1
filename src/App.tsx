import React from "react";
import Header from "./components/header/header";
import SubHeader from "./components/subheader/subheader";
import StockList from "./components/stockList/stockList";
import data from "./data";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <SubHeader>
        <StockList stocks={data.stocks}></StockList>
      </SubHeader>
    </div>
  );
}

export default App;
