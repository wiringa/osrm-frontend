"use strict";

var L = require("leaflet");

var cartoVoyager = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
  }
);

module.exports = {
  defaultState: {
    center: L.latLng(40, -120),
    zoom: 13,
    waypoints: [],
    language: "en",
    alternative: 0,
    layer: cartoVoyager,
  },
  services: [
    {
      label: "Car (fastest)",
      path: "https://router.project-osrm.org/route/v1",
    },
  ],
  layer: [
    {
      "openstreetmap.org": cartoVoyager,
    },
  ],
  baselayer: {
    one: cartoVoyager,
  },
};
