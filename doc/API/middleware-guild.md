# Kizz Middleware Guide

## create plugin

```bash
mkdir kizz-helloworld
cd kizz-helloworld
```

### create package.json

```bash
npm init
```

### create index.js

```bash
gedit index.js
```

```javascript
module.exports = function(app) {
    app.when(function *() {
        return true;
    }).use(function *(next) {
        console.log("Hello World");
        yield next;
    });
}
```

### npm link

```bash
cd myblog
mkdir -p node_modules # create node_modules if not exists
sudo npm link ~/code/kizz-helloworld/
```

### update config

```
plugins:
    - kizz-helloworld
```

