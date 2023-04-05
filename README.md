## Project Name

#### Definitio

Website coporativo para Definitio creado con **Next.js, Typescript y Sass.** 
Las animaciones se han manejado con la librería **Gsap**
Los formulario utlizan** Formik y Yup** para validación
Las traducciones se han implementado a través de** React-intl**
Los sliders de la aplicación utilizan **Swipper**

## Project Status
El proyecto está **completamente maquetado** y revisado siguiendo las recomendaciones de mobile-first .
**Sí tiene integrado react-tl **para la futura integración de tradiucciones.
**No incluye la operatividad del formulario **pero sí tiene integrado Formik para facilitar esta tarea.


## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Dev Server:

`npm run dev`  

To Visit App:

`localhost:3000/`  

## Estructura principal del proyecto

#### /assets

Almacena los recursos del proyecto incluye los siguientes directorios:
- img/
- fonts/
- styles/

A su vez en la carpeta** styles/** se incluyen los **archivos scss** para el desarrollo del proyecto.

#### /components

Incluye los componentes de ámbito global de nuestra aplicación que puedan ser llamados desde cualquier otro componente principal

#### /hooks

Incluye tanto los hooks de operatividad como los hooks para aquellas animaciones que se utilizan en varios componentes

#### /lang

**Incluye los archivos en formato json para las traducciones, cada idioma debe ir en un json separado (es.json, en.json).** Cualquier texto de la aplicación suceptible de ser traducido debe ser incluido en su respectivo json de idioma para posteriormente poder ser llamado desde el componente.

#### /pages

Componentes de enrutado de nuestra aplicación

#### /ui

Layout de los componentes de enrutado

## Estructura principal de un componente

Debido a la complejidad de las animaciones y a la estructura de los bloques gráficos , estos se han maquetado siguiendo esta estructura:
**
/componentPageFolder
------/subcomponentSectionFolder
----------/subcomponentGraphicFolder**


##### Ejemplo de componente

Home (page)
------Hero (section)
----------HeroAnim (graphics)

Cada componente incluye su archivo index de exportación y sus estilos respectivos

## NEXT js Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.