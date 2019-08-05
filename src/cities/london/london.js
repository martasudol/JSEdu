import axios from 'axios';
import {config} from '../../config';

function getHotels() {
    return axios.get(config.api.url + config.api.hotels.getHotel);
}

function getCities() {
    return axios.get(config.api.url + config.api.cities.getCity);
}

function bestLondonHotels() {
    getCities()
        .then(respo => {
           console.log(respo);
        });

    getHotels()
        .then(response => {
            console.log(response.data);

            // for (let i = 0; i < hotelListResponse.length; i++) {
            //     if (hotelListResponse[i].stars === 5) {
            //         $('<div>', {id: "hotel-" + i}).appendTo('.positions');
            //         $('<div>', {id: "hotel-img-" + i}).appendTo('.positions');
            //         $('<div>', {id: "hotel-mobile-" + i}).appendTo('.positions');
            //         document.getElementById("hotel-" + i).innerHTML =
            //             `<div class='hotel-title d-flex flex-row justify-content-between align-items-center'><p class="col-9">${hotelListResponse[i].name} - ${hotelListResponse[i].city}</p>
            //             <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            //             </div>`;
            //         document.getElementById("hotel-img-" + i).innerHTML =
            //             `<div class="d-flex flex-row align-items-center mb-4"><img src=${hotelListResponse[i].images[0]} class="m-4">
            //             <div class="hotel-info"><p>${hotelListResponse[i].address}</p>
            //             <p>${hotelListResponse[i].country}</p>
            //             <p>Price: <span class="price">${hotelListResponse[i].price}</span></p>
            //             </div>
            //             <div class="contact-info d-none d-md-flex flex-column align-items-end">
            //                 <p>Phone number: ${hotelListResponse[i].phone}</p>
            //                 <p>E-mail: ${hotelListResponse[i].email}</p>
            //                 <a class="hotel-website" href="${hotelListResponse[i].website}">${hotelListResponse[i].website}</a>
            //             </div>
            //             </div>
            //             `;
            //         document.getElementById('hotel-mobile-' + i).innerHTML = `
            //             <div class="contact-info d-flex d-md-none flex-column mb-4 pb-4">
            //                 <p>Phone number: ${hotelListResponse[i].phone}</p>
            //                 <p>E-mail: ${hotelListResponse[i].email}</p>
            //                 <a class="hotel-website" href="${hotelListResponse[i].website}">${hotelListResponse[i].website}</a>
            //             </div>
            //         `;
            //     }
            // }
        });
}

bestLondonHotels();