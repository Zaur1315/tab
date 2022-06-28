const tabs = document.getElementById('tabs'),
      contens = document.querySelectorAll('.content'),
      flex = document.getElementById('flex'),
      secondCont = document.querySelectorAll('.cont'),
      changeClass = el =>{
        for(let i = 0; i< tabs.children.length; i++){
            tabs.children[i].classList.remove('active');
        }
        el.classList.add('active');
      };
const changeFlex = el =>{
    for(let i = 0; i < flex.children.length;i++){
      flex.children[i].classList.remove('active');
    }
    el.classList.add('active');
};
flex.addEventListener('click', e=>{
    const memory = e.target.dataset.bt;
    changeFlex(e.target);
    for(let i= 0; i<secondCont.length;i++){
        secondCont[i].classList.remove('active');
        if(secondCont[i].dataset.cont ===memory) {
            secondCont[i].classList.add('active');
        }
    }
});
tabs.addEventListener('click', e=>{
    let currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < contens.length; i++){
        contens[i].classList.remove('active');
        if(contens[i].dataset.content ===currTab) {
            contens[i].classList.add('active');
        }
    }
});



