
function verFigura(){
    http://127.0.0.1:5500/figura.html?idfigura=1
    var sPaginaURL = window.location.search.substring(1);
    // console.log(sPaginaURL)
    // var sUrlDecode = atob(sPaginaURL); //Si marca error, significa que mandó parametros no encriptador, comentar la línea
    var sURLVariables = sPaginaURL.split('=');
    // console.log(sURLVariables);
    // console.log(sURLVariables[1]);
    // console.log(Figuras);
    var contentFigura = $("#contentFigura");;
    contentFigura.empty();
    
    var html1 = '<header><h5>'+ Figuras[sURLVariables[1]].Title +'</h5></header>';
    html1 += '  <img src="'+ Figuras[sURLVariables[1]].Img +'" alt="">';

    contentFigura.append(html1);
}