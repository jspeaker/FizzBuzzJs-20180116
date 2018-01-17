var FB = FB ? FB : {};

FB.FizzBuzz = function (value) {
    var toString = function () {
        if (value % 15 === 0) return "fizzbuzz";

        if (value % 5 === 0) return "buzz";

        if (value % 3 === 0) return "fizz";

        return value.toString();
    };

    return {
        toString: toString
    };
};

describe("GivenTwo",
    function () {
        it("WhenCallingToString_ThenItShouldReturnTwoAsString",
            function () {
                var fizzBuzz = FB.FizzBuzz(2);

                var two = fizzBuzz.toString();

                expect(two).toEqual("2");
            });
    });

describe("GivenSix",
    function () {
        it("WhenCallingToString_ThenItShouldReturnFizz",
            function () {
                var fizzBuzz = FB.FizzBuzz(6);

                var fizz = fizzBuzz.toString();

                expect(fizz).toEqual("fizz");
            });
    });

describe("GivenTen",
    function () {
        it("WhenCallingToString_ThenItShouldReturnBuzz",
            function () {
                var fizzBuzz = FB.FizzBuzz(10);

                var buzz = fizzBuzz.toString();

                expect(buzz).toEqual("buzz");
            });
    });

describe("GivenThirty",
    function () {
        it("WhenCallingToString_ThenItShouldReturnFizzBuzz",
            function () {
                var fizzBuzz = FB.FizzBuzz(30);

                var fizzbuzz = fizzBuzz.toString();

                expect(fizzbuzz).toEqual("fizzbuzz");
            });
    });
