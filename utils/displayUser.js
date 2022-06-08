import getElement from './getElement'
import removeActive from './removeActive'
const img = getElement('.user-img')
const btn = getElement('.btn')
const title = getElement('.user-title')
const value = getElement('.user-value')
const btns = [...document.querySelectorAll('.icon')]

const displayUser = (person) => {
    img.src = person.image
    value.textContent = person.name
    title.textContent = `My name is`;
   
    removeActive(btns)
    
    btns.forEach((btn)=> {
        const label = btn.dataset.label;
        btn.addEventListener('click', ()=> {
            title.textContent = `My ${label} is`
            value.textContent = person[label]
            btns.forEach((btn)=> btn.classList.remove('active'))
            removeActive(btns)
            btn.classList.add('active')
        })
    })
}


export default displayUser;