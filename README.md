# react-contador-descansos
Este es un proyecto totalmente desde cero sin seguir ningún tipo de tutorial para aplicar conocimiento y resolver una necesidad propia

# Proyecto Contador con Descansos

## Descripción

Este proyecto consiste en crear una aplicación web con React que permita al usuario configurar un temporizador con descansos periódicos.  

El objetivo es ayudar al usuario a mejorar su concentración y productividad durante sus sesiones de estudio o trabajo, utilizando una metodología que combina periodos de enfoque con descansos cortos.

## Funcionalidades

* **Configuración del temporizador:**
    -  Input para definir el tiempo de trabajo (en minutos).
    -  Input para definir el tiempo de descanso (en minutos).
    -  Input para definir la frecuencia de los descansos (en minutos).

* **Temporizador:**
    -  Mostrar el tiempo restante (en minutos y segundos).
    -  Botones para iniciar, pausar y reiniciar el temporizador.

* **Estados:**
    -  "Trabajando": el temporizador está contando hacia atrás el tiempo de trabajo.
    -  "Descansando": el temporizador está contando hacia atrás el tiempo de descanso.

* **Notificaciones:**
    -  Mostrar una notificación visual o sonora cuando llegue el momento de descansar.

* **Funcionalidades adicionales (opcional):**
    -  Guardar diferentes configuraciones de tiempo.
    -  Permitir al usuario personalizar el aspecto de la interfaz.
    -  Añadir diferentes tipos de notificaciones (sonidos, ventanas emergentes).

## Tecnologías

* React
* JavaScript
* HTML
* CSS

## Conceptos a tener en cuenta

* **Componentes:**  Definir componentes para la configuración del temporizador, el temporizador en sí y las notificaciones.
* **Estado:**  Utilizar el Hook `useState` para almacenar el tiempo de trabajo, el tiempo de descanso, la frecuencia de los descansos, el tiempo restante y el estado actual (trabajando o descansando).
* **Eventos:**  Manejar eventos de clic en los botones y eventos del temporizador.
* **Temporizadores:**  Usar `setInterval` o `setTimeout` para controlar el temporizador.
* **JSX:**  Escribir la interfaz de usuario con JSX.
* **Estilos:**  Aplicar estilos CSS para personalizar la apariencia de la aplicación.

##  Pasos a seguir

1.  Crear un nuevo proyecto de React con Create React App.
2.  Definir la estructura del componente principal.
3.  Implementar la lógica para la configuración del temporizador.
4.  Crear el temporizador y manejar los eventos.
5.  Implementar la lógica para cambiar entre los estados de trabajo y descanso.
6.  Añadir las notificaciones.
7.  Implementar las funcionalidades adicionales (opcional).
8.  Probar y depurar la aplicación.

## Recursos

* Documentación de React: [enlace a la documentación de React]
* Tutoriales de React: [enlaces a tutoriales relevantes]
* Ejemplos de proyectos similares: [enlaces a proyectos de código abierto]