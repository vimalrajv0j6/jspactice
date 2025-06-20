function fetchPrices() {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
    .then(res => res.json())
    .then(data => {
      const bitcoin = data.bitcoin.usd;
      const ethereum = data.ethereum.usd;
      document.getElementById('btc-price').textContent = bitcoin;
      document.getElementById('eth-price').textContent = ethereum;
    })
    .catch(error => {
      console.log("Error fetching prices:", error);
    });
}

fetchPrices();
setInterval(fetchPrices, 10000);
