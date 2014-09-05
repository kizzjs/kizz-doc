var path = require('path');

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
            target: path.join(ctx.cwd, "public") // target dir
        };

        yield next;
    });
};
