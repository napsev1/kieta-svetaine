//atidaro div kai pamygi migtuka
function showDiv() {
   document.getElementById('expandingdiv').style.display = "block";
}
 // as esu genijus no cap
 function closeDiv(){
   document.getElementById("expandingdiv").style.display = "none";
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


 
