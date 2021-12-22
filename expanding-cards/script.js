const panels = document.querySelectorAll('.panel')
panels.forEach(panel => panel.addEventListener('click', changeClass));

function changeClass() {
    if(this.classList.contains('active')){
        return false
    }
    removeActivePanelClass();
    this.classList.add('active');
}

function removeActivePanelClass() {
    document.querySelector('.panel.active').classList.remove('active');
}