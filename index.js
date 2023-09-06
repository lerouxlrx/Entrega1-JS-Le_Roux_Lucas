
alert ('¡Bienvenido a Tu Gestión! Registra tus actividades, anota tus tareas, programa tus recordatorios y conocé en detalle Tu Gestión');

const nombre = prompt ('Ingresa tu nombre para avanzar: ');

const imprimirLog = (dato) => console.log(dato);

imprimirLog ('Nombre: '+nombre);

const participar = prompt ('Gracias '+nombre+'. Contesta unas preguntas y gana beneficios Responde SI, si queres participar: ');

if (participar.toLowerCase() == 'si') {
    alert ('Responde del 1 al 5 siendo 1 Nada Importante y 5 Muy Importante. Empecemos!');
    imprimirLog ('Participa: '+participar);

    let pregImportancia;
    do {
        pregImportancia = prompt ('Para vos, que tan importante es registrar toda Tu Gestión? Recorda responder del 1 al 5.');
    } while (!(pregImportancia >=1 && pregImportancia <=5))
    let pregOrden;
    do {
        pregOrden = prompt ('Para los registros de Tu Gestión, que tan importante consideras el orden? Recorda responder del 1 al 5.');
    } while (!(pregOrden >=1 && pregOrden <=5))
    let pregNotificaciones;
    do {
        pregNotificaciones = prompt ('Que tan importante es tener notificaciones para que no se pase nada de Tu Gestión? Recorda responder del 1 al 5.');
    } while (!(pregImportancia >=1 && pregNotificaciones <=5))
    let pregReporte;
    do {
        pregReporte = prompt ('Consideras importante tener reportería que te describa en detalle Tu Gestión? Recorda responder del 1 al 5.');
    } while (!(pregReporte >=1 && pregReporte <=5))
    imprimirLog ('Importancia: '+pregImportancia);
    imprimirLog ('Orden: '+pregOrden);
    imprimirLog ('Notificaciones: '+pregNotificaciones);
    imprimirLog ('Reporteria: '+pregReporte);
} else {
    imprimirLog ('Participa: No')
}


