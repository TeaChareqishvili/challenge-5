// first section//

const header = document.querySelector('.header');
const headerDiv = document.querySelector('.header-div');
const link = document.querySelectorAll('.link');
const aboutOneder = document.querySelector('.about-oneder');
const title = document.querySelector('.title');
const flex = document.querySelector('.flex');


window.onscroll = function(){
     let top = window.scrollY;
      console.log(top);
     if(top>=100){
       header.classList.add('active');
       headerDiv.style.color='darkcyan';
      link.forEach((e)=>{
        e.classList.add('active-link');
      })
     }else if (top==0){
        header.classList.remove('active');
        headerDiv.style.color=null;
        link.forEach((e)=>{
            e.classList.remove('active-link');
          })
         
     }
      if(top>=0){
        opacity();
      }
     if(top>=250){
      aboutOneder.classList.add('oneder-active');
     }
    
     if(top>=450){
        flex.classList.add('flex-active');
       
     }
   
  setInterval(opacity(), 2000)


}

 function opacity(){
    title.classList.add('title-active');
 }
// const title = document.querySelector('.title');
//  setInterval(opacity(), 1000)

// function opacity(){
//     title.classList.add('title-active');
// }
  

// setTimer(opacity(), 1000);

