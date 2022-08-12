// Creation of a button using js
const cont = document.getElementById("grid-container");

const butt = document.createElement('div');
butt.classList.add('btn1');
document.body.insertBefore(butt,cont);

const btn = document.createElement('button');
btn.textContent = 'PLAY';
butt.appendChild(btn);



// Create a grid

function makeGrid(rows,cols) {
    cont.style.setProperty('--grid-rows',rows);
    cont.style.setProperty('--grid-cols',cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        //cell.innerText = (i + 1);
        cont.appendChild(cell).className = "grid-item";
    };

};
makeGrid(16,16);
const gclass = document.querySelectorAll(".grid-item");

// Adding a mouseenter and mouseleave function to implement a hover effect on the grids
const grid = document.querySelectorAll(".grid-item");
grid.forEach((grid) => {
    grid.addEventListener('mouseenter', function() {
        grid.style.backgroundColor = 'black'; // set color as black
        //let randomColor ='#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0'); // generate a random color
        //grid.style.backgroundColor = randomColor; //get the random color
    });
});

 grid.forEach((grid) => {
    grid.addEventListener('mouseleave', function () {
        var opacity = grid.style.opacity; //declare a variable for the opacity style
        grid.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.2; // increase the opacity by 0.1 after every pass      
         //grid.style.backgroundColor = "white"; // declare the backgroundColor as white
    });
 });  

// Creating an click event when button is clicked

const button = document.querySelector("button");
button.addEventListener('click', function (){
var x =  prompt("Enter the number of squares, ");
if (x > 100) {
    x = 100;
};

  
// Function to remove the grid
function removeGrid() {
       /* gclass.forEach((gclass) => {
            gclass.parentNode.removeChild(gclass);
                }) */
       document 
           .querySelectorAll(".grid-item")
           .forEach((item) => item.parentNode.removeChild(item));
 }
 //Function to recreate grid as per user specifications

 
    function reload() {
        removeGrid();
        makeGrid(x,x);
    }
    //removeGrid();
    //makeGrid(x,x); 
    reload();

});





    
    
    
    



