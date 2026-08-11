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


// Comentario: cuando ejecuto ts-node index.ts para verificar si mi codigo funciona, me sale error, creo que el error es en la compatibilidad de la versión de TypeScript y Node


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();