const header = document.querySelector('.header');
const headerDiv = document.querySelector('.header-div');
const link = document.querySelectorAll('.link');

window.onscroll = function(){
     let top = window.scrollY;
     console.log(top);
     if(top>=100){
       header.classList.add('active');
       headerDiv.style.color='black';
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
}