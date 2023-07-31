// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2 - lat1);  // deg2rad below
//     var dLon = deg2rad(lon2 - lon1);
//     var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2)
//         ;
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c; // Distance in km
//     return d;
// }

// function deg2rad(deg) {
//     return deg * (Math.PI / 180)
// }


// // window.onload = () => {
// // const distanceTag = document.querySelector('p');
// // let dis = getDistanceFromLatLonInKm(30.709330, 76.689280, 30.7132906, 76.6908791)
// // console.log(`distance: ${dis}`)
// // }

// // getting places from APIs
// function loadPlaces(position) {
//     const params = {
//         radius: 300,    // search places not farther than this value (in meters)
//         clientId: 'P0BIDVPVK41ZDJ3OVK2I0F1FKOG1QNZAYT3JWP5MBJZWXGL0',
//         clientSecret: 'GBZ3V1HLMI0JFA3S1EHAKCWZ0TX0JH2IOK25SREJGD3ENHGL',
//         version: '20300101',    // foursquare versioning, required but unuseful for this demo
//     };

//     // CORS Proxy to avoid CORS problems
//     const corsProxy = 'https://cors-anywhere.herokuapp.com/';

//     // Foursquare API (limit param: number of maximum places to fetch)
//     const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
//         &ll=${position.latitude},${position.longitude}
//         &radius=${params.radius}
//         &client_id=${params.clientId}
//         &client_secret=${params.clientSecret}
//         &limit=30 
//         &v=${params.version}`;
//     return fetch(endpoint)
//         .then((res) => {
//             return res.json()
//                 .then((resp) => {
//                     return resp.response.venues;
//                 })
//         })
//         .catch((err) => {
//             console.error('Error with places API', err);
//         })
// };


// window.onload = () => {
//     const scene = document.querySelector('a-scene');

//     // first get current user location
//     return navigator.geolocation.getCurrentPosition(function (position) {

//         // than use it to load from remote APIs some places nearby
//         loadPlaces(position.coords)
//             .then((places) => {
//                 places.forEach((place) => {
//                     const latitude = place.location.lat;
//                     const longitude = place.location.lng;

//                     // add place name
//                     const placeText = document.createElement('a-link');
//                     placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
//                     placeText.setAttribute('title', place.name);
//                     placeText.setAttribute('scale', '15 15 15');

//                     placeText.addEventListener('loaded', () => {
//                         window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
//                     });

//                     scene.appendChild(placeText);
//                 });
//             })
//     },
//         (err) => console.error('Error in retrieving position', err),
//         {
//             enableHighAccuracy: true,
//             maximumAge: 0,
//             timeout: 27000,
//         }
//     );
// };

// fsq3xfCpUVV8wIgyv5fpUzHdB6G59t5GDszGA6tvu7lchH8=






// 3D model with ThreeJs
console.log("hellow")
// import * as THREE from './node_modules/three';
// import * as THREEx from './node_modules/@ar-js-org/ar.js/three.js/build/ar-threex-location-only.js';

// function main() {
//     const canvas = document.querySelector('canvas.webgl')
//     console.log("dafkf", THREE, THREEx);
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, 1.33, 0.1, 10000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvas });

//     const arjs = new THREEx.LocationBased(scene, camera);
//     const cam = new THREEx.WebcamRenderer(renderer);

//     const geom = new THREE.BoxGeometry(20, 20, 20);
//     const mtl = new THREE.MeshBasicMaterial({ color: 0xff0000 });

//     const deviceOrientationControls = new THREEx.DeviceOrientationControls(camera);

//     let fetched = false;

//     // Handle the "gpsupdate" event on the LocationBased object
//     // This triggers when a GPS update (from the Geolocation API) occurs
//     // 'pos' is the position object from the Geolocation API.

//     arjs.on("gpsupdate", async (pos) => {
//         if (!fetched) {
//             const response = await fetch(`https://hikar.org/webapp/map?bbox=${pos.coords.longitude - 0.01},${pos.coords.latitude - 0.01},${pos.coords.longitude + 0.01},${pos.coords.latitude + 0.01}&layers=poi&outProj=4326`);

//             const geojson = await response.json();

//             geojson.features.forEach(feature => {
//                 const box = new THREE.Mesh(geom, mtl);
//                 arjs.add(box, feature.geometry.coordinates[0], feature.geometry.coordinates[1]);
//             });

//             fetched = true;
//         }
//     });

//     arjs.startGps();

//     requestAnimationFrame(render);

//     function render() {
//         if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
//             renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
//             const aspect = canvas.clientWidth / canvas.clientHeight;
//             camera.aspect = aspect;
//             camera.updateProjectionMatrix();
//         }

//         // Update the scene using the latest sensor readings
//         deviceOrientationControls.update();

//         cam.update();
//         renderer.render(scene, camera);
//         requestAnimationFrame(render);
//     }
// }

// main();