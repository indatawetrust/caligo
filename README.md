# caligo

#### install
```
npm i caligo pm2 -g
```

#### usage

##### package.json
```js
{
  "version": "0.0.1",
  "dependencies": {
    "koa": "^2.3.0",
    "babel-core": "^6.25.0",
    "babel-plugin-add-module-exports": "^0.1.2",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.7.4",
    "babel-polyfill": "^6.1.4",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-es2015-node5": "^1.2.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-3": "^6.5.0",
    "debug": "2.2.0",
    "jsx-to-string": "^1.1.0",
    "preact": "^8.1.0",
    "preact-render-to-string": "^3.6.3",
    "preact-server-renderer": "^0.2.0",
    "babel-plugin-transform-react-jsx": "^6.24.1"
  }
}
```

##### app.js
```jsx
const Koa = require('koa');
const app = new Koa();

import { h } from 'preact';
import render from 'preact-render-to-string';

let div = <div style="background-color:#9d8;padding:10px">
  hello world
</div>;

app.use(ctx => {
  ctx.body = render(div);
});

app.listen(4040);
```

##### and run
```
caligo app.js
```

or

```
pm2 start caligo -- app.js --watch
```
