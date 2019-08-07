import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
    <style>${css}</style>
    <span></span>
`

class Teste extends HTMLElement{
    static get observedAttributes(){
        return ['value']
    }

    constructor(){
        super()
        this._shadownRoot = this.attachShadow({'mode': 'open'})
        this._shadownRoot.appendChild(template.content.cloneNode(true))
        this._teste = this._shadownRoot.querySelector('span')
    }

    attributeChangedCallback(name, oldValue, value){
        this[name] = value
    }

    set value(vale){
        this._teste.innerHTML = value
    }
}

if( !window.customElements.get('my-teste')) {
    window.customElements.define('my-teste', Teste)
}