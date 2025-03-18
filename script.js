let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");

//function to play -- // >.playerX >.playerY
let playerX = true;
let playerO = false;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//disabling the boxes -------------------------------------------------------------------------------------
const disabled = () =>{
    boxes.forEach(box => {
        box.style.backgroundColor = '#e0e1dd';
        box.style.filter ="blur(0.8px)"
        box.disabled = true;
    });
}
//enable the boxes ----------------------------------------------------------------------------------------
const enabled =() =>{
    boxes.forEach(box => {
        box.disabled = false;
        box.style.filter ="none"
        box.style.backgroundColor = 'white';
    })
}

//function check winners ----------------------------------------------------------------------------------
function checkWinner(){
    for(pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1==box2 && box2==box3){
                alert(`Congratulations!, Winner is ${box1}. \nPlay Again!`);
                disabled();
            }
        }
        
    }
   
}

/*// boxes.forEach(
    //     (box) => {
        //         box.addEventListener("click", ()=>{console.log('clcked')
        //             box.innerText = 'Abcd';
        //         });
        //     });*/

//function to play the game  --------------------------------------------------------------------------
for(let i = 0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{
        console.log("Button is clicked!");
            if(playerX){
                boxes[i].textContent = 'X';
                boxes[i].style.color = '#3c096c';
                playerX = false;
                playerO = true;
            }else{
                boxes[i].textContent = 'O';
                boxes[i].style.color = '#132a13';  
                playerX = true;
                playerO = false;
            }
            // boxes[i].style.color='#14453d';
            boxes[i].disabled= true;
            boxes[i].style.backgroundColor="#ffef9f";
            //check that the winner ?
            checkWinner();
                
     });
};
           
//function for the reset button ----------------------------------------------------------------------
const makeEmpty = () => {
    playerX = true;
    playerO = false;

    enabled();

    for(let i= 0 ;i<boxes.length;i++){
     boxes[i].innerText = '';
    }
    // boxes.forEach(element => element.innerText = '');
}
resetButton.addEventListener("click",makeEmpty);
resetButton.addEventListener("click",makeEmpty);
        
        
        
        
        
