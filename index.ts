import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

const systemName: string = "Android";
const version: number = 10.0;
const userName: string = "Junior";

const mensaje: string = systemName + "  v" + version + "¡Bienvenido, " + userName + "!";
console.log(mensaje);


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();