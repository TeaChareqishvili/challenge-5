// portfolio section //

const all = document.getElementById('all');
const web = document.getElementById('web');
const design = document.getElementById('design');
const brand = document.getElementById('brand');

const imageWeb = document.querySelectorAll('.web');
const imageDesign = document.querySelectorAll('.design');
const imageBrand = document.querySelectorAll('.brand');



web.addEventListener('click', ()=>{
  imageWeb.forEach((element)=>{
    element.classList.remove('none');
    element.classList.add('block');
  })
  imageDesign.forEach((e)=>{
    e.classList.remove('block');
    e.classList.add('none');
  })
    
  imageBrand.forEach((elem)=>{
    elem.classList.remove('block');
    elem.classList.add('none');
  })

})

design.addEventListener('click',()=>{
  imageWeb.forEach((element)=>{
    element.classList.remove('block');
    element.classList.add('none');
  })
  imageDesign.forEach((e)=>{
    e.classList.remove('none');
    e.classList.add('block');
  })
    
  imageBrand.forEach((elem)=>{
    elem.classList.remove('block');
    elem.classList.add('none');
  })
})

brand.addEventListener('click',()=>{
  imageBrand.forEach((elem)=>{
    elem.classList.remove('none');
    elem.classList.add('block');
  })
  imageDesign.forEach((e)=>{
    e.classList.remove('block');
    e.classList.add('none');
  })
  imageWeb.forEach((element)=>{
    element.classList.remove('block');
    element.classList.add('none');
  })
})

all.addEventListener('click',()=>{
  imageWeb.forEach((element)=>{
    element.classList.add('block');
    
  })
  imageDesign.forEach((e)=>{
   
    e.classList.add('block');
  })
    
  imageBrand.forEach((elem)=>{
  
    elem.classList.add('block');
  })
})


// first section//

const header = document.querySelector('.header');
const headerDiv = document.querySelector('.header-div');
const link = document.querySelectorAll('.link');
const aboutOneder = document.querySelector('.about-oneder');
const title = document.querySelector('.title');
const flex = document.querySelector('.flex');
const aboutTeam = document.querySelector('.about-team');
const teamParagraph = document.querySelector('.about-team-p');
const teamDiv = document.querySelector('.team-div')



window.onscroll = function(){
     let top = window.scrollY;
      // console.log(top);
     if(top>=100){
       header.classList.add('active');
       headerDiv.style.color='rgb(58, 93, 159)';
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
   
     if(top>=850){
      aboutTeam.classList.add('about-team-active');
       teamParagraph.classList.add('about-team-p-active');
     }

     if(top>=1600){
      teamDiv.classList.remove('whole-team');
    teamDiv.classList.add('more-opacity');
     }
     else if(top<=1500){
      teamDiv.classList.remove('more-opacity');
      teamDiv.classList.add('whole-team');
     }

   
   setInterval(opacity(), 2000)


}

  function opacity(){
     title.classList.add('title-active');
  }



 // testimonial section 

 const testimonialButton = document.querySelectorAll('.test-btn');
 const contentBlock = document.querySelectorAll('.content-block');

 let activeIndex=0;

function atctiveButtons(){
 
  testimonialButton.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
     activeIndex=index;
     changeSlide();
    })
   
  })
}
 
 
 function changeSlide(){
  contentBlock.forEach((active,index)=>{
    if(activeIndex===index){
      active.classList.add('slider');
    } else{
      active.classList.remove('slider');
    }
  })
 }

 atctiveButtons();