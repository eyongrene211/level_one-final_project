const menu =document.getElementById('menu')
const navMenu= document.getElementById('navMenu')
const closed= document.getElementById('close')

menu.addEventListener('click',()=>{
    console.log('I am being clicked!')
    navMenu.classList.add('active')
    console.log(' navMenu active')
     navMenu.classList.remove("translate-x-full");
  navMenu.classList.add("translate-x-0");
    
})

closed.addEventListener('click',()=>{
    console.log('I am been clicked')
    navMenu.classList.remove('active')
    console.log('navMenu closed')
  

   setTimeout(() => {
    navMenu.classList.add("hidden");
  }, 300);
})