class CustomComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `

        <style>
          .custom-component {
            border: 1px solid black;
            padding: 16px;
            color: red;
          }
      
          .custom-component__title {
            font-size: 24px;
            margin-bottom: 16px;
            color: red;
          }
      
          .custom-component__content {
            font-size: 16px;
            color: red;
          }
        </style>

        <div class="custom-component">

          <div class="custom-component__title">
            <slot name="title"></slot>
          </div>

          <div class="custom-component__content">
            <slot name="content"></slot>
          </div>
          
        </div>

    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('custom-template', CustomComponent);