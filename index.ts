import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

//const systemName: string = "Android";
//const version: number = 10.0;
//const userName: string = "Junior";cls


//const mensaje: string = systemName + "  v" + version + "¡Bienvenido, " + userName + "!";
//console.log(mensaje);

// Comentario: cuando ejecuto ts-node index.ts para verificar si mi codigo funciona, me sale error, creo que el error es en la compatibilidad de la versión de TypeScript y Node


//const answer = await rl.question("¿Cuál es tu nombre? ");
//console.log(`Hola, ${answer}!`);


let tareas: Task[] = [];
let opcion = "";


while (opcion !== "4") {

    console.log("1 Agregar tarea");
    console.log("2 Eliminar ultima tarea");
    console.log("3 Lista de tareas");
    console.log("4 Salir");

    opcion = await rl.question("Ingrese una opción ");

    switch (opcion) {

        case "1":
            const tarea = await rl.question("Ingresa una tarea: ");
            tareas.push(tarea);
            console.log("Tarea agregada");
            break;

        case "2":
            const eliminada = tareas.pop();
            console.log("Tarea " + eliminada + " eliminada");
            break;

        case "3":
            for (let index = 0; index < tareas.length; index++) {
                console.log(tareas[index]);
            }
            break;

        case "4":
            console.log("Saliendo");
            break;
    }
}


interface Task {
    id: number;
    title: string;
    completed: boolean;
}

let contador = 1;


const addTask = (title: string) => {
    tareas.push({
        id: contador,
        title: title,
        completed: false
    });

    contador++;
};

const listTasks = () => {
    for (let index = 0; index < tareas.length; index++) {

        const estado = tareas[index].completed
            ? "completed"
            : "pending";

        console.log(tareas[index].id + tareas[index].title + estado);
    }
};

const removeTask = () => {
    const eliminada = tareas.pop();

    if (eliminada) {
        console.log("Tarea " + eliminada.title + " eliminada");
    } else {
        console.log("No hay tareas");
    }
};



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();