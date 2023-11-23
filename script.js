 
document.querySelectorAll('.nav-link').forEach(link => {
   if(link.href === window.location.href){
     link.setAttribute('aria-current', 'package')
   }
 })

 $("a.link").click(function(){
   $("a.link").css("background-color", "black");
 $(this).css("background-color", "red");
});







 /*
      let number = document.getElementById("number");
      let counter = 0;
      setInterval(() => {
         if(counter == 80){
            clearInterval();
         } else{
            counter += 1;
          number.innerHTML = counter + "Up To </br> Mbps";
         }
          
      }, 25);

*/

