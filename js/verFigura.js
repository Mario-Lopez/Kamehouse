
function verFigura(){
    var urlpagina = window.location.href;
    var sPaginaURL = window.location.search.substring(1);
    // console.log(sPaginaURL)
    // var sUrlDecode = atob(sPaginaURL); //Si marca error, significa que mandó parametros no encriptador, comentar la línea
    var Figura = sPaginaURL.split('=');
    // console.log(sURLVariables);
    // console.log(sURLVariables[1]);
    // console.log(Figuras);
    var contentFigura = $("#contentFigura");;
    contentFigura.empty();
    
    var categorias = Figuras[Figura[1]].Categories.split(',');

    var html1 = '<div class="content-vh60">';
    html1 +=        '<div class="content-padding">';
    html1 +=            '<header class="header-categories">';
    html1 +=            '';for(let i = 0; i < categorias.length; i++) {
    html1 +=                    '<span>'+ categorias[i] +' </span>';
                            } +'';
    html1 +=            '</header>';
    html1 +=            '<section class="div-detail-figura">';
    html1 +=                '<div class="detail-figura-img">';
    html1 +=                    '<img src="'+ Figuras[Figura[1]].Img +'" alt="">';
    html1 +=                '</div>';
    html1 +=                '<div class="detail-figura-info">';
    html1 +=                    '<header><h1>'+ Figuras[Figura[1]].Title +'</h1></header>';
    html1 +=                    '<main>';
    html1 +=                        '<div class="info-item"><li>Marca: </li><li>'+ Figuras[Figura[1]].Marca +'</li></div>';
    html1 +=                        '<div class="info-item"><li>Marca: </li><li>'+ Figuras[Figura[1]].Marca +'</li></div>';
    html1 +=                        '<p>'+ Figuras[Figura[1]].Description +'</p>';
    html1 +=                    '</main>';
    html1 +=                    '<h5 class="price-item">'+ Figuras[Figura[1]].Price +'</h5>';
    html1 +=                    '<footer>';
    html1 +=                        '<Button class="btnComprar">Comprar ahora</Button>';
    html1 +=                        '<Button class="btnCarrito">Quiero apartarlo</Button>';
    html1 +=                    '</footer>';
    html1 +=                    '<div class="div-anuncio-1item anuncios">';
    html1 +=                        '<img src="./img/anuncioCompra.png">';
    html1 +=                    '</div>';
    html1 +=                    '<div class="share-figura">';
    html1 +=                        '<span>¡Comparte!</span>';
    html1 +=                        '<div>';
    html1 +=                            '<a href="'+urlpagina+'" target="_blank"><i class="bx bxl-facebook"></i></a>';
    html1 +=                            '<a href="'+urlpagina+'" target="_blank"><i class="bx bxl-whatsapp"></i></a>';
    html1 +=                        '</div>';
    html1 +=                    '</div>';
    html1 +=                '</div>';
    html1 +=            '</section>';
    html1 +=        '</div>';
    html1 += '  </div>';

    contentFigura.append(html1);
}