var Kata = Kata || {};

Kata.Main = function (fizzBuzzNumber, fizzBuzzStrategy) {
  if (!fizzBuzzNumber) throw Error("Parameter 'fizzBuzzNumber' is required.");
  if (!fizzBuzzStrategy) return new arguments.callee(fizzBuzzNumber, new Kata.FizzBuzzStrategy(new Kata.BuzzStrategy(new Kata.FizzStrategy(new Kata.DefaultStrategy()))));
  if (typeof fizzBuzzNumber === "number") return new arguments.callee(new Kata.FizzBuzzNumber(fizzBuzzNumber), new Kata.FizzBuzzStrategy(new Kata.BuzzStrategy(new Kata.FizzStrategy(new Kata.DefaultStrategy()))));
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(fizzBuzzNumber, fizzBuzzStrategy);

  var text = function () {
    return fizzBuzzStrategy.text(fizzBuzzNumber);
  };

  return {
    text: text
  };
};

describe("Given No FizzBuzzNumber Parameter",
  function () {
    it("When Calling Main Constructor Then It Should Throw Correct Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.Main(); }).toThrow(new Error("Parameter 'fizzBuzzNumber' is required."));
      });
  });

describe("Given No FizzBuzzStrategy Parameter",
  function () {
    it("When Calling Main Constructor Then It Should Not Throw Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.Main(new Kata.FizzBuzzNumber(123)); }).not.toThrow(new Error("Parameter 'fizzBuzzNumber' is required."));
      });
  });

describe("Given Native Number As FizzBuzzNumber Parameter",
  function () {
    it("When Calling Main Constructor Then It Should Not Throw Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.Main(123); }).not.toThrow(new Error("Parameter 'fizzBuzzNumber' is required."));
      });
  });

describe("Given No New Keyword",
  function () {
    it("When Calling Main Constructor Then It Should Not Throw Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { Kata.Main(123); }).not.toThrow(new Error("Parameter 'fizzBuzzNumber' is required."));
      });
  });

describe("Given Number Not Divisible By Three Nor Five",
  function () {
    it("When Calling String Then It Should Return Two As String",
      function () {
        // arrange
        var fizzBuzz = new Kata.Main(new Kata.FizzBuzzNumber(8));

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("8");
      });
  });

describe("Given Number Divisible By Three",
  function () {
    it("WhenCallingString_ThenItShouldReturnFizz",
      function () {
        // arrange
        var fizzBuzz = new Kata.Main(new Kata.FizzBuzzNumber(4 * 3));

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("fizz");
      });
  });

describe("Given Number Divisible By Five",
  function () {
    it("WhenCallingString_ThenItShouldReturnBuzz",
      function () {
        // arrange
        var fizzBuzz = new Kata.Main(new Kata.FizzBuzzNumber(4 * 5));

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("buzz");
      });
  });

describe("Given Number Divisible By Three and Five",
  function () {
    it("WhenCallingString_ThenItShouldReturnFizzBuzz",
      function () {
        // arrange
        var fizzBuzz = new Kata.Main(new Kata.FizzBuzzNumber(4 * 3 * 5));

        // act
        var actual = fizzBuzz.text();

        // assert
        expect(actual).toEqual("fizzbuzz");
      });
  });

Kata.FizzBuzzNumber = function (number) {
  if (typeof number !== "number")
    throw Error("Parameter 'number' must be of type 'number' but was '" + typeof number + "'.");
  if (parseInt(number) !== number) throw Error("Parameter 'number' must be an integer.");
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(number);

  var evenlyDivisibleBy = function (divisor) {
    return number % divisor === 0;
  };

  var text = function () {
    return number.toString();
  };

  return {
    evenlyDivisibleBy: evenlyDivisibleBy,
    text: text
  };
};

describe("Given Not A Number As Number Parameter",
  function () {
    it("When Calling FizzBuzzNumber Constructor Then It Should Throw Correct Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.FizzBuzzNumber("a"); }).toThrow(new Error("Parameter 'number' must be of type 'number' but was 'string'."));
      });
  });

describe("Given Non-Integer Number As Number Parameter",
  function () {
    it("When Calling FizzBuzzNumber Constructor Then It Should Throw Correct Error",
      function () {
        // arrange // act // assert
        // ReSharper disable once ConstructorCallNotUsed
        expect(function () { new Kata.FizzBuzzNumber(1.234); }).toThrow(new Error("Parameter 'number' must be an integer."));
      });
  });

describe("Given Any Integer As Number Parameter",
  function () {
    it("When Calling Text Then It Should Return Integer As String",
      function () {
        // arrange 
        var fizzBuzzNumber = new Kata.FizzBuzzNumber(234);

        // act 
        var actual = fizzBuzzNumber.text();
        // assert
        expect(actual).toBe("234");
      });

    describe("And No Remainder From Divisor",
      function () {
        it("When Calling EvenlyDivisibleBy Then It Should Return True",
          function () {
            // arrange 
            var fizzBuzzNumber = new Kata.FizzBuzzNumber(12);

            // act 
            var actual = fizzBuzzNumber.evenlyDivisibleBy(6);

            // assert
            expect(actual).toBe(true);
          });
      });

    describe("And Remainder From Divisor",
      function () {
        it("When Calling EvenlyDivisibleBy Then It Should Return False",
          function () {
            // arrange 
            var fizzBuzzNumber = new Kata.FizzBuzzNumber(12);

            // act 
            var actual = fizzBuzzNumber.evenlyDivisibleBy(5);

            // assert
            expect(actual).toBe(false);
          });
      });
  });

Kata.FizzBuzzStrategy = function (next) {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(next);

  var text = function (fizzBuzzNumber) {
    if (!fizzBuzzNumber.evenlyDivisibleBy(15)) return next.text(fizzBuzzNumber);
    return "fizzbuzz";
  };

  return {
    text: text
  };
};

describe("Given Integer Divisible By Three and Five",
  function () {
    it("When Calling FizzBuzz Strategy Then It Should Return FizzBuzz",
      function () {
        // arrange
        var number = new Kata.FizzBuzzNumber(4 * 3 * 5);
        var strategy = new Kata.FizzBuzzStrategy();

        // act
        var actual = strategy.text(number);

        // assert
        expect(actual).toEqual("fizzbuzz");
      });
  });

Kata.BuzzStrategy = function (next) {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(next);

  var text = function (fizzBuzzNumber) {
    if (!fizzBuzzNumber.evenlyDivisibleBy(5)) return next.text(fizzBuzzNumber);
    return "buzz";
  };

  return {
    text: text
  };
};

describe("Given Integer Divisible By Five",
  function () {
    it("When Calling Buzz Strategy Then It Should Return Buzz",
      function () {
        // arrange
        var number = new Kata.FizzBuzzNumber(4 * 5);
        var strategy = new Kata.BuzzStrategy();

        // act
        var actual = strategy.text(number);

        // assert
        expect(actual).toEqual("buzz");
      });
  });

Kata.FizzStrategy = function (next) {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee(next);

  var text = function (fizzBuzzNumber) {
    if (!fizzBuzzNumber.evenlyDivisibleBy(3)) return next.text(fizzBuzzNumber);
    return "fizz";
  };

  return {
    text: text
  };
};

describe("Given Integer Divisible By Three",
  function () {
    it("When Calling Fizz Strategy Then It Should Return Fizz",
      function () {
        // arrange
        var number = new Kata.FizzBuzzNumber(4 * 3);
        var strategy = new Kata.FizzStrategy();

        // act
        var actual = strategy.text(number);

        // assert
        expect(actual).toEqual("fizz");
      });
  });

Kata.DefaultStrategy = function () {
  // ReSharper disable once CallerCalleeUsing
  if (!(this instanceof arguments.callee)) return new arguments.callee();

  var text = function (fizzBuzzNumber) {
    return fizzBuzzNumber.text();
  };

  return {
    text: text
  };
};

describe("Given Any Integer",
  function () {
    it("When Calling Default Strategy Then It Should Return Number As String",
      function () {
        // arrange
        var number = new Kata.FizzBuzzNumber(345);
        var strategy = new Kata.DefaultStrategy();

        // act
        var actual = strategy.text(number);

        // assert
        expect(actual).toEqual("345");
      });
  });
