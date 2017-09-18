import svg4everbody from 'svg4everybody';
import GMaps from './map/gmaps';
import HeaderTools from './top-nav/header-tools';

import './icons';
import './footer';

svg4everbody();

const GMAPSJSAPIKEY = 'AIzaSyCN3Soebworjm6dilkDjyRapS0m4i-kfCI';

const initPage = () => {
  document.documentElement.classList.remove('no-js');
  loadGMaps();
  loadHeaderTools();
};

document.addEventListener('DOMContentLoaded', initPage);

window.loadGMaps = () => {
  if (document.querySelector('[data-latlng],[data-address]')) {
    if (typeof(google) === 'undefined') {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + GMAPSJSAPIKEY + "&callback=maps_loaded_go";
      document.body.appendChild(script);

    } else {
      maps_loaded_go();
    }
  }
};

window.maps_loaded_go = () => {
  for (let recs = document.querySelectorAll('[data-latlng],[data-address]'), i=recs.length - 1; i >= 0; i--)
    new GMaps(recs[i], {counter: i});
};

window.loadHeaderTools = () => {
  new HeaderTools();
};