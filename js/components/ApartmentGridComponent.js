class ApartmentGridComponent{
    constructor (){
        this.state= {
            loading:false,
            apartments: []
        }
        this.init();
    }

    fetchApartments = () => {
        API.fetchApartments(
          (apartments) => {
            this.state.loading = false;
            this.saveApartments(apartments);
          },
          (err) => {
            alert(err);
            this.state.loading = false;
            this.render();
          }
        );
      };

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

    deleteApartments = (id) => {
        id,
        () => API.fetchApartments(this.saveApartments,alert),
        alert
    };

    init = () => {
        this.state.loading = true;
        this.fetchApartments();

        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-2';
        this.render();
    }

    render = () => {
        const { loading, apartments } = this.state;
        if (loading) {
          this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
        } else if (apartments.length > 0) {
          this.htmlElement.innerHTML = '';
          const apartmentElements = apartments
            .map(({ id, ...props }) => new ApartmentCardComponent({
              ...props,
              onDelete: () => this.deleteApartments(id)
            }))
            .map(x => x.htmlElement)
            .map(this.wrapColumn);
          this.htmlElement.append(...apartmentElements)
        } else {
          this.htmlElement.innerHTML = `<h2>Atsiprašome, šiuo metu neturime NT pasiūlymų</h2>`;
        }
      }
    }
