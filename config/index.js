module.exports = function(app) {
    app.use(function *(next) {

        var ctx = this;

        this.config = {
            site: {
                name: "Site Name Here",
                url: "http://example.com"
            },
            // global tags
            tags: [
                "kizz",
                "api",
                "generator"
            ],
            source: "doc/", // defaults to source/
            target: ctx.cwd + "/public/" // target dir
        };

        yield next;
    });
};
