var contentHeader = $("#contentHeader");
contentHeader.empty();

var html1 = '<header class="content-menu-movil" id="contentmenuMovil" onclick="cerrarMenu()">';
html1 += '      <div class="menu-movil" id="menuMovil">';
html1 += '          <div class="menu-movil-logo">';
html1 += '              <img src="./img/logo.png">';
html1 += '          </div>';
html1 += '          <nav class="menu-movil-items">';
html1 += '              <a href="./index.html" class="menu-movil-item">Inicio</a>';
html1 += '              <a href="./figuras.html" class="menu-movil-item">Figuras</a>';
html1 += '          </nav>';
html1 += '      </div>';
html1 += '</header>';


html1 += '<header class="content-menu" id="menu">';
html1 += '       <div class="menu-logo">';
html1 += '           <a href="./"><img src="./img/logo.png"></a>';
html1 += '       </div>';
html1 += '       <nav class="menu-nav">';
html1 += '           <a href="./index.html" class="menu-nav-item">Inicio</a>';
html1 += '           <a href="./figuras.html" class="menu-nav-item">Figuras</a>';
html1 += '           <a href="./about.html" class="menu-nav-item">Sobre Kamehouse</a>';
html1 += '           <a href="#divReseñas" class="menu-nav-item">Reseñas</a>';
html1 += '       </nav>';
html1 += '       <div class="menu-actions">';
html1 += '           <a href=""><i class="bx bx-search-alt-2"></i></a>';
html1 += '           <a href=""><i class="bx bx-cart"></i></a>';
html1 += '           <a href=""><i class="bx bx-heart"></i></a>';
html1 += '       </div>';
html1 += '       <button class="menu-nav-item-movil" onclick="abrirMenu()"><i class="bx bx-menu"></i></button>';
html1 += '   </header>';
// html1 += '   <div class="div-mensaje">';
// html1 += '      <span>¡ENVÍOS GRATIS A TODA LA COMARCA LAGUNERA EN TODOS LOS PEDIDOS!</span>';
// html1 += '   </div>';





contentHeader.append(html1);

// window.addEventListener('scroll',function()
// {
//     let banner = this.document.getElementById('banner-bottom');
//     let menu = this.document.getElementById("menu");
//     // let posicionobj1 = banner.getBoundingClientRect().top;
//     // console.log(posicionobj1);

//     if(posicionobj1 < 150){
//         menu.style.background="#000";
//         menu.style.height="80px";
//     }
//     else{
//         //menu.style.background='#fff';
//         // menu.style.background='linear-gradient(to top, #ff000000, #08000054)';
//         // menu.style.background="#00000085";
//         menu.style.background="#000";
//         menu.style.height="80px";
//     }
// })

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