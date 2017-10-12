const renderToString = require('preact-render-to-string');
const layout = html => `<!DOCTYPE html><html><head></head><body>${html}<script src="/main.js"></script></body></html>`;

module.exports = () => {
  return async (ctx, next) => {
    ctx.render = (template, data) => {
      template = require(`../views/${template}.jsx`)

      return layout(renderToString(template(data)))
    }
    
    await next()
  }
}
