document.addEventListener('DOMContentLoaded', () => {
    class BienPatrimonial extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            const template = document.getElementById('template-bienPatimonial');
            this.shadowRoot.appendChild(template.cloneNode(true));
        }
    
        connectedCallback() {
            let bienesAPI = [];
            fetch('https://demo3618184.mockable.io/patrimonio-laLaguna')
                .then(response => response.json())
                .then(bienes => {
                    bienesAPI = bienes;
                   // bienes.forEach(bien => {
                        /* const card = document.createElement('bien-patrimonial');
    
                        this.shadowRoot.querySelector('#nombre').textContent = bien.nombre;
                        this.shadowRoot.querySelector('#antecedentes').textContent = bien.antecedentes;
                        this.shadowRoot.querySelector('#tipo').textContent = bien.tipo;
                        this.shadowRoot.querySelector('#imagen').src = bien.img;
                        this.shadowRoot.querySelector('#localizacion').textContent = bien.localizacion;*/
                        //this.shad owRoot.querySelector('#contenedor-bienes').appendChild(card); // Agrega el elemento a tu contenedor
                    //});
                })
                .catch(error => {
                    console.error('Error al obtener datos de la API: ', error);
                });
            bienesAPI.forEach(bien => {
                const card = document.createElement('bien-patrimonial');
                card.shadowRoot.querySelector('#nombre').textContent = bien.nombre;
                card.shadowRoot.querySelector('#antecedentes').textContent = bien.antecedentes;
                card.shadowRoot.querySelector('#tipo').textContent = bien.tipo;
                card.shadowRoot.querySelector('#imagen').src = bien.img;
                card.shadowRoot.querySelector('#localizacion').textContent = bien.localizacion;
                card.shadowRoot.querySelector('#contenedor-bienes').appendChild(card); // Agrega el elemento a tu contenedor
            });
        }
    }
    
    customElements.define('bien-patrimonial', BienPatrimonial);
});