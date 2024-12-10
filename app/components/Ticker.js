"use client"
import React, { useEffect, useState } from "react";

const TickerHeader = () => {
  const [tickerData, setTickerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickerData = async () => {
      try {
        const response = await fetch(
          //"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,secret,pepe,uniswap,sql"
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"


        );
        const data = await response.json();

        const formattedData = data.map((coin) => ({
          name: coin.name,
          price: `$${coin.current_price.toLocaleString()}`,
          change: `${coin.price_change_percentage_24h.toFixed(4)}%`,
        }));

        setTickerData(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching ticker data:", error);
        setIsLoading(false);
      }
    };

    fetchTickerData();

    // Refresh data every minute
    const interval = setInterval(fetchTickerData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div style={{background:"linear-gradient(to right, #000046, #0b4a5b)", padding: "10px" }}>...</div>;
  }

  return (
    <div style={{ background:"linear-gradient(to right, #000046, #0b4a5b)", color: "#fff", padding: "10px", overflow: "hidden" }} className="rounded-lg ">
      <div className="ticker italic" >
        {[...tickerData, ...tickerData].map((item, index) => (
          <div className="ticker-item" key={index}>
            <span>{item.name}: </span>
            <span className="text-gray-500"
            >{item.price}</span>
            <span
              style={{
                color: item.change.startsWith("-") ? "red" : "green",
                marginLeft: "10px",
              }}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .ticker {
          display: flex;
          gap: 50px;
          white-space: nowrap;
          animation: ticker-scroll 20s linear infinite;
        }

        .ticker-item {
          display: inline-block;
        }

        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default TickerHeader;
