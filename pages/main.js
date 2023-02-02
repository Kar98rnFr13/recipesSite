const navBtn = document.querySelector('.btn-nav')
const containerNav = document.querySelector('.container-nav')
const nav = document.querySelector('.nav')
const header = document.querySelector('header')
console.log(header)
const date = document.getElementById('date')


let currentDate = new Date().getFullYear()
date.textContent = currentDate


navBtn.addEventListener('click', function(){
    let height =parseInt( nav.getBoundingClientRect().height)
    let headerHeight = parseInt( nav.getBoundingClientRect().height)
    let heightResult = height + headerHeight
 if(containerNav.style.height === '40px'){
  containerNav.style.height = `${heightResult}px`
  containerNav.classList.add('show')
 }
 else{
  containerNav.style.height = '40px'
 }
    
})

window.addEventListener('scroll', fixedNav)
function fixedNav(){
    let headerH = header.getBoundingClientRect().height
     if(window.pageYOffset > 1){

      header.classList.add('fixed')
      }
      else{
       header.classList.remove('fixed')
      }
     console.log(window.pageYOffset)
}



