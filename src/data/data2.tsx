async function fetchData() {
  const res = await fetch(
    "https://finnhub.io/api/v1/stock/profile2?symbol=BDR&token=calf0eiad3ie9ojgktpg"
  );
  const data = await res.json();
  return data
}

export default fetchData;
