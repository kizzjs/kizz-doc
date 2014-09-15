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
