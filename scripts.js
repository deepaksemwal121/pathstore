var toggleBtn = document.querySelector('.toggleBtn');
var toggleBtnActive = document.querySelector('.toggleBtn-active');
var container1 = document.querySelector('.container-1');
var container2 = document.querySelector('.container-2');
var container3 = document.querySelector('.container-3');
var container4 =  document.querySelector('.container-4');
var toggler = document.querySelector('.toggleContainer');



    function toggler2(){
        toggleBtnActive.classList.remove('toggleBtn-active');
        toggleBtn.classList.add('toggleBtn-active');
        toggleBtnActive.classList.add('toggleBtn');
        container1.classList.add('d-none');
        container2.classList.remove('d-none');


    };
    function toggler1(){
        toggleBtnActive.classList.add('toggleBtn-active');
        toggleBtn.classList.remove('toggleBtn-active');
        toggleBtn.classList.add('toggleBtn');
        container1.classList.remove('d-none');
        container2.classList.add('d-none');
    };

    function redirect(){
    container3.classList.remove('d-none');
    container1.classList.add('d-none');
    container2.classList.add('d-none');
    toggler.classList.add('d-none');

    };
  
    function redirect1(){
        container3.classList.add('d-none');
        container4.classList.remove('d-none');
        container2.classList.add('d-none');
        container1.classList.add('d-none')
        toggler.classList.add('d-none');
    
        };

