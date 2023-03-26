class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const button = document.createElement('button');
    button.innerText = this.getAttribute('title');
    shadow.appendChild(button);
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      const functionName = this.getAttribute('onclick');
      if (functionName) {
        window[functionName]();
      }
    });
  }
  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.shadowRoot.querySelector('button').innerText = newValue;
    }
  }
}

window.customElements.define('my-button', MyButton);

function alertUnisinos () { alert("Trabalho unisnos");}
function alertAluno () { alert("Aluno: JONATHAN LEONHARDT");}