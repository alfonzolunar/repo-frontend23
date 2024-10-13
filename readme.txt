Descripción del Funcionamiento de la Aplicación Web
La aplicación web está diseñada para registrar usuarios y sus mascotas, programar citas médicas para las mascotas, y consultar tanto los usuarios registrados como las citas agendadas. El sistema está desarrollado utilizando HTML5, CSS, y JavaScript, y aprovecha el almacenamiento local del navegador (localStorage) para guardar y consultar la información, lo que permite que funcione sin necesidad de una base de datos externa. A continuación, se describe el funcionamiento de cada página:

1. Página de Inicio (inicio.html)
Esta es la primera página que el usuario ve al acceder a la aplicación. Muestra un menú de navegación con enlaces a las distintas funcionalidades de la app:

Registrar Usuario: Permite agregar un nuevo usuario (persona) junto con su mascota.
Registrar Cita Médica: Permite agendar una cita médica para una mascota ya registrada.
Ver Usuarios: Muestra una lista de todos los usuarios y sus respectivas mascotas registradas.
Ver Citas Médicas: Muestra una lista de todas las citas médicas programadas para las mascotas.

2. Registrar Usuario (registrarUsuario.html)
En esta página, el usuario puede registrar los datos de una persona junto con los de su mascota. El formulario incluye los siguientes campos:

Nombre del Dueño: El nombre de la persona.
Nombre de la Mascota: El nombre de la mascota.
Tipo de Mascota: Especifica el tipo de animal (por ejemplo, perro, gato, etc.).
Edad de la Mascota: Indica la edad de la mascota.
Al hacer clic en el botón de "Registrar", la información ingresada se guarda en localStorage. El sistema verifica que todos los campos estén completos antes de permitir el registro.

3. Registrar Cita Médica (registrarCita.html)
Esta página permite registrar una cita médica para una mascota. Los campos del formulario son:

Nombre del Dueño: El nombre del dueño de la mascota.
Nombre de la Mascota: El nombre de la mascota para la cual se está programando la cita.
Fecha de la Cita: La fecha en la que se realizará la cita.
Hora de la Cita: La hora de la cita médica.
Una vez ingresados los datos, el sistema guarda la cita en localStorage y confirma el registro.

4. Ver Usuarios Registrados (verUsuarios.html)
Esta página carga dinámicamente una lista de todos los usuarios y mascotas registrados en el sistema. Utiliza la función mostrarUsuarios() para extraer los datos del almacenamiento local y mostrar la información en formato de tarjeta. Por cada usuario registrado, se muestra lo siguiente:

Nombre del dueño.
Nombre de la mascota.
Tipo de mascota.
Edad de la mascota.
Si no hay usuarios registrados, se muestra un mensaje indicándolo.

5. Ver Citas Médicas Programadas (verCitas.html)
Similar a la página de usuarios, esta página carga todas las citas médicas guardadas en localStorage utilizando la función mostrarCitas(). Por cada cita médica, se muestra:

Nombre del dueño de la mascota.
Nombre de la mascota.
Fecha de la cita.
Hora de la cita.
Si no hay citas programadas, el sistema lo indicará con un mensaje.

Tecnología Utilizada
La aplicación está construida utilizando las siguientes tecnologías:

HTML5: Define la estructura de las páginas web.
CSS: Estiliza las diferentes vistas para que sean visualmente atractivas.
JavaScript: Se utiliza para la lógica de la aplicación, incluyendo el registro de datos y la interacción con localStorage, permitiendo que los datos persistan entre sesiones del navegador.
Almacenamiento de Datos
La aplicación utiliza localStorage, una funcionalidad del navegador que permite almacenar pares de clave-valor en el lado del cliente. Esto permite que los datos (usuarios, mascotas, citas) se guarden de manera persistente, incluso si el usuario recarga la página o cierra el navegador. Aunque localStorage es limitado y no es adecuado para grandes volúmenes de datos, es perfecto para esta aplicación sencilla que no requiere un servidor de backend.