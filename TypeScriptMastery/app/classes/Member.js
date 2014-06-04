var app;
(function (app) {
    (function (models) {
        var Member = (function () {
            function Member(name) {
                this.name = name;
            }
            return Member;
        })();
        models.Member = Member;
    })(app.models || (app.models = {}));
    var models = app.models;
})(app || (app = {}));
//# sourceMappingURL=Member.js.map
