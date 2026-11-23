// Darling Plumbing location (from the Google Maps listing)
const shopLocation = [52.9749543, -6.0472247];

const map = L.map("map", {
  center: shopLocation,
  zoom: 14,
  scrollWheelZoom: false,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pin = L.divIcon({
  className: "map-pin",
  html:
    '<svg viewBox="0 0 36 46" aria-hidden="true"><path d="M18 1C8.6 1 1 8.4 1 17.6 1 29.8 18 45 18 45s17-15.2 17-27.4C35 8.4 27.4 1 18 1z" fill="currentColor"/><circle cx="18" cy="17.5" r="6" fill="#f9ff00"/></svg>',
  iconSize: [36, 46],
  iconAnchor: [18, 45],
  popupAnchor: [0, -40],
});

L.marker(shopLocation, { icon: pin, alt: "Darling Plumbing" })
  .addTo(map)
  .bindPopup("<strong>Darling Plumbing</strong><br>Ballynerrin Lower, Wicklow");
