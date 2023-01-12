import React, { useState, useEffect } from 'react';

function ShibaPrice() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [shibaAmount, setShibaAmount] = useState(0);
  let timeoutId;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/shiba-inu');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { market_data: { current_price: { eur } } } = await response.json();
        setPrice(eur);
      } catch (e) {
        setError(e.message);
      } finally {
        timeoutId = setTimeout(fetchData, 5000);
      }
    }
    fetchData();
    return () => clearTimeout(timeoutId);
  }, []);

  function handleAmountChange(e) {
    setShibaAmount(e.target.value);
  }

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

      <label htmlFor="shiba-amount">Nombre de pièces de Shiba Inu :</label>
      <input
        type="number"
        id="shiba-amount"
        value={shibaAmount}
        onChange={handleAmountChange}
      />

      {price && (
        <p>
          Total en euros : {shibaAmount * price} €
        </p>
      )}
    </div>
  );
}

export default ShibaPrice;
