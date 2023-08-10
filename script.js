
const navbar = document.getElementById('navbar');

const logo = document.getElementById('logo');

const paras = document.getElementsByClassName("para");

const searchBar = document.getElementById("search-bar");

const dapp = document.getElementById("dapp");

window.addEventListener("scroll",function(){
    
    console.log(navbar.classList);

    if(window.scrollY >70){
        logo.classList.add("logoblack");
        navbar.classList.add("scroll");

        this.setTimeout(function(){
            navbar.style.transform = 'translateY(-100%)';
        },1000)

        for(let i=0;i<paras.length;i++){
            paras[i].classList.add("colorPara");
        }

        searchBar.classList.remove("search-bar");
        searchBar.classList.add("search-bar-black");

        dapp.classList.add("dappBlack")
        dapp.classList.remove("dapp");
        
    }   
    else{
        navbar.classList.remove("slideOutUp")
        logo.classList.remove("logoblack");
        navbar.classList.remove("scroll");

        for(let i=0;i<paras.length;i++){
            paras[i].classList.remove("colorPara");
        }

        searchBar.classList.add("search-bar");
        searchBar.classList.remove("search-bar-black");

        dapp.classList.remove("dappBlack")
        dapp.classList.add("dapp");

    }

});