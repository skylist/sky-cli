module.exports = {
  name: 'generate molecule',
  alias: ['g:molecule'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const className = parameters.first.replace(/[a-zA-Z]/, (v)=>v.toUpperCase())
    const name = parameters.first

    await generate({
      template: 'atom.js.ejs',
      target: `src/molecules/${className}/index.js`,
      props: { name, className }
    })
    
    await generate({
      template: 'style.css.ejs',
      target: `src/molecules/${className}/style.css`,
    })

    info(`Generated file at src/molecules/${className}/index.js`)
  }
}
