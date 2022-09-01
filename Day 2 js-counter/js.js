const counter= document.querySelector('#counter')
const decrease= document.querySelector('#decrease')
const reset= document.querySelector('#reset')
const increase= document.querySelector('#increase')
var count=0;

increase.addEventListener('click',()=>{
    count=count+1;
     degis();
});
decrease.addEventListener('click',()=>{
    count= count-1;
     
     degis();
});
reset.addEventListener('click',()=>{
    count= 0;
     
     degis();
});
function degis(){
    counter.textContent=count;
}