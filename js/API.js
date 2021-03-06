const baseURL= 'http://localhost:3000';

class API {
    static fetchApartments= (success,failure) => {
        setTimeout (() => {
        fetch(`${baseURL}/apartments`)
        .then (res => res.json())
        .then(success)
        .catch(failure)
        },1000)
    }
    static deleteApartments = (id,success,failure) => {
        fetch(`${baseURL}/apartments/${id}`,{method:'DELETE'})
        .then(res=>res.ok? success(): failure(res.statusText))
        .catch(failure)
    }
}

//API.fetchApartments(
//    console.log,
 //   console.error
//)

//API.deleteApartments(
//    "3",
//    () => console.log('Ištrinta sėkmingai'),
//    console.error
//)