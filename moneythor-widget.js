const moneythorTemplate = document.createElement('template');
moneythorTemplate.innerHTML = `
  <div></div>
`;

class MoneythorWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(moneythorTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector('div').innerHTML = '';
  }

  static get observedAttributes() {
    return ['data-type', 'data-options'];
  }

  async loadService(serviceName, options) {
    let searchResult = await import('./' + serviceName + '.js');
    const searchResultTag = document.createElement(serviceName);
    searchResultTag.setAttribute('data-options', options);
    this.shadowRoot.querySelector('div').appendChild(searchResultTag);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(newValue);
    if (name == 'data-type') {
      this.type = newValue;
    } else if (name == 'data-options') {
      this.loadService('search-result', newValue);
    }
  }
}

window.customElements.define('moneythor-widget', MoneythorWidget);
