const scrollToTop=document.getElementById('scrollToTop')

scrollToTop.addEventListener("click", ()=>{
  window.scrollTo({top:0,behavior:"smooth"})
})

window.addEventListener("scroll", ()=>{
  if(window.scrollY>200){
    scrollToTop.style.display="block"
    }
  else{ 
    scrollToTop.style.display="none"
}
})


const menuBar=document.getElementById('menuBar')
const menuList=document.getElementById('nav-links');

menuBar.addEventListener("click", ()=>{
  menuList.classList.toggle('active')
})