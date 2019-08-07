module.exports = {
  name: 'generate atom',
  alias: ['g:atom'],
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
      target: `src/atoms/${className}/index.js`,
      props: { name, className }
    })
    
    await generate({
      template: 'style.css.ejs',
      target: `src/atoms/${className}/style.css`,
    })

    info(`Generated file at src/atoms/${className}/index.js`)
  }
}
