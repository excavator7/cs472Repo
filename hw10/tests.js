describe("Testing Functions: ", function(){
    it("Testing filter function:", function(){
        assert.equal("This house is nice!", "This house is not nice!".filter('not'));
    });

    it("Testing bubbleSort function:", function(){
        assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
    });
});

