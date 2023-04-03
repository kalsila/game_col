// selecting dom element
const squares = document.querySelectorAll('.square');
const answerDisplay = document.querySelector(".correct");
const colourDisplay = document.querySelector("h1");
const button = document.querySelector("button");
const header = document.querySelector('.header')
let colour =[]
let getColor;
let buttonGenerate = document.getElementById('generate')
const body = document.getElementById('body')
GenerateRandomcolour();
assign_colours();
checkcolour();
buttonGenerate.addEventListener('click', () =>{
    GenerateRandomcolour()
    assign_colours()
}) 
function GenerateRandomcolour() {
    for(let i = 0; i<squares.length; i++){
        colour.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(
                Math.random() *255
            )},${Math.floor(Math.random()* 255)})`

        ); 
         
    }
    console.log(colour);
    recupererUneCouleur()
    //GenerateRandomPickedcolour()
};

function assign_colours() {
    
    colour.forEach((colour,index) =>{
        console.log(squares[index].style);
        squares[index].style.background = colour;
        //squares[index].setAttribute('data-colour ,colour')
    });
}

function recupererUneCouleur(){
    let colorIdx = Math.floor(Math.random() * colour.length)
    console.log(colorIdx);
    getColor = colour[colorIdx]
    console.log('color',getColor);

}
function GenerateRandomPickedcolour() {
    const randomcolour =  [Math.floor(Math.random()* colour.length)];
    colourDisplay.textContent = randomcolour;
    console.log(randomcolour);
    return randomcolour;
}
function checkcolour(){
    console.log(typeof(squares) );
    squares.forEach(square =>{
        square.addEventListener('click', e =>{
            let coorectColor = getColor.split(',').join(', ')
            if(e.target.style.background === coorectColor) {
                console.log('yes');
                answerDisplay.textContent = "correct";
                header.style.background = coorectColor
                squares.forEach((i) => {
                    return i.style.background = coorectColor
                })
            }else{
                console.log('NOOOOo');
                answerDisplay.textContent = "wrong";
                square.style.background = '#ffff'

                //e.target.classlist.add("fade");

            }

        });

    });
}

// let pickedcolour = GetRandomPickedcolour();
// function reset() {
//     colour =[];
//     GetRandomPickedcolour();
//     squares.forEach((square) => square.classlist.remove("fade"));
//     assign_colours();
//     checkcolour();
//     pickedcolour = GetRandomPickedcolour();
// }

//button.addEventListener("click",reset);
