import { getMap } from './city-switch-map.js';

const $cities = document.getElementById('cities');

;(async () => {
    const response = await fetch('https://raw.githubusercontent.com/loryma/studying/main/map-leaflet/db/cities.json');

    console.log(response);
    const cities = await response.json();

    for (const city in cities) {
        const $button = document.createElement('button');

        $button.textContent = city;

        const { lat, lon } = cities[city];

        $button.dataset.city = city;
        $button.dataset.lat = lat;
        $button.dataset.lon = lon;

        $cities.append($button);
    }
})();

$cities.addEventListener('click', ({ target }) => {
    if (target.tagName != 'BUTTON') return;

    const { city, lat, lon } = target.dataset;
    const position = [lat, lon];

    getMap(position, city);
});