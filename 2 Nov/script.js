const Clothing =[
    {category:["casual","winter"],
    brand:"next",
    price:"£30",
    image:"jumper jpg",
    material: "wool",
    instock: true,
},
{category:["smart","winter"],
    brand:"next",
    price:"£50",
    image:"dress jpg",
    material: "cotton",
    instock: true,
},
{category:["occasion","summer"],
    brand:"next",
    price:"£80",
    image:"maxidress jpg",
    material: "satin",
    instock: true,
},
{category:["nightware","winter"],
    brand:"next",
    price:"£25",
    image:"pjs jpg",
    material: "cotton",
    instock: true,
},

]
const mainDiv= document.querySelector("main");
const showHide =document.getElementById("show-hide");

Clothing.forEach(createHTML);


function createHTML(article, i){
    if (article.instock){
        const div= createElement("div)")
        return
       `<div id= "car-${i}" class="each-article"> <h1> ${article.brand}</h1>
        <h2>${article.price}</h2>
        <p>${article.material}</p>
        </div>`;
    }

}



const FormDOM ={
    theForm:document.getElementById("the-form"),
    category:document.getElementById("input-category"),
    brand:document.getElementById("input-brand"),
    price:document.getElementById("input-price"),
    image:document.getElementById("input-image"),
    material:document.getElementById("input-material"),
    submit:document.getElementById("add-article"),

};

showHide.addEventListener("click",toggleForm);

function toggleForm(){
    if (FormDOM.theForm.style.display=="block"){
        FormDOM.theForm.style.display="none";
        this.innerHTML= "Show Form";
    }else{
        FormDOM.theForm.style.display="block";
        this.innerHTML="Hide Form";
    }}

FormDOM.submit.addEventListener("click", addArticle);
function addArticle(){
    var newArticle = new Article (
        FormDOM.category.value,
        FormDOM.brand.value,
        FormDOM.price.value,
        FormDOM.image.value,
        FormDOM.material.value,
    );

    Clothing.push(newArticle);
    createHTML(newArticle, Clothing.length-1)
}

class Article{
    constructor(){
    this.category=[_category];
    this.brand=_brand;
    this.price=_price;
    this.image=_image;
    this.material=_material;
    this.instock = true;

}
beepBeep(){
    alert("my brand is  "+ this.brand + " and the price is" +this.price);
}
}
Clothing.forEach(createHTML);

function createHTML(article, i){
    if(article.instock){
        const div= document.createElement("div");
        div.id= "article-" + i;
        div.className ="each-article;"
        const img = document.createElement("img")
        img.src=".//"
        const btn = document.createElement("button");
        btn.innerText="X";
        btn.title="click to remove"
        const h1=document.createElement("h1")
        h1.innerText=article.brand;
        const h2=document.createElement("h2")
        h2.innerText=article.price;
        const p=document.createElement("p")
        p.innerText=article.material;

        div.append(btn,h1,h2,p,img);
        article.DOM=div;
        mainDiv.appendChild(div);
    }
}


btn.addEventListener("click",function(){
    deleteArticle(MainDiv);
})

function deleteArticle(x){
    x.remove();}












