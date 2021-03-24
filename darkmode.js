let theme_toggler = document.querySelector('#chk');
 let count = 1;
theme_toggler.addEventListener('click', function(){ 
    document.body.classList.toggle('dark_mode');
    count ++;
    if(count %2 === 0){
      document.getElementById("logoAdopt").src = "pictures/DMDESKTOP.png";
    }else { 
      document.getElementById("logoAdopt").src= "pictures/logoAdopteUnDev.png";
      }
});



const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});