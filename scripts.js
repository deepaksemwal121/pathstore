var toggleBtn = document.querySelector('.toggleBtn');
var toggleBtnActive = document.querySelector('.toggleBtn-active');

function toggler(){
    toggleBtnActive.classList.remove('toggleBtn-active');
    toggleBtn.classList.add('toggleBtn-active');
    toggleBtn.classList.remove('toggleBtn')
    toggleBtnActive.classList.add('toggleBtn');
};
  


