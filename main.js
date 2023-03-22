
const form = document.querySelector("#newForm");
const input = document.querySelector("#Tinput");
const tskList = document.querySelector("#tasks");

let badges = [{ name:"Boulder", imgB:"./Images/badge/b1.png"}
  ,{name:"Cascade", imgB:"./Images/badge/b2.png"}
  ,{name:"Thunder", imgB:"./Images/badge/b3.png"}
  ,{name:"Rainbow", imgB:"./Images/badge/b4.png"}
  ,{name:"Soul", imgB:"./Images/badge/b5.png"}
  ,{name:"Marsh", imgB:"./Images/badge/b6.png"}
  ,{name:"Volcano", imgB:"./Images/badge/b7.png"}
  ,{name:"Earth", imgB:"./Images/badge/b8.png"}
]

const badgelist = document.querySelector(".badge-items");
for(let i=0;i < badges.length;i++)
{
  const bDiv = document.createElement("div");
  const bImg = document.createElement("img");
  bImg.setAttribute('alt','Picture of Badge');
  bImg.setAttribute('src',badges[i].imgB);

  const badgeListItems = document.createElement("li")
  badgeListItems.textContent = badges[i]["name"];
  
  bDiv.classList.add("bDiv")
  bDiv.classList.add("pkTitle");
  bImg.classList.add("bIcon")

  badgelist.appendChild(bDiv);


  bDiv.appendChild(badgeListItems);
  bDiv.appendChild(bImg);
}

// For visual reasons I added the first 15 pokemon from the pokedex
// If I were to eventually add all 151 I'd likely make this array it's own json file and call it as it would be huge
let pokemons = [
  {
    name:"Bulbasaur",
    imgSrc:"./Images/pkm/001.png",
    type1:"./Images/type/grass.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  },
  {
    name:"Ivysaur",
    imgSrc:"./Images/pkm/002.png",
    type1:"./Images/type/grass.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  },
  {
    name:"Venusaur",
    imgSrc:"./Images/pkm/003.png",
    type1:"./Images/type/grass.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  },
  {
    name:"Charmander",
    imgSrc:"./Images/pkm/004.png",
    type1:"./Images/type/fire.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Charmeleon",
    imgSrc:"./Images/pkm/005.png",
    type1:"./Images/type/fire.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Charizard",
    imgSrc:"./Images/pkm/006.png",
    type1:"./Images/type/fire.gif",
    type2:"./Images/type/flying.gif",
    isCaught:false,
  },
  {
    name:"Squirtle",
    imgSrc:"./Images/pkm/007.png",
    type1:"./Images/type/water.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Wartortle",
    imgSrc:"./Images/pkm/008.png",
    type1:"./Images/type/water.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Blastosie",
    imgSrc:"./Images/pkm/009.png",
    type1:"./Images/type/water.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Caterpie",
    imgSrc:"./Images/pkm/010.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Metapod",
    imgSrc:"./Images/pkm/011.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/none.gif",
    isCaught:false,
  },
  {
    name:"Butterfree",
    imgSrc:"./Images/pkm/012.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/flying.gif",
    isCaught:false,
  },
  {
    name:"Weedle",
    imgSrc:"./Images/pkm/013.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  },
  {
    name:"Kakuna",
    imgSrc:"./Images/pkm/014.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  },
  {
    name:"Beedrill",
    imgSrc:"./Images/pkm/015.png",
    type1:"./Images/type/bug.gif",
    type2:"./Images/type/poison.gif",
    isCaught:false,
  }


]

 const poklist = document.querySelector(".pok");
for(let i=0;i < pokemons.length;i++)
{
  // The list items are contained in this div (pokDiv)
  const pokDiv = document.createElement("div");

  const pokItemImg = document.createElement("img");
  const pokItemtype1 = document.createElement("img");
  const pokItemtype2 = document.createElement("img");
  pokItemImg.setAttribute('alt','Picture of pokemon');
  pokItemtype1.setAttribute('alt','Primary type');
  
  pokItemtype2.setAttribute('alt','Secondary type');
  pokItemImg.setAttribute('src',pokemons[i].imgSrc);
  pokItemtype1.setAttribute('src',pokemons[i].type1);
  pokItemtype2.setAttribute('src',pokemons[i].type2);
  
  //Giving title + images classes
  poklist.classList.add("pkTitle");
  pokItemImg.classList.add("pImg");
  pokItemtype1.classList.add("ty1");
  pokItemtype2.classList.add("ty1");
  pokDiv.classList.add("pSec");
  
  const pokListName = document.createElement("li");


  
  pokListName.textContent = pokemons[i]["name"];

  
  poklist.appendChild(pokDiv);
  pokDiv.appendChild(pokListName);
  pokDiv.appendChild(pokItemImg);
  pokDiv.appendChild(pokItemtype1);
  pokDiv.appendChild(pokItemtype2); 
}




form.addEventListener('submit', (e) => {
 
  const task = input.value;
   e.preventDefault();
  if(!task)
  {
    alert("Please fill out the box");
    return;
  }
  window.localStorage  
  
  const taskMsg = document.createElement("div");
  taskMsg.classList.add("task");

  const message = document.createElement("div");
  message.classList.add("content");
  

  taskMsg.appendChild(message);
  
  const msgInput = document.createElement("input");
  msgInput.classList.add("text");
  msgInput.type = "text";
  msgInput.value = task;
  

  msgInput.setAttribute("readonly","readonly");
  
  message.appendChild(msgInput);

  const options = document.createElement("div");
  options.classList.add("actions");

  const deleteTask = document.createElement("button");
  deleteTask.classList.add("delete");
  deleteTask.innerHTML = "Delete";

  options.appendChild(deleteTask);

  taskMsg.appendChild(options);

   tskList.appendChild(taskMsg);
   tskList.classList.add("boxbox");
   input.value = "";
  localStorage.setItem("input",JSON.stringify(input));
  deleteTask.addEventListener('click',()=>{
    tskList.removeChild(taskMsg);
    
  });

});
