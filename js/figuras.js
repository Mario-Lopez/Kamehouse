var carro = {
    Color : "Rojo",
    Marca : "Nissan",
    Llantas : 4,
    Dueno : "Susana"
}


var Figuras = [
    {
        Title: "Uzumaki Naruto - Naruto Shippuden",
        Img: "../img/fig-naruto.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Son Goku - Dragon Ball",
        Img: "../img/fig-goku.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Deku - Boku no Hero",
        Img: "../img/fig-deku.png",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Monkey D.Luffy - One Piece",
        Img: "../img/fig-luffy.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Uzumaki Naruto - Naruto Shippuden",
        Img: "../img/fig-naruto.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Rem - Re Zero",
        Img: "../img/fig-rem2.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Nakano Yotsuba - The Quintessential Quintuplets",
        Img: "../img/fig-yotsuba.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
    {
        Title: "Saber Alter - Fate Stay Night",
        Img: "../img/fig-saberAlter.jpg",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque porro commodi explicabo ipsam non? Sapiente fuga soluta error explicabo.",
        Price: "MXN $750",
        Date: "April 17, 2020"
    },
]
var contentFiguras = $("#figuras");
contentFiguras.empty();

for (let i = 0; i < Figuras.length; i++) {
    var html1 = '<section class="wow figura">';
    html1 += '  <header class="figura-header">';
    html1 += '      <img src="'+ Figuras[i].Img +'" alt="">';
    html1 += '      <div class="figura-hover"><a href="figura.html?idfigura='+i+'">Ver</a></div>';
    html1 += '  </header>';
    html1 += '  <main class="figura-main">';
    html1 += '      <span>"'+ Figuras[i].Title +'"</span>';
    html1 += '      <span><b>"'+ Figuras[i].Price +'"</b></span>';
    html1 += '  </main>';
    html1 += '</section>';

    contentFiguras.append(html1);
}