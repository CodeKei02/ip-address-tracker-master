'use strict';
import { interval } from "./modal.js";
let input = document.querySelector(".app__input--input");
let button = document.querySelector("#btn");
let userIp = document.querySelector(".user-ip");
let userLocation = document.querySelector(".user-location");
let userTimezone = document.querySelector(".user-timezone");
let userIsp = document.querySelector(".user-isp");


const response = async () => {
    try {
        const apiKey = "at_VgKg3WkMgFE3KWGWtF6F930UsN0dg";
        const url = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input.value}`);
        const data = await url.json();
        const latitude = data.location.lat;
        const longitude = data.location.lng;

        generatorMap(latitude, longitude);
        userIp.innerHTML = data.ip;
        userLocation.innerHTML = `${data.location.country}, ${data.location.city}`;
        userTimezone.innerHTML = `${data.location.timezone}`;
        userIsp.innerHTML = `${data.isp}`;

        input.value = "";

    } catch (error) {
        console.error(error);
    }
}

function generatorMap(latitude, longitude) {
    let map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .openPopup();
}

button.addEventListener('click', response);
