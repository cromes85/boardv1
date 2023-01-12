import React, { useState, useEffect } from 'react';

function ShibaPrice() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [shibaAmount, setShibaAmount] = useState(0);
  const [applyCommission, setApplyCommission] = useState(false);
  let timeoutId;
  const commission = 1.49 / 100;

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

  function handleCommissionChange(e) {
    setApplyCommission(e.target.checked);
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
          Total en euros : {(shibaAmount * price) - (applyCommission ? (shibaAmount * price * commission) : 0)} €
        </p>
      )}
      <label>
        Appliquer une commission de 1.49% lors de la vente
        <input
          type="checkbox"
          checked={applyCommission}
          onChange={handleCommissionChange}
        />
      </label>
    </div>
  );
}

export default ShibaPrice;
