const componentes = [
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

    let url = 'www.mycomponents.com.ar'

    if (url === 'www.mycomponents.com.ar') {
        setTimeout(() => {
            respond(componentes);
        }, 2000);
    } else {
        rejected('404 not found')
    }
})