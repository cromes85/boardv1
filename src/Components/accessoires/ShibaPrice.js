import React, { useState, useEffect } from 'react';

function ShibaPrice() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/shiba-inu');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setPrice(data.market_data.current_price.eur);
      } catch (e) {
        setError(e.message);
      }
    }
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Prix actuel du Shiba Inu :</h2>
      {price ? (
        <p>{price} €</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default ShibaPrice;
