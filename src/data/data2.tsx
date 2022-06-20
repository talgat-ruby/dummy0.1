const data = {
  async function() {
    let dataArray = [];
    await fetch(
      "https://finnhub.io/api/v1/stock/profile2?symbol=BDR&token=calf0eiad3ie9ojgktpg"
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((data) => dataArray.push(data))
      .then((dataArray) => {
        return dataArray;
      });
  },
};

export default data;
