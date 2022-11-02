const button = document.getElementById("button");
const Main = document.querySelector("main");
var toAppend = "";
var name = document.getElementById ("name");
var year = document.getElementById ("year");
var price = document.getElementById ("price");


button.addEventListener('click', () => {
    const form = document.getElementById('form');
  

    if (form.style.display === 'none') {
        
        form.style.display = 'block';
      } else {
       
        form.style.display = 'none', button.value="open form";
    }
});


    toAppend.forEach(createHTML);

    function createHTML(name,year,price){
        toAppend+= name.value, year.value, price.value;

    }

    



   
        //toAppend +=`<div> 
       // <h1>${form.name}</h1>
     //   <h2>${form.year}</h2>
       // <p>${form.price}</p>
      //  </div>`
       

   // Main.innerHTML= toAppend;
