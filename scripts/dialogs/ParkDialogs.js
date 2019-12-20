import { useEateries } from "../eateries/EateryProvider.js";

const eventHub = document.querySelector(".container");

const ParkDialogComponent = () => {
  eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("open--")){
      const [prefix, code] = event.target.id.split("--")
      const theDialog = document.querySelector(`.attractionList_attractions_${code}`)

      const eateries = useEateries()
      const foundEatery = eateries.find(
        (singleEatery) => {
          return singleEatery.state === event.target.id.split("--")[1]
        }
      )
     
      theDialog.showModal();


      const eateryHTML = `
        <div>
          <strong>${foundEatery.businessName}</strong>
          ${foundEatery.city}, ${foundEatery.state}
          ${foundEatery.description}
        </div>
      `
       document.querySelector(`.attractionList_eateries_${code}`).innerHTML = eateryHTML
       console.log(eateryHTML)
    }

    if(event.target.id.startsWith("close--")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  }) 
}
export default ParkDialogComponent

// For popup of Eatery information if time allows
// 
// const popUp = document.querySelectorAll(".popUp");
// popUp.forEach(pop => {
//   pop.addEventListener("click", event => {
//     const dialogElement = event;
//     dialogElement.showModal();
//   });
// });