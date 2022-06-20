import React, {useState, useEffect} from "react";
import Header from "./components/header/header";
import SubHeader from "./components/subheader/subheader";
import StockList from "./components/stockList/stockList";
import fetchData from './data/data'
import Footer from "./components/footer/footer";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function pullData() {
      const data = await fetchData()
      setData(data)
    }
    
    pullData()
  }, [])

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
