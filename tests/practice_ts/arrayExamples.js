var arrayExamples = /** @class */ (function () {
    function arrayExamples() {
        this.names = ["sss", "KKKK", "wywtsg", "mdjadjaj"];
    }
    arrayExamples.prototype.arraydemo = function () {
        this.names.push("KKKK");
        this.names.pop();
        return this.names;
    };
    return arrayExamples;
}());
var arrdemo = new arrayExamples();
arrdemo.arraydemo().forEach(function (name) {
    console.log(name);
});
