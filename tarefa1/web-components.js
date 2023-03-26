class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    div.textContent = 'Olá, eu sou um componente!';
    shadow.appendChild(div);
  }
}
window.customElements.define('my-component', MyComponent);