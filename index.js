const nav = document.getElementById('nave');
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 100){
                nav.classList.add('navBlack');
            }else{
                nav.classList.remove('navBlack');
            }
        });

       const control = document.querySelectorAll('.control');
       let currentItem = 0;
       const itens = document.get