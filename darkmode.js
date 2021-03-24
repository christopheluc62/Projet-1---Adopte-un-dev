<<<<<<< HEAD
let theme_toggler = document.querySelector('.theme_toggler');

theme_toggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
});



const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
=======
let theme_toggler = document.querySelector('#theme_toggler');
 let count = 1;
theme_toggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
    count ++;
    if(count %2 === 0){
      document.getElementById("logoAdopt").src = "pictures/DMDESKTOP.png";
    }else { 
      document.getElementById("logoAdopt").src= "pictures/logoAdopteUnDev.png";
      }
>>>>>>> ddee5a8f0767b23540f08df41c09ddd06cb51b0f
});