class ApartmentGridComponent{
    constructor (){
        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('div');
        this.htmlElement.innerHTML = 'Jau netrukus turėsime NT pasiūlymų Jums!'
    }
}