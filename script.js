// Write your JavaScript code here!


window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");
   
   function formSubmit(event){
      if (pilotInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         event.preventDefault();
         alert("All fields are required!");
      }
   }

   form.addEventListener("submit", formSubmit);
   
});







/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
