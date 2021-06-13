// Write your JavaScript code here!


window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   
   function formSubmit(event){
      event.preventDefault();
      if (pilotInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
      }else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Fuel level and cargo mass must be numbers!");
      }else{
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `${pilotInput.value} Ready`;
         copilotStatus.innerHTML = `${coPilotInput.value} Ready`;
         readyOrNot();
      }

      function readyOrNot(){
         if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000){
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color ="red";
            }if (cargoMassInput.value > 10000){
               cargoStatus.innerHTML =  "There is too much mass for the shuttle to take off."
            }else if (fuelLevelInput.value < 10000){
               fuelStatus.innerHTML =  "There is not enough fuel for the journey.";
            }else{
               launchStatus.style.color ="green";
               launchStatus.innerHTML = "Shuttle is ready for launch.";
            }
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
