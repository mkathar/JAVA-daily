const basanDOM= document.querySelector('#btn')
const buttonDOM= document.querySelector('button')
const bodyDOM = document.querySelector('body')
const color = ['purple','green','blue','red','pink','white']
bodyDOM.style.backgroundColor='#6665ee'
buttonDOM.addEventListener('click',changeColor)


function changeColor(){
const colorIndex= parseInt(Math.random()*color.length)
bodyDOM.style.backgroundColor= color[colorIndex]

basanDOM.style.backgroundColor=color[colorIndex+1 ]

}