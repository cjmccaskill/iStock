import React from "react";

const Stock = (props) => {
  const apiKey = "967b8ff6eeed093d0006c139c2bcb840";
  const symbol = props.match.params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

  const [stock, setStock] = React.useState(null);
  //   console.log(stock);
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data[0]);
  };

  React.useEffect(() => {
    getStock();
  }, []);

  const loaded = () => {
    return (
      <div className="stock">
        <h1>
          Name: {stock.name}/{stock.symbol}
        </h1>
        <h2>
          Current Price: <span>$</span>
          {stock.price}
        </h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return stock ? loaded() : loading();
};

export default Stock;
