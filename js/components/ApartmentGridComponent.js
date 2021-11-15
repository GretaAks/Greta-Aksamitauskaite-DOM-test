class ApartmentGridComponent{
    constructor (){
        this.state= {
            loading:false,
            apartments: []
        }
        this.init();
    }

    fetchApartments = () => API.fetchApartments(this.saveApartments,alert);

    saveApartments = (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;

        this.render();
    }

    showError = (err) => alert(err);

    wrapColumn = (element) => {
        const column= document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
    }

    init = () => {
        this.state.loading = true;
        this.fetchApartments();

        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-2';
        this.render();
    }

    render = () => {
        const {loading,apartments} = this.state;
        if (loading) {
            this.htmlElement.innerHTML= '<div class=" text-center"><img src="assets/loading.gif"/</div>';
        } else if (apartments.length>0){
            this.htmlElement.innerHTML= '';
            const apartmentElement= apartments
            .map(x => new ApartmentCardComponent(x))
            .map (x => x.htmlElement)
            .map (this.wrapColumn);
            this.htmlElement.append(...apartmentElement)
        } else {
            this.htmlElement.innerHTML= 'Atsiprašome, bet šiuo metu neturime NT pasiūlymų.';
        }
        }
    }
