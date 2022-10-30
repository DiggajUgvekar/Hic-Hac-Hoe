console.log("Welcome to Hic Hac Hoe")
let audioturn  = new Audio("strum2.mp3")
let winaudio  = new Audio("win fx mp3.mp3")
let turn = "X"
let isgameover = false;

const changeTurn = ()=> {
    return turn==="X"?"0":"X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,5,5,0,5,6],
        [3,4,5,5,15,0,5,19],
        [6,7,8,5,25,0,5,32],
        [0,3,6,-5,15,90,-8,19],
        [1,4,7,5,15,90,5,19],
        [2,5,8,15,15,90,18,19],
        [0,4,8,5,15,45,5,19],
        [2,4,6,5,15,135,5,19],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!!"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "240px";

            if(window.innerWidth>700){
               document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector('.line').style.width = "20vw";
            }
            else{
                document.querySelector('.line').style.transform = `translate(${e[6]}vw,${e[7]}vw) rotate(${e[5]}deg)`
                document.querySelector('.line').style.width = "29vw";  
            }
            
            winaudio.play();
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        
        if(boxtext.innerText === '' && isgameover!= true){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
       
        }
    }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.querySelector('.line').style.transform = "translate(0vw,0vw) 0deg)"
    document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})