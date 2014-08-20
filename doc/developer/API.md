## This

### load order

- this.logger

- this.config, this.storage

- this.newFiles, this.changedFiles, this.unchangedFiles, this.removedFiles

### this.logger

```
this.logger.trace('Entering cheese testing');
this.logger.debug('Got cheese.');
this.logger.info('Cheese is Gouda.');
this.logger.warn('Cheese is quite smelly.');
this.logger.error('Cheese is too ripe!');
this.logger.fatal('Cheese was breeding ground for listeria.');
```

see also: https://github.com/nomiddlename/log4js-node

### this.storage

```javascript
var str = this.storage.getItem('key');
this.storage.setItem('key2', 'STRING');
```

### this.cache

```javascript
var str = this.cache.getItem('key');
this.cache.setItem('key2', 'STRING');
```


### this.newFiles

```javascript
[
    {
        path: 'path of file A',
        modificationTime: 'YYYY-MM-DD H:mm:ss Z',
        creationTime: 'YYYY-MM-DD H:mm:ss Z'
    },
    {}
]
```

### this.changedFiles

```javascript
[
    {
        path: 'path of file A',
        modificationTime: 'YYYY-MM-DD H:mm:ss Z',
        creationTime: 'YYYY-MM-DD H:mm:ss Z'
    },
    {}
]
```

### this.unchangedFiles

```javascript
[
    {
        path: 'path of file A',
        modificationTime: 'YYYY-MM-DD H:mm:ss Z',
        creationTime: 'YYYY-MM-DD H:mm:ss Z',
        content: "html", // by kizz-markdown
        title: "title", // by kizz-markdown
        tags: ["tag1", "tag2"] // front yaml or kizz-guess-tags
    },
    {}
]
```

### this.removedFiles

```javascript
[
    {
        path: 'path of file A',
        modificationTime: 'YYYY-MM-DD H:mm:ss Z',
        creationTime: 'YYYY-MM-DD H:mm:ss Z',
        content: "html", // by kizz-markdown
        title: "title", // by kizz-markdown
        tags: ["tag1", "tag2"] // front yaml or kizz-guess-tags
    },
    {}
]
```
