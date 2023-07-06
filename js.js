const box= document.querySelector('.box')
const botao= document.querySelector('.botao')
const animacao= function(){
    box.style.background='red'
    creatdiv();
}
const body= document.querySelector('body')
const creatdiv= function(){
  var div= document.createElement('div')
  div.setAttribute("class","divnova")
  div.textContent="criei essa div"
  document.body.appendChild(div)
  var divnova= document.querySelector('.divnova')
divnova.style.width="200px";
divnova.style.height="200px";
divnova.style.background="blue";
divnova.style.fontSize="40px"
divnova.style.color="white";
}

botao.addEventListener("click",animacao,)
body.style.background="cyan"
var lastIndex = 0
var images = document.querySelectorAll('.container img')

images.forEach((item,index)=>{
  document.querySelectorAll('.bullet-single')[index].addEventListener("click",()=>{
    let lastimage= document.querySelectorAll('.container img')[lastIndex];
    let actualimage= document.querySelectorAll('.container img')[index];
     
    document.querySelectorAll('.bullet-single')[lastIndex]
                    .classList.remove('active-bullet');
                    
                    ;
                    document.querySelectorAll('.bullet-single')[index]
                    .classList.add('active-bullet');
    lastIndex = index
    lastimage.style.opacity = 0;
    actualimage.style.opacity = 1;
  })
})
const request = new XMLHttpRequest();
request.open('GET','https://dummyjson.com/products/1',true)
request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        let data= JSON.parse(this.response);
        console.log(data)
    }
    else{
        console.error();
    }
}