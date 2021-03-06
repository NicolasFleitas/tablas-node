//const multiplicar = require('./multiplicar/multiplicar');
// si importamos asi tendriamos que utilizar las funciones de esta manera
// multiplicar.crearArchivo
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido'.red);
}

//console.log(argv);
// console.log('Limite ', argv.limite);
// let parametro = argv[2]
// let base = parametro.split('=')[1]