var aantalmijnen = 10;

// while (aantalmijnen > 0){
//   aantalmijnen --;
//   placemines();
// }

// function placemines(){
//   var mijn = Math.floor(Math.random() * 113);
//   var mijnnummer = 0;
//   alert(document.getElementById(mijn).innerHTML);
//   document.getElementById(mijn).onclick = verborgenmijn();
//   console.log("aantalmijnen " + mijnnummer)
//   mijnnummer ++; 
// }

const blok = document.querySelectorAll(".block");

blok.forEach(div => {
  div.addEventListener('click', (event) => {
    console.log("Clicked on: " + event.target.id);
    var clicked = event.target.id;
  })
})

function verborgenmijn(){
  src = "img/mine.png";
}

function vlag(){
  document.getElementById(clicked).src = "img/flag.png";
}



function stopWatch() {
  let second = getElementById("sec").innerHTML;
  let minute = getElementById("min").innerHTML;

  if (timer) {
      second++;

      if (second == 60) {
          minute++;
          second = 0;
      }
      setTimeout(stopWatch, 1000);
    }
  }
  
stopWatch();