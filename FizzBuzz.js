var Kata = Kata || {};

Kata.FizzBuzz = function (value) {
  var throwError = function () {
    throw new Error("Required argument 'value' must be a positive integer.");
  };

  // ReSharper disable once CallerCalleeUsing
  if (!value) throwError();
  if (!value.positiveInteger()) throwError();

  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(value);
  }

  var text = function () {
    if (value.evenlyDivisibleBy(15)) return (new Fizz()).text() + (new Buzz()).text();
    if (value.evenlyDivisibleBy(5)) return (new Buzz()).text();
    if (value.evenlyDivisibleBy(3)) return (new Fizz()).text();
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

// ReSharper disable once NativeTypePrototypeExtending
Number.prototype.positiveInteger = function () {
  return this > 0 && parseInt(this) === this.valueOf();
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
