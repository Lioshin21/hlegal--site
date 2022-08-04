const arrayOfSkills = document.getElementsByClassName('skills__link');
const arrayOfDescription = document.getElementsByClassName('skills-description__item');
const linkActiveClass = 'link-active';
const itemEnableClass = 'item-enable';

const addClass = (el, className) => {
  el.classList.contains(className) ? el : el.classList.add(className)
};

const removeClass = (el, className) => {
  el.classList.contains(className) ? el.classList.remove(className) : el
};

for (let i = 0; i < arrayOfSkills.length; i++) {
  arrayOfSkills[i].addEventListener('click', (e) => {
    e.preventDefault()
    for (let j = 0; i < arrayOfSkills.length; j++) {
      if (arrayOfSkills[j].classList.contains(linkActiveClass) || arrayOfDescription[j].classList.contains(itemEnableClass)) {
        removeClass(arrayOfSkills[j], linkActiveClass)
        removeClass(arrayOfDescription[j], itemEnableClass)
        break
      }
    }
    addClass(arrayOfSkills[i], linkActiveClass)
    addClass(arrayOfDescription[i], itemEnableClass)
  })
}