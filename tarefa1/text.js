class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['texto'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'texto') {
      this.shadowRoot.innerHTML = `<p>${newValue}</p>`;
    }
  }
}
window.customElements.define('my-text', CustomElement);