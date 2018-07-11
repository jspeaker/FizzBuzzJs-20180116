var Kata = Kata || {};

Kata.FizzBuzz = function () {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee();
  }

};

// ReSharper disable once NativeTypePrototypeExtending
Number.prototype.evenlyDivisibleBy = function(dividend) {
  return this % dividend === 0;
};

describe("GivenFoo",
  function () {
    it("WhenCallingBar_ThenItShouldBaz",
      function () {
        // arrange

        // act

        // assert
        expect("bar").toEqual("baz");
      });
  });
