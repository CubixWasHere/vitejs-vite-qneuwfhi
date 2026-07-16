import "./style.css";
import carImage from "./image/F1CarAnatomy.jpeg";
import { parts } from "./carParts.js";

document.querySelector("#app").innerHTML = `
<nav>
<div class="logo">🏎️ F1 Academy</div>

<ul>
<li><a href="#">Home</a></li>
<li><a href="#car">Car Anatomy</a></li>
</ul>
</nav>

<section class="hero">
<h1>MASTER FORMULA 1</h1>
<p>Click the buttons below to learn about every important part of an F1 car.</p>
</section>

<section id="car" class="anatomy">

<h2>Interactive Car Anatomy</h2>

<img src="${carImage}" class="car-image">

<div class="part-buttons">

<button onclick="showPart('mguk')">MGU-K</button>
<button onclick="showPart('mguh')">MGU-H</button>
<button onclick="showPart('exhaust')">Exhaust</button>
<button onclick="showPart('chassis')">Monocoque</button>
<button onclick="showPart('fuel')">Fuel Cell</button>
<button onclick="showPart('wheels')">Wheels</button>
<button onclick="showPart('frontWing')">Front Wing</button>
<button onclick="showPart('nose')">Nose</button>
<button onclick="showPart('halo')">Halo</button>
<button onclick="showPart('steering')">Steering</button>
<button onclick="showPart('airbox')">Air Intake</button>
<button onclick="showPart('sidepods')">Sidepods</button>
<button onclick="showPart('radiators')">Radiators</button>
<button onclick="showPart('engine')">Power Unit</button>
<button onclick="showPart('turbo')">Turbo</button>
<button onclick="showPart('battery')">Battery</button>
<button onclick="showPart('gearbox')">Gearbox</button>
<button onclick="showPart('floor')">Floor</button>
<button onclick="showPart('diffuser')">Diffuser</button>
<button onclick="showPart('rearWing')">Rear Wing</button>
<button onclick="showPart('drs')">DRS</button>
<button onclick="showPart('suspension')">Suspension</button>
<button onclick="showPart('brakes')">Brakes</button>
<button onclick="showPart('brakeDucts')">Brake Ducts</button>
<button onclick="showPart('tyres')">Tyres</button>

</div>

<div class="info-box">

<h2 id="title">Click Any Part</h2>

<p><strong>Function:</strong></p>
<p id="function"></p>

<br>

<p><strong>Material:</strong></p>
<p id="material"></p>

<br>

<p><strong>Location:</strong></p>
<p id="location"></p>

<br>

<p><strong>Fun Fact:</strong></p>
<p id="fact"></p>

</div>

</section>
`;

window.showPart = function(name){

const part = parts[name];
parts.mguk = {
  title:"MGU-K",
  function:"Recovers energy during braking and provides extra power.",
  material:"Hybrid Electric Motor",
  location:"Power Unit",
  fact:"Can add about 160 horsepower."
  };
  
  parts.mguh = {
  title:"MGU-H",
  function:"Recovers energy from the turbocharger.",
  material:"Electric Motor",
  location:"Turbocharger",
  fact:"Only Formula 1 uses this technology."
  };
  
  parts.exhaust = {
  title:"Exhaust",
  function:"Releases gases from the engine.",
  material:"Titanium",
  location:"Rear",
  fact:"Temperatures can exceed 900°C."
  };
  
  parts.chassis = {
  title:"Monocoque",
  function:"Protects the driver and supports every component.",
  material:"Carbon Fiber",
  location:"Center",
  fact:"The monocoque is incredibly strong yet very light."
  };
  
  parts.fuel = {
  title:"Fuel Cell",
  function:"Stores the race fuel safely.",
  material:"Kevlar Reinforced Rubber",
  location:"Behind Driver",
  fact:"Holds around 110 kg of fuel."
  };
  
  parts.wheels = {
  title:"Wheels",
  function:"Hold the tyres and transfer power to the track.",
  material:"Magnesium Alloy",
  location:"Four Corners",
  fact:"Formula 1 uses forged magnesium wheels."
  };

document.getElementById("title").textContent = part.title;
document.getElementById("function").textContent = part.function;
document.getElementById("material").textContent = part.material;
document.getElementById("location").textContent = part.location;
document.getElementById("fact").textContent = part.fact;

};