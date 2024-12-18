
// function statement
//function changeText() {
    //document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed"
 // }

 //let changeText = function() {
  //  document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed"
 //}

 // arrow function
let changeText = () => {
    document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed"    
}


  //onclick in js

 // document.querySelector('#changeBtn').onclick = function(){
// changeText() 
// }


let changeBtn = document.querySelector('#changeBtn')

// using event listner
document.querySelector('changeBtn').addEventListener('click',() =>{
changeText()
})


document.querySelector('changeBtn').addEventListener('click',function(){
    console.logo("mouse hovered")
})