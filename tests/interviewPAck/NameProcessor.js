"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameProcessor = void 0;
var NameProcessor = /** @class */ (function () {
    function NameProcessor() {
    }
    NameProcessor.prototype.returnNames = function () {
        var names = ['#Ram', '$Sitha', '#Lakshman', '$Urmila', '#Hanuman', '#Bharath'];
        // Array to store names starting with '$'
        var dollarNames = [];
        // Check each name in the array
        for (var i = 0; i < names.length; i++) {
            // Check if the name starts with '$'
            if (names[i].startsWith('$')) {
                dollarNames.push(names[i]);
            }
        }
        console.log(dollarNames);
        return dollarNames;
    };
    return NameProcessor;
}());
exports.NameProcessor = NameProcessor;
// Example usage
var processor = new NameProcessor();
console.log(processor.returnNames()); // The parameter isn't used in the function, but we're passing an empty array to match the signature
