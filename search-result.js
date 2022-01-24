const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>The Google search result of your name is <a target="_blank" rel="noopener">here</a></p>
  </div>
`;

class SearchResult extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('a').href = '';
  }

  static get observedAttributes() {
    return ['data-options'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(newValue);
    if (name == 'data-options') {
      let theName = JSON.parse(newValue).name;
      this.shadowRoot.querySelector(
        'a'
      ).href = `https://www.google.com/search?q=${theName}`;
    }
  }
}

window.customElements.define('search-result', SearchResult);
