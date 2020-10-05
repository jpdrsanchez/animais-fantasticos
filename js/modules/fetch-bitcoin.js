export default function initFetchBiticoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
      console.log(bitcoin.BRL.sell);
    })
    .cath((e) => console.log(Error(e)));
}

// https://blockchain.info/ticker
