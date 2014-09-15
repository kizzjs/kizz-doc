# Kizz Config Example

## comments

### config/disqus.html

```html
 <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        var disqus_shortname = 'kizzjs'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
```

```javascript
var path = require('path'),
    fs = require('co-fs');

module.exports = function(app) {
    app.use(function *(next) {

        var ctx = this;

        this.config = {
            site: {
                name: "Kizz Documentation",
                description: "The official documentation for Kizz.",
                url: "http://kizz.zenozeng.com/"
            },
            // global tags
            tags: [
                "Kizz",
                "API",
                "generator",
                "develop",
                "design",
                "theme"
            ],
            source: "doc", // defaults to source/
            target: path.join(ctx.cwd, "public"), // target dir
            comments: yield fs.readFile(path.join(__dirname, 'disqus.html'), {encoding: 'UTF-8'})
        };

        yield next;
    });
};
```


