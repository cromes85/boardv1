import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function ShibaPrice() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shibaAmount, setShibaAmount] = useState(0);
  const [applyCommission, setApplyCommission] = useState(false);
  const [commissionRate, setCommissionRate] = useState(1.49);
  let timeoutId;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/shiba-inu");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const {
          market_data: {
            current_price: { eur },
          },
        } = await response.json();
        setPrice(eur);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
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

  function handleCommissionRateChange(e) {
    setCommissionRate(e.target.value);
  }

  return (
    
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <NavLink to="/">
                <li class="font-bold text-ml underline mb-2 mr-3 inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Accueil</li>
            </NavLink>
      <div class="w-full">
        <div class="px-6 py-4">
        <h2 class="font-bold text-xl mb-2">Prix actuel du Shiba Inu :</h2>
        {isLoading ? <p>Chargement...</p> : price ? <p>{price} €</p> : error ? <p>{error}</p> : null}
        <br />
        <label htmlFor="shiba-amount">Nombre de pièces de Shiba Inu :</label>
        <br />
        <input
          type="number"
          id="shiba-amount"
          value={shibaAmount}
          onChange={handleAmountChange}
        />
        <br />
        <br />
        {price && <p class="font-bold text-xl mb-2">Total en euros : {shibaAmount * price} €</p>}
  
        <label>
          Appliquer une commission
          <input
            type="checkbox"
            checked={applyCommission}
            onChange={handleCommissionChange}
          />
        </label>
  
        {applyCommission && (
          <div>
            <label htmlFor="commission-rate">Taux de commission :</label>
            <input
              type="number"
              id="commission-rate"
              value={commissionRate}
              onChange={handleCommissionRateChange}
            />
            <p>
              Prix de vente :{" "}
              {shibaAmount * price - shibaAmount * price * (commissionRate / 100)}{" "}
              €
            </p>
          </div>
          
        )}
        </div>
      </div>
      </div> 
    );
  
}
export default ShibaPrice;
