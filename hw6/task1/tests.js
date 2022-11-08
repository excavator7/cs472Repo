describe("The sum function: ", function(){
    it("Returns the sum of array: ", function(){
        assert.equal(sum([3, 4, 5]), 12);
    });
});

describe("The multiply function: ", function(){
    it("Returns the multiplication of array element: ", function(){
        assert.equal(multiply([3, 5]), 15);
    });
});

describe("The reverse function: ", function(){
    it("Returns the reverse of a string: ", function(){
        assert.equal(reverse("hello"), "olleh");
    });
});
describe("The filterLongWords function: ", function(){
    it("Returns the words that's greater than 5: ", function(){
        assert.equal(filterLongWords(["sue", "john", "charles"], 6), "charles");
    });
});