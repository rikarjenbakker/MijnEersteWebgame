var aantalmijnen = 10;

while (aantalmijnen > 0){
  aantalmijnen --;
  // alert(aantalmijnen);
  placemines();
}

function placemines() {
  var rn = Math.floor(Math.random() * 113);

  if (onclick){
    document.getElementById(rn).onclick = "mine(this)";
  } 

  if ('DOMContentLoaded', () => document.getElementById(rn).src == "img/flag.png"){
    document.getElementById(rn).src = "img/mine.png";
  }

  alert("ik werk " + rn);

}
alert("Er zijn 10 mijnen geplaatst");

function mine(nee){
  document.getElementById(nee.id).src = "img/mine.png";
}

function vlag(ja){
  document.getElementById(ja.id).src = "img/flag.png";
}


const blok = document.querySelectorAll('.block')

blok.forEach(div => { 
  div.addEventListener('click', (event) => {
    console.log('Clicked on: ' + event.target.id);
  })
})

