import arrowUvas from '../assets/img/home/arrow-uvas.png'
import arrowHuarango from '../assets/img/home/arrow-huarangos.png'
import arrowFamilias from '../assets/img/home/arrow-familias.png'
import arrowPisco from '../assets/img/home/arrow-pisco.png'
import arrowVinos from '../assets/img/home/arrow-vinos.png'
import arrowAdrenalina from '../assets/img/home/arrow-adrenalina.png'

const HomeData = [
    {
        to: "uvas",
        color: '#a188b3',
        arrow: arrowUvas,
        txt: ["UVAS DE ICA,", "TESORO PATRIMONIAL"],
        clase:'p-uvas'

    },
    {
        to: "huarangos",
        color: '#a8c9d5',
        arrow: arrowHuarango,
        txt: ["HUARANGO,", "TESTIGO Y GUARDIÁN"],
        clase:'p-huarangos'
    },
    {
        to: "familia",
        color: '#a45844',
        arrow: arrowFamilias,
        txt: ["FAMILIAS", "Y LEGADO"],
        clase:'p-familias'
    },
    {
        to: "piscos",
        color: '#8d745c',
        arrow: arrowPisco,
        txt: ["PISCO", "TRADICIÓN IQUEÑA"],
        clase:'p-pisco'
    },
    {
        to: "vinos",
        color: '#808060',
        arrow: arrowVinos,
        txt: ["VINOS:", "AQUÍ LA FIESTA SE BEBE"],
        clase:'p-vinos'
    },
    {
        to: "turismo",
        color: '#e27423',
        arrow: arrowAdrenalina,
        txt: ["ADRENALINA", "Y SABOR"],
        clase:'p-adrenalina'
    }
]

export default HomeData;