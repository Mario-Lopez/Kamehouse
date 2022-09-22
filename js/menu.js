window.addEventListener('scroll',function()
{
    let banner = this.document.getElementById('banner-bottom');
    let menu = this.document.getElementById("menu");
    let posicionobj1 = banner.getBoundingClientRect().top;
    // console.log(posicionobj1);

    let inicio = window.innerHeight/2;

    if(posicionobj1 < inicio){
        menu.style.background="#000";
        menu.style.height="80px";
    }
    else{
        //menu.style.background='#fff';
        menu.style.background='linear-gradient(to top, #ff000000, #08000054)';
        menu.style.height="120px";
    }
})

function abrirMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="visible";
    menuMovil.style.width="100%";
    menuMovil.style.opacity="1";
}
function cerrarMenu(){
    var contentmenuMovil = document.getElementById("contentmenuMovil");
    var menuMovil = document.getElementById("menuMovil");
    contentmenuMovil.style.visibility="hidden";
    menuMovil.style.width="0%";
    menuMovil.style.opacity="0";
}