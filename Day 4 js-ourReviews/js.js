var users=
[ 
    {
    id:1,
    userName: 'Muhammed Mustafa KATAR',
    job:'Avcı',
    img:'https://avatars.githubusercontent.com/u/109306011?v=4',
    exp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum sequi debitis odio quas, veniam quam(KATHAR) illo voluptates consectetur, aliquid placeat? Tempore repellendus natus repudiandae animi asperiores quae inventore, sint dolorum voluptate unde aliquid placeat impedit nemo. Molestiae sed vero sunt maxime in quaerat iure incidunt, porro itaque autem inventore?',
    }
  
,
    {
    id:3,
    userName: ' Ömer Demirkol',
    job:'Oduncu',
    img:
    'https://img1.ak.crunchyroll.com/i/spire1/6d71d2a39d04c6488dfae2746ec57b3b1628793016_large.jpg',
    exp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum sequi debitis odio quas, veniam quam(HEGOSDER) illo voluptates consectetur, aliquid placeat? Tempore repellendus natus repudiandae animi asperiores quae inventore, sint dolorum voluptate unde aliquid placeat impedit nemo. Molestiae sed vero sunt maxime in quaerat iure incidunt, porro itaque autem inventore?',
    }
,
    {
    id:2,
    userName: ' Mustafa ATAR',
    job:'Yapı Ustası',
    img:
    'https://i.pinimg.com/originals/18/44/1c/18441cb5a98f7eb452b054aee1286447.jpg',
    exp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum sequi debitis odio quas, veniam quam (aTarBeY68)illo voluptates consectetur, aliquid placeat? Tempore repellendus natus repudiandae animi asperiores quae inventore, sint dolorum voluptate unde aliquid placeat impedit nemo. Molestiae sed vero sunt maxime in quaerat iure incidunt, porro itaque autem inventore?',
    }
]


var container= document.querySelector('.container')
var box=document.createElement('div');
box.classList.add('box')
container.appendChild(box);

var img= document.createElement('img')
img.classList.add('img')
box.appendChild(img)

var uName=document.createElement('h1')
box.appendChild(uName)

var job=document.createElement('h2')
box.appendChild(job)

var exp=document.createElement('p')
box.appendChild(exp)

var idY=document.createElement('Button')
idY.id='idY'
idY.innerHTML='Soldaki Kullanıcı'
box.appendChild(idY)

var idA=document.createElement('Button')
idA.id='idA'
idA.innerHTML='Sağdakı Kullanıcı'
box.appendChild(idA)

var id=0;
xyz();
function sıfırla()
{   
    if(id==users.length)
    {
        id=0;
    }
    else if(id == 0)
    {
        id=users.length;
    }
}

idA.addEventListener('click',()=>{
    id++;
    console.log(id)
    sıfırla()
    xyz();
})

idY.addEventListener('click',()=>{
    sıfırla()
    id--;
    console.log(id)
    xyz();
})
function xyz()
{
    img.src=users[id].img
    uName.textContent=users[id].userName
    job.textContent=users[id].job
    exp.textContent = users[id].exp
}