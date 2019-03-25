const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

 // test the normal case
 it('should return some text if modulus is 0 for 15', function() {
   [30, 15].forEach(function(input){
     const answer = fizzBuzzer(input); 
     expect(answer).to.equal('fizz-buzz');
    });
  }); 

  it('should return some text if modulus is 0 for 5', function() {
    [10, 5].forEach(function(input){
      const answer = fizzBuzzer(input); 
      expect(answer).to.equal('buzz');
     });
   }); 
  
   it('should return some text if modulus is 0 for 3', function() {
    [6, 3].forEach(function(input){
      const answer = fizzBuzzer(input); 
      expect(answer).to.equal('fizz');
     });
   }); 

 it('should raise error if args not numbers', function() {
  // range of bad inputs where not both are numbers
  const badInputs = [
    'a',
    '1',
    false
  ];
});
});