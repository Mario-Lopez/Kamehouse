var Figuras = [
    {
        Title: "Uzumaki Naruto - Naruto Shippuden",
        Img: "./imgFiguras/figNaruto.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Son Goku - Dragon Ball",
        Img: "./imgFiguras/figGoku2.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Deku - Boku no Hero",
        Img: "./imgFiguras/figDeku2.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Monkey D.Luffy - One Piece",
        Img: "./imgFiguras/figLuffy.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Satoru Gojo - Jujutsu Kaisen",
        Img: "./imgFiguras/figGoyoNen.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Rem - Re Zero",
        Img: "./imgFiguras/figRem.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Re zero, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Nakano Yotsuba - The Quintessential Quintuplets",
        Img: "./imgFiguras/figYotsuba.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Saber Alter - Fate Stay Night",
        Img: "./imgFiguras/figSaberAlter.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Natsu Dragneel - Fairy Tail",
        Img: "./imgFiguras/figNatsu.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Naruto, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Toga - Boku no hero",
        Img: "./imgFiguras/figToga.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Boku no hero, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Todoroki Shoto - Boku no hero",
        Img: "./imgFiguras/figShoto.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Boku no hero, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Jotaro - JoJo's Bizarre Adventure Parte III",
        Img: "./imgFiguras/figJotaro.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Boku no hero, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Erza Scarlet - Fairy Tail",
        Img: "./imgFiguras/figScarlet.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Fairy Tail, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Hatsune Miku - Vocaloid",
        Img: "./imgFiguras/figMiku.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Vocaloid, PVC",
        Date: "April 17, 2020"
    },
    {
        Title: "Yor Forger - Spy x Family",
        Img: "./imgFiguras/figYor.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Marca: "Bandai",
        Categories: "Anime, Spy x Family, PVC",
        Date: "April 17, 2020"
    }
]
var contentFiguras = $("#figuras");
contentFiguras.empty();

var paginaActual = filename();
var cantFiguras = 10;

if(paginaActual == 'figuras.html'){
    cantFiguras = Figuras.length;
}
for (let i = 0; i < cantFiguras; i++) {
    var html1 = '<section class="wow figura">';
    html1 += '  <header class="figura-header">';
    html1 += '      <img src="'+ Figuras[i].Img +'" alt="">';
    html1 += '      <div class="figura-hover"><a href="figura.html?idfigura='+i+'">Ver</a></div>';
    html1 += '  </header>';
    html1 += '  <main class="figura-main">';
    html1 += '      <span class="price"><b>'+ Figuras[i].Price +'</b></span>';
    html1 += '      <span>'+ Figuras[i].Title +'</span>';
    html1 += '  </main>';
    // html1 += '  <footer class="figura-footer">';
    // html1 += '      <button>Comprar</button>';
    // html1 += '  </footer>';
    html1 += '</section>';

    contentFiguras.append(html1);
}

function filename(){
    var rutaAbsoluta = self.location.href;   
    var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}