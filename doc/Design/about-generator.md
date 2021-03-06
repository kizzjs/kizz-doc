# 关于 Generator

Async, Promise, Generator 是 Javascript 三种语法。

虽然 generator 现在刚刚开始发展，但是我还是更加看好它，因为它很自然。

当然还是有 Async Functions 就是啦。
不过离 ES7 还远着呢，而且似乎社区现在也没有大量这方面的支持，
所以在很长的一段时间内 kizz 都会使用 generator。

Kizz 不介意破坏性改变，只要真的能够有所提升。

## 跳出流程控制

一个函数控制整个流程。
关于这个，当然用传统的方式也是可以做到的。
不过我是觉得看上去没有用 Generator 要来得自然就是了。

### callback version

```javascript
app.use(context, next) {
    // do sth
    var afterNext = function() {
        // do sth later
    }
    next(context, afterNext);
}
```

### promise versioin

```javascript
app.use(context, next) {
    // do sth
    // next take context & generate a new promise
    next(context).then(function() {
        // do sth later
    });
}
```

## 异步到同步的转变

`co` 这个库简化了异步的书写、提供了真正能用的 try catch 支持。

脱离了大量的 callback，代码就变得直白了起来。
（关于 Error Handle，NodeJS也提供了这个：http://nodejs.org/api/domain.html）


官方的例子：

```javascript
var co = require('co');
var thunkify = require('thunkify');
var request = require('request');
var get = thunkify(request.get);

co(function *(){
  var a = yield get('http://google.com');
  var b = yield get('http://yahoo.com');
  var c = yield get('http://cloudup.com');
  console.log(a[0].statusCode);
  console.log(b[0].statusCode);
  console.log(c[0].statusCode);
})()

co(function *(){
  var a = get('http://google.com');
  var b = get('http://yahoo.com');
  var c = get('http://cloudup.com');
  var res = yield [a, b, c];
  console.log(res);
})()

// Error handling

co(function *(){
  try {
    var res = yield get('http://badhost.invalid');
    console.log(res);
  } catch(e) {
    console.log(e.code) // ENOTFOUND
 }
})()
```
