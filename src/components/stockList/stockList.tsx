import React from "react";

import style from "./stockList.module.css";

const StockList = (props: any) => {
  const renderListItems = () => {
    console.log("test1 from stocks");
    return props.stocks.map((stock: any) => {
      console.log("test2 from stocks");
      return <div className={style.individualStock}>{stock.description}</div>;
    });
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>Stocks</h1>
      <div className={style.stockList}>{renderListItems()}</div>
    </div>
  );
};

export default StockList;
