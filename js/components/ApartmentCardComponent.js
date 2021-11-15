class ApartmentCardComponent {
    static USD_EUR= 0.88;

    constructor (props) {
        this.props= props;
        this.init();
    }

    init = () =>{
        const {type, owner, roomCount,squares,address,price,imgSrc,onDelete} = this.props;
        const {fullname,email,phone} = owner;
        const {city,country,street,number} = address;
        const {amount, currency} = price;

        const finalPrice = currency === '$'? amount / ApartmentCardComponent.USD_EUR:amount;
        const formatePrice = Math.round (100*finalPrice)/ 100 + ' €';

        this.htmlElement= document.createElement('article');
        this.htmlElement.className= 'card p-2 shadow';
        this.htmlElement.innerHTML= `
        <div class="card">
        <img src="${imgSrc}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${street}-${number},</h5>
        <h6 class="card-title">${city},${country}</h6>
        </div>
        <div class="p-2"><strong>Aprašymas:</strong></div>
        <ul>
        <li>Kategorija: <strong>${type}</strong></li>
        <li>Kambarių sk.: <strong>${roomCount}</strong></li>
        <li>Kvadratūra: <strong>${squares}m2</strong></li>
        </ul>
        <hr>
        <div class="h4 text-center p-2"><strong>${formatePrice}</strong></div>
        <hr>
        <div class="p-2"><strong>Kontaktai:</strong></div>
        <ul>
        <li>${fullname}</li>
        <li>${email}</li>
        <li>${phone}</li>
        </ul>
        </div>
        <button class="btn btn-success">Ištrinti</button>
        `;
        const btn = this.htmlElement.querySelector('.btn');
        btn.addEventListener('click',onDelete);
    }
}