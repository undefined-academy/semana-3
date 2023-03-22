const navButton= document.querySelector('.nav-button')
const navItems = document.querySelector('.nav-links')

navButton.addEventListener('click', ()=>{navItems.classList.toggle('show')})


const animatedElement = document.querySelector('.section-title');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('typewriter-effect')
      observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('typewriter-effect')
    }
  })
})

observer.observe(animatedElement)

window.addEventListener('unload', () => {
  observer.disconnect()
})