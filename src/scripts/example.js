const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

class Example {
  constructor(el) {
    this.el = el;
    this.el.innerHTML = "<h1>Show me some crypto!</h1>"

    this.el.addEventListener("click", this.getData.bind(this))
  }

  handleClick() {
    this.el.children[0].innerText = "Ouch!"
  }

  getData() {
    const CoinGeckoClient = new CoinGecko();
    var func = async() => {
        let data = await CoinGeckoClient.coins.all();
        return data;
    }
    func().then(data => {
        let dataObj = data.data;
        const ul = document.createElement("ul");
        for (let key in dataObj) {
            let coinObj = dataObj[key];
            let name = coinObj.name;
            let symbol = coinObj.symbol;
            const li = document.createElement("li");
            li.innerText = `Name: ${name}         Symbol: ${symbol}`;
            ul.append(li);
        }
        
        this.el.append(ul);
    })
  }
};

export default Example;
