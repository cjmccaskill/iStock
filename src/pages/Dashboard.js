import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const stocks = [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
    },
    {
      name: "Microsoft Corporation",
      symbol: "MSFT",
    },
    {
      name: "Alphabet Inc.",
      symbol: "GOOGL",
    },
    {
      name: "Facebook, Inc.",
      symbol: "FB",
    },
    {
      name: "Oracle Corporation",
      symbol: "ORCL",
    },
    {
      name: "Intel Corporation",
      symbol: "INTL",
    },
  ];
  return (
    <div className="dashboard">
      {stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stock/${symbol}`} key={symbol}>
            <div className="stock">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
