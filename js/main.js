var aantalmijnen = 10;

while (aantalmijnen > 0){
  aantalmijnen --;
  // alert(aantalmijnen);
  placemines();
}

function placemines() {
  var rn = Math.floor(Math.random() * 113);

  // document.getElementById(rn).onclick = "mine()";
  // // if (onclick){
  // // } 
  alert("ik werk " + rn);

  if (document.getElementById(rn).src == "img/flag.png"){
    onclick = function() {mine()};
  }

  // 'DOMContentLoaded', () => 


}
alert("Er zijn 10 mijnen geplaatst");

function mine(nee){
  document.getElementById(rn).src = "img/mine.png";
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

