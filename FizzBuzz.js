var Kata = Kata || {};

Kata.FizzBuzz = function () {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee();
  }

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
