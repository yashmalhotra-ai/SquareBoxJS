let redbox=document.getElementById('red');
let yellowbox=document.getElementById('yellow');
let greenbox=document.getElementById('Green');

let squares=document.querySelectorAll(".colorSquare");
const Timesclicked={'red':0,'yellow':0,'green':0}
squares.forEach(square=>
{
    square.onclick=()=> 
    {
        Timesclicked[square.value]+=1;
        square.innerText=Timesclicked[square.value];
    }
    square.innerText=Timesclicked[square.value];
    
});

let CleargameBtn=document.getElementById("Cleargame");
function ClearScore(){
    Timesclicked.red=0;
    Timesclicked.yellow=0;
    Timesclicked.green=0;
    squares.forEach(square=>{
        square.innerText=0;
    })
}

CleargameBtn.onclick=()=>ClearScore();