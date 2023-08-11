const expanddiv = document.getElementById("expandingdiv");
const cardcenter = document.getElementsByClassName("card-center");

//atidaro ir uzdaro expand div su animacija kai pamygi migtuka
function showDiv() {
   expanddiv.classList.toggle("isOpen")
   cardcenter[0].classList.toggle("isOpen")
}
// darau tai ant prikolo ismokt labiau js
// ir kad tu suprastum si js coda ir pasymokitum is jo
// newElement funkcija (ja callina html code)
function newElement() {
   // gaunam text ivarom ji i variable "value"
   var value = document.getElementById("myInput").value;
     // sukuriam nauja listo elementa 
     var li = document.createElement("li");
     // Set the text content to the value
     li.textContent = value;
     // perkeliam i item i lista
     myUL.appendChild(li);
     // paclearinam kai pamygam mygtuka
     myInput.value = "";
   }
   //funkcija kuri paselektina "myUL" (kuris yra tarp list kaip div) ir padeletina viska
function resetElement() {
      document.getElementById("myUL").innerHTML = "";
}

const checkbox = document.getElementById("darkmodecb")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})