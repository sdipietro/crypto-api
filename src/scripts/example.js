const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

class Example {
  constructor(el) {
    this.el = el;
    this.el.innerHTML = "<h1>Show me some crypto</h1>"

    this.el.addEventListener("click", this.printData.bind(this))
  }

  handleClick() {
    this.el.children[0].innerText = "Ouch!"
  }

  getData() {
    const CoinGeckoClient = new CoinGecko();
    var func = async() => {
        let data = await CoinGeckoClient.coins.all();
        return data;
    };
    func();

    const ul = document.createElement("ul");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const li = document.createElement("li");
        // Setting data-* attributes with dataset will convert them automatically to a string
        // However this will not be an easily parsible format for arrays
        // We're using the JSON.stringify method to make it easier for us to use later
        li.dataset.pos = JSON.stringify([rowIdx, colIdx])
        // in order to get strings to an array, use JSON.parse
        ul.append(li);
      }
    }

    this.el.append(ul);
  }

  printData() {
    const ul = document.createElement("ul");
    // const allCoins = this.getData();
    // console.log(allCoins);
    // debugger

    // for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    //   for (let colIdx = 0; colIdx < 3; colIdx++) {
    //     const li = document.createElement("li");
    //     // Setting data-* attributes with dataset will convert them automatically to a string
    //     // However this will not be an easily parsible format for arrays
    //     // We're using the JSON.stringify method to make it easier for us to use later
    //     li.dataset.pos = JSON.stringify([rowIdx, colIdx])
    //     // in order to get strings to an array, use JSON.parse
    //     ul.append(li);
    //   }
    // }

    // this.el.append(ul);

  }
};

// let test = new Example();

// test.getData();

export default Example;
