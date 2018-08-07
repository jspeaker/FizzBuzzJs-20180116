var Kata = Kata || {};

Kata.FizzBuzz = function (value) {

  var throwError = function () {
    throw new Error("Required argument 'value' must be a positive integer.");
  };

  // ReSharper disable once CallerCalleeUsing
  if (!value || value < 1 || parseInt(value) !== value) throwError();

  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(value);
  }

  var text = function () {
    var buzz = new Buzz();
    var fizz = new Fizz();

    if (value.evenlyDivisibleBy(15)) return fizz.text() + buzz.text();
    if (value.evenlyDivisibleBy(5)) return buzz.text();
    if (value.evenlyDivisibleBy(3)) return fizz.text();
    return value.toString();
  };

  return {
    text: text
  };
};

var Fizz = function () {
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(value);
  }

  var text = function() {
    return "Fizz";
  };

  return {
    text: text
  };
}

var Buzz = function () {
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(value);
  }

  var text = function() {
    return "Buzz";
  };

  return {
    text: text
  };
}

// ReSharper disable once NativeTypePrototypeExtending
Number.prototype.evenlyDivisibleBy = function (dividend) {
  return this.valueOf() !== 0 && this % dividend === 0;
};

describe("GivenNonIntegerInput",
  function () {
    it("WhenCallingText_ThenItShouldThrowError",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.FizzBuzz(1.234); }).toThrow(new Error("Required argument 'value' must be a positive integer."));
      });
  });

describe("GivenNegativeInput",
  function () {
    it("WhenCallingText_ThenItShouldThrowError",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.FizzBuzz(-1); }).toThrow(new Error("Required argument 'value' must be a positive integer."));
      });
  });

describe("GivenNoInput",
  function () {
    it("WhenCallingText_ThenItShouldReturnZeroAsString",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.FizzBuzz(); }).toThrow(new Error("Required argument 'value' must be a positive integer."));
      });
  });

describe("GivenTwo",
  function () {
    it("WhenCallingText_ThenItShouldReturnTwoAsString",
      function () {
        // arrange
        var fizzBuzz = new Kata.FizzBuzz(2);

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("2");
      });
  });

describe("GivenMultipleOfThree",
  function () {
    it("WhenCallingText_ThenItShouldReturnFizz",
      function () {
        // arrange
        var fizzBuzz = new Kata.FizzBuzz(4 * 3);

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("Fizz");
      });
  });

describe("GivenMultipleOfFive",
  function () {
    it("WhenCallingText_ThenItShouldReturnBuzz",
      function () {
        // arrange
        var fizzBuzz = new Kata.FizzBuzz(4 * 5);

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("Buzz");
      });
  });

describe("GivenMultipleOfThreeAndFive",
  function () {
    it("WhenCallingText_ThenItShouldReturnFizzBuzz",
      function () {
        // arrange
        var fizzBuzz = new Kata.FizzBuzz(4 * 3 * 5);

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("FizzBuzz");
      });
  });
