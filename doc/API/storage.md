# Storage and Cache

Kizz uses [VersionStorage](https://github.com/zenozeng/version-storage) for Storage and Cache.

Storage are saved in `./.kizz/storage/` and Cache are saved in `./.kizz/cache/`.
Storage and Cache have same API, but Cache will be cleared when `kizz rebuild`.

## Usage

### Storage

```javascript
var upgrade = function(storage) {
    var oldVersion = storage.version;
    if(oldVersion < 1) {
        // Version 1 is the first version of the database.
        storage.setItem('hello', '[1, 2, 3]');
    }
    if(oldVersion < 2) {
        // Version 2 changes the data structure of `hello`
        var hello = storage.getItem('hello');
        // do some remaping
        storage.setItem('hello', newhello);
    }
    if(oldVersion < 3) {
        // Version 3 changes the name of `hello`
        var hello = storage.getItem('hello');
        storage.removeItem('hello');
        storage.setItem('world', hello);
    }
    storage.setVersion(3);
};

var storage = new this.Storage('YOUR_UNIQUE_ID/DB_NAME', upgrade);
var sth = storage.getItem('sth');
storage.setItem('sth', 'STRING');
storage.removeItem('sth');
```

### Cache

**Note: Cache will be cleared when `kizz rebuild`.**

```javascript
var cache = new this.Cache('YOUR_UNIQUE_ID/DB_NAME', upgrade);
var sth = cache.getItem('sth');
cache.setItem('sth', 'STRING');
cache.removeItem('sth');
```
