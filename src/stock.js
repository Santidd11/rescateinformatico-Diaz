const stock = [
    {
        "id":0,
        "name":"Teclado",
        "img":"https://m.media-amazon.com/images/I/71yGtauB-AL._AC_SY450_.jpg",
        "price": "$20.000",
        "category": "perifericos"
    },
    {
        "id":1,
        "name":"Mouse",
        "img":"https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187",
        "price": "$9.000",
        "category": "perifericos"
    },
    {
        "id":2,
        "name":"Monitor",
        "img":"https://www.lg.com/es/images/monitores/MD06025876/gallery/medium03.jpg",
        "price": "$104.000",
        "category": "perifericos"
    },
    {
        "id":3,
        "name":"Motherboard",
        "img":"https://m.media-amazon.com/images/I/51OVWRFJxsL._AC_SY580_.jpg",
        "price": "$75.000",
        "category": "componentes"
    },
    {
        "id":4,
        "name":"Procesador",
        "img":"http://www.karlosperu.com/wp-content/uploads/2017/06/Intel-procesador.jpg",
        "price": "$63.000",
        "category": "componentes"
    },
    {
        "id":5,
        "name":"Placa de video",
        "img":"https://images.fravega.com/f500/02392f4a30189dbbebfd0d9cf5b8de3a.jpg",
        "price": "$335.499",
        "category": "componentes"
    }
]

export const getFetch = new Promise((respond, rejected) =>{

    let url = 'www.mystock.com.ar'

    if (url === 'www.mystock.com.ar') {
        setTimeout(() => {
            respond(stock);
        }, 2000);
    } else {
        rejected('404 not found')
    }
})