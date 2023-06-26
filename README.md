
## Project Definitio
Website created with **Next.js, Typescript and SASS.**
## Libraries and resources of the project
### UI
**Gsap** for animations

**Swipper** for sliders
### Logic
**Formik** for form implementation

**Yup** for form implementation

**React-intl** for translations

**Axios** for https requets

## Project Status
The project is **prototyped** and reviewed following the mobile-first recommendations.
## Installation and Setup Instructions
Clone down this repository. 
You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Dev Server:

`npm run dev`

To Visit App:

`localhost:3000/`

## Main folders structure of the project

#### /assets
It includes the project’s resource storage and the following directories:

`img/`

`fonts/`

`styles/`

#### /components
It includes the globally scoped components of our application.
#### /hooks
It includes the project’s hooks.
#### /lang
**Include the files in JSON format for translations, each language must be included in a separate JSON file (es.json, en.json).** Any translatable text in the application (except for the text of the cookies that is included in the component itself), should be added to its respective language JSON file to be called from the component.
#### /pages
Routing components of our application.
#### /ui
UI layout of the page components.
## Main structure of a component
Due to the complexity of the animations and the completely unique structure of the graphic and text blocks, they have been prototyped following this structure to facilitate future editing:

-/PageFolder (parent component)

---/SectionFolder (private component)

-----/SectionAnimationFolder (private component)

#### Example of components

Home (page)

------HomeHero (section)

----------HeroAnim (graphics animation)

Each component includes its export index file and its respective styles.
The **main component**  only renders the components for each content section.
The **section component** includes the **animated graphics component and the texts** for that section. The texts of the section are animated from this component.
The **graphics component** solely renders the layout of the images and their animations.

## Contact Form integration
In the pages/api folder, the development of the controllers and services necessary for email sending is located. Here, the default values should be modified to the client’s specific values, including their SMTP configuration and the email or group of emails required.

In the contactForm component, the integration with the aforementioned service is found. It utilizes the sendForm function where the data collected from the form is passed as parameters.

## Cookies
For the configuration of cookies, it is necessary to include them in the file `/constants/cookies_item.ts`. They are categorized, and the cookie name along with a brief description of its purpose will be added. For example:

`social: {
  item:“FACEBOOK”, description: “Facebook cookie”
}`

Any text that needs to be modified or any content block that the client wants to omit should be managed directly from the component’s code.
## Partners block
The project includes a “partners” component, which is currently commented out. It can be displayed on any page and logos can be added through the configuration JSON located in...
 `/data/partners.json`