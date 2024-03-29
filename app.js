// console.log(module);
// console.log('--------');
// console.log(process);
// console.log('--------');
// console.log(process.argv);

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// tambien se podria hacer 
// const multiplicar = require('./multiplicar/multiplicar')
// y despues 
// multiplicar.crearArchivo

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]