const myServiceTemplate = document.createElement('template');
myServiceTemplate.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>Hello <span>World</span>!</p>
  </div>
`;

class MyService extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(myServiceTemplate.content.cloneNode(true));

    this.shadowRoot.querySelector('span').innerHTML = '';
  }

  static get observedAttributes() {
    return ['data-options'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(newValue);
    if (name == 'data-options') {
      let theName = JSON.parse(newValue).name;
      this.shadowRoot.querySelector('span').innerHTML = theName;
    }
  }
}

window.customElements.define('my-service', MyService);
