const amountInput = document.getElementById('amount');
const cryptoSelect = document.getElementById('crypto');
const currencySelect = document.getElementById('currency');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert');
const priceList = document.getElementById('price-list');

// Function to fetch real-time prices
async function fetchCryptoPrices() {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd,eur,gbp');
  const data = await response.json();
 
  const prices = `
    <li>Bitcoin (BTC): ${data.bitcoin.usd} USD</li>
    <li>Ethereum (ETH): ${data.ethereum.usd} USD</li>
    <li>Litecoin (LTC): ${data.litecoin.usd} USD</li>
  `;
 
  priceList.innerHTML = prices;
}

// Function to convert cryptocurrency
async function convertCrypto() {
  const amount = amountInput.value;
  const crypto = cryptoSelect.value;
  const currency = currencySelect.value;

  if (!amount) {
    alert('Please enter an amount');
    return;
  }

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`);
  const data = await response.json();

  const rate = data[crypto][currency];
  const convertedAmount = amount * rate;

  output.textContent = `${amount} ${crypto.toUpperCase()} = ${convertedAmount.toFixed(2)} ${currency.toUpperCase()}`;
}


convertBtn.addEventListener('click', convertCrypto);


fetchCryptoPrices();