const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: block;
        }
    </style>
`;

class /* {className} */ extends HTMLElement {
    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // add any initial variables here
    }

    connectedCallback() {
        // do something here on element init
    }
}

customElements.define("/* {tagName} */", /* {className} */);
