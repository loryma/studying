import { getMap } from './address-map.js';

const $addresses = document.getElementById('addresses')

;(async () => {

  const response = await fetch('https://raw.githubusercontent.com/loryma/studying/main/map-leaflet/db/addresses.json')
  const addresses = await response.json()


  for (const place in addresses) {

    const $button = document.createElement('button')

    $button.textContent = place


    const address = addresses[place]

    const query = address.replace(
      /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+),\s([0-9А-ЯЁа-яё]+)/,
      '$3+$1+$2,+Екатеринбург'
    )

    $button.dataset.address = address
    $button.dataset.query = query

    $addresses.append($button)
  }
})()


$addresses.addEventListener('click', async ({ target }) => {
  if (target.tagName !== 'BUTTON') return

  const { address, query } = target.dataset;


  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
  )

  const { display_name, lat, lon } = (await response.json())[0];

  const name = display_name.match(/[А-ЯЁа-яё\s(«\-»)]+/)[0];

  const position = [lat, lon];

  const tooltip = `${name}<br>${address}`;

  getMap(position, tooltip);
})