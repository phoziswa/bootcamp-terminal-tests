const assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){
it('should greet Phoziswa', function(){
    assert.equal('Hello, Phoziswa', greet('Phoziswa'));
});
});