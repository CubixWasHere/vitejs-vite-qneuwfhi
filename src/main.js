// ========================================
// F1 ACADEMY V2
// MAIN.JS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  console.log("F1 Academy Loaded!");

  // ==========================
  // Smooth Scroll
  // ==========================

  document.querySelectorAll("[data-scroll]").forEach(button => {

      button.addEventListener("click", (e) => {

          e.preventDefault();

          const section = document.getElementById(
              button.dataset.scroll
          );

          if(section){

              section.scrollIntoView({

                  behavior:"smooth",
                  block:"start"

              });

          }

      });

  });

  // ==========================
  // Navbar Shadow
  // ==========================

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll",()=>{

      if(window.scrollY > 40){

          navbar.style.boxShadow =
          "0 10px 25px rgba(0,0,0,.35)";

      }

      else{

          navbar.style.boxShadow =
          "none";

      }

  });

  // ==========================
  // Fade In Sections
  // ==========================

  const sections =
  document.querySelectorAll(".section");

  const observer =
  new IntersectionObserver((entries)=>{

      entries.forEach(entry=>{

          if(entry.isIntersecting){

              entry.target.style.opacity="1";
              entry.target.style.transform="translateY(0px)";

          }

      });

  },{

      threshold:0.15

  });

  sections.forEach(section=>{

      section.style.opacity="0";
      section.style.transform="translateY(40px)";
      section.style.transition=".7s";

      observer.observe(section);

  });

});
