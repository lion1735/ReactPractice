import { useEffect, useState } from "react";
//  https://api.coinpaprika.com/v1/tickers?limit=10

function App() {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const onChange = () => {
    console.log();
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, idx) => (
            <option id={idx} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
