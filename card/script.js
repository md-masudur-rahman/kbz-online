<script>
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
   if(counter == 16){
      clearInterval();
   } else{
      counter += 1;
    number.innerHTML = counter + "";
   }
    
}, 25);

</script>


