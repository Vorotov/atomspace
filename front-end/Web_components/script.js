class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const info = document.createElement("p");
    info.setAttribute("class", "info");
    const name = this.getAttribute("name");
    console.log(name);
    info.textContent = name;

    const icon = document.createElement("img");
    icon.setAttribute("class", "icon");
    let imgUrl;
    if (this.hasAttribute("avatar")) {
      imgUrl = this.getAttribute("avatar");
    } else {
      imgUrl = "default.png";
    }
    icon.setAttribute("src", imgUrl);
    let text;
    if (this.hasAttribute("name")) {
      text = this.getAttribute("name");
    } else {
      text = "Without name";
    }
    console.log(this);

    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .card {
				display: flex;
				align-items: center;
			}
			.icon{
				width: 100px;
				margin: 10px;
			}
			.info{
				font-size: 30px;
			}
		`;
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(card);
    card.appendChild(icon);
    card.appendChild(info);
  }
}
customElements.define("x-user-card", UserCard);

class Counter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const counter = document.createElement("div");
    counter.setAttribute("class", "counter");

    const min = document.createElement("div");
    min.setAttribute("class", "minus");
    min.textContent = "-";

    const pl = document.createElement("div");
    pl.setAttribute("class", "plus");
    pl.textContent = "+";

    let num = parseInt(this.getAttribute("initial"));
    console.log(num);

    pl.onclick = function () {
      num++;
      n.textContent = num;
    };

    min.onclick = function () {
      num--;
      n.textContent = num;
    };
    const n = document.createElement("p");
    n.setAttribute("class", "number");
    n.textContent = num;

    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .counter {
				display: flex;
				align-items: center;
			}
			.number{
				font-size: 20px;
			}
			.plus{
				margin: 7px;
				text-align: center;
				height: 20px;
				width: 20px;
				border: 2px solid black;
				border-radius: 100%;
			}
			.minus{
				margin: 7px;
				text-align: center;
				height: 20px;
				width: 20px;
				border: 2px solid black;
				border-radius: 100%;
			}
		`;
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(counter);
    counter.appendChild(min);
    counter.appendChild(n);
    counter.appendChild(pl);
  }
}
customElements.define("x-counter", Counter);
