import { getTransport } from './configTransport'
import * as path from 'path'
import * as fs from 'fs'

export type TEMPLATES =  'contact'
export type BUILDTEMPLATE = {template: string}
/**
 * Parsea los template en html previamente configurados para para su correspondiente funcionalidad
 * @param templateName Nombre del template existente en la carpeta de html
 * @param data JSON con los datos a remplazar en el template los keys deben coincidir en el template, ejemplo para remplazar {full_name: Jose Manuel Acevedo} en el template debe estar $full_name$ donde se quiere insertar el nombre
 * @returns Template correctamente formateado
 */
export const buildTemplate = (templateName:TEMPLATES, data:any): BUILDTEMPLATE =>{
  let template = fs.readFileSync(path.resolve(`./pages/api/controllers/html/${templateName}.html`)).toString()
  Object.keys(data).forEach((key) => {
    template = template.replace(
      `$${key}$`,
      data[key]
    )
  })
  return {template};
}
/**
 * Envía un mail a los destinos correspondientes
 * @param to Emails destino del correo
 * @param subject Subject del correo
 * @param buildedTemplate Template del correo que devuelve la función buildTemplate()
 */
export const sendMailer = async (to: string[], subject:string, buildedTemplate:BUILDTEMPLATE) => {
    var message = {
    from: '"Definition" <admin@rload.es>',
    bcc: to,
    subject,
    html: buildedTemplate.template
  }

  getTransport().sendMail(message, (err: any) => {
    if (err) {
      console.log(err)
      return { status: 500, err: err.message };
    } else {
      return { status: 200 };
    }
  })
}


