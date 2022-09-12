const stock = [
    {
        id:"0",
        name:"Teclado",
        img:"https://m.media-amazon.com/images/I/71yGtauB-AL._AC_SY450_.jpg",
        price: 20000,
        stock: 20,
        category: "perifericos",
        description: "eclado de 89 teclas diseño de 89 teclas, ahorra espacio con la premisa de preservar las teclas numericas de uso comun. perfecto para la oficina y los juegos. presione fn retroceso para encender el bloq num. la luz del teclado numerico esta encendida y es funcional." 
    },
    {
        id:"1",
        name:"Mouse",
        img:"https://mexx-img-2019.s3.amazonaws.com/mouse-logitech-gamer-rgb-lila_38560_5.jpeg?v187",
        price: 9000,
        stock: 15,
        category: "perifericos",
        description: "Botones primarios con resistencia de hasta 50 millones de clicks y agarres de goma son sólo algunos de los detalles pensados para brindar la mejor experiencia."
    },
    {
        id:"2",
        name:"Monitor",
        img:"https://www.lg.com/es/images/monitores/MD06025876/gallery/medium03.jpg",
        price: 104000,
        stock: 9,
        category: "perifericos",
        description: "LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfrutá de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor."
    },
    {
        id:"3",
        name:"Motherboard",
        img:"https://m.media-amazon.com/images/I/51OVWRFJxsL._AC_SY580_.jpg",
        price: 75000,
        stock: 8,
        category: "componentes",
        description: "La ROG Strix B660-A Gaming WiFi D4 cuenta con un diseño de alimentación de primera y un sistema de refrigeración optimizado para aprovechar al máximo la 12.ª Gen. de procesadores Intel Core. PCIe 5.0, Wi-Fi 6 y las tres ranuras M.2 PCIe 4.0 aseguran transferencias de alta velocidad en cualquier situación y los controles inteligentes exclusivos de ASUS te ayudan a optimizar la configuración de tu PC. Por último, las innovaciones DIY simplifican notablemente el proceso de montaje del PC."
    },
    {
        id:"4",
        name:"Procesador",
        img:"http://www.karlosperu.com/wp-content/uploads/2017/06/Intel-procesador.jpg",
        price: 63000,
        stock: 4,
        category: "componentes",
        description: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos."
    },
    {
        id:"5",
        name:"Placa de video",
        img:"https://images.fravega.com/f500/02392f4a30189dbbebfd0d9cf5b8de3a.jpg",
        price: 335499,
        stock: 3,
        category: "componentes",
        description: "Diseñada en base a dos décadas de tarjetas gráficas premiadas, ha llegado el momento de evolucionar más allá en el Gaming."
    }
]

export const getStock = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}

export const getStockByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock.filter(item => item.category === categoryId))
        }, 2000)
    })
}

export const getStockById = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock.find(item => item.id === itemId))
        }, 2000)
    })
}