class ApartmentCardComponent {
    constructor (props) {
        this.props= props;
        this.init();
    }

    init = () =>{
        this.htmlElement= document.createElement('article');
        this.htmlElement.className= 'card p-2 shadow';
        this.htmlElement.innerHTML= `
        <h2 class="h5">Kortelė</h2>
        `
    }
}