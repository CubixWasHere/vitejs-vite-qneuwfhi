// ========================================
// F1 ACADEMY V2
// CARPARTS.JS
// ========================================

const carParts = {

  frontWing:{

      name:"Front Wing",

      function:"Creates downforce and directs airflow around the front tyres.",

      location:"Front of the car",

      category:"Aerodynamics"

  },

  halo:{

      name:"Halo",

      function:"Protects the driver's head during crashes.",

      location:"Above the cockpit",

      category:"Safety"

  },

  sidepod:{

      name:"Sidepods",

      function:"Contains radiators that cool the power unit and guide airflow.",

      location:"Both sides of the car",

      category:"Cooling"

  },

  floor:{

      name:"Ground Effect Floor",

      function:"Produces most of the car's downforce using ground effect.",

      location:"Underneath the car",

      category:"Aerodynamics"

  },

  rearWing:{

      name:"Rear Wing",

      function:"Generates rear downforce and contains the DRS system.",

      location:"Rear of the car",

      category:"Aerodynamics"

  }

};

function showCarPart(part){

  const data = carParts[part];

  if(!data) return;

  document.getElementById("part-title").textContent = data.name;

  document.getElementById("part-function").textContent = data.function;

  document.getElementById("part-location").textContent = data.location;

  document.getElementById("part-category").textContent = data.category;

}

document.addEventListener("DOMContentLoaded",()=>{

  document.querySelectorAll("[data-part]").forEach(button=>{

      button.addEventListener("click",()=>{

          showCarPart(button.dataset.part);

      });

  });

  showCarPart("frontWing");

});
