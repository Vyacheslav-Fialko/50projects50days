const panels = document.querySelectorAll('.panel')
panels.forEach(panel => panel.addEventListener('click', changeClass));

function changeClass() {
    if(this.classList.contains('active')){
        return false
    }
    document.querySelector('.panel.active').classList.remove('active')
    this.classList.add('active');
}