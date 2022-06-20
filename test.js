// fetch(
//   "https://finnhub.io/api/v1/stock/profile2?symbol=BDR&token=calf0eiad3ie9ojgktpg"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async function fetch() {
//   async function fetchData() {
//     const res = await fetch(
//       "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=calf0eiad3ie9ojgktpg"
//     ).then((response) => response.json());
//     // .then((data) => console.log(data));
//     return res;
//   }

//   console.log(await fetchData());
// }

// async function funcName(url) {
//   const response = await fetch(url);
//   let data = await response.json();
// }

// let response = fetch(
//   "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=calf0eiad3ie9ojgktpg"
// );

// export default response;

!async function () {
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
};
