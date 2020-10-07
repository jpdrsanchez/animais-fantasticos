export default function fetchBiticoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      console.log(bitcoin.BRL.sell);
    })
    .catch((error) => console.log(Error(error)));
}

// https://blockchain.info/ticker
