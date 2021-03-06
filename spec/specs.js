describe("romanNumeral", function() {
  it("returns the roman numeral for one thousand", function() {
    expect(romanNumeral(1000)).to.equal("M");
  });

  it("returns the roman numeral for five-hundred", function() {
    expect(romanNumeral(500)).to.equal("D");
  });

  it("returns the roman numeral for one-hundred", function() {
    expect(romanNumeral(100)).to.equal("C");
  });

  it("returns the roman numeral for fifty", function() {
    expect(romanNumeral(50)).to.equal("L");
  });

  it("returns the roman numeral for ten", function() {
    expect(romanNumeral(10)).to.equal("X");
  });

  it("returns the roman numeral for five", function() {
    expect(romanNumeral(5)).to.equal("V");
  });

  it("returns the roman numeral for one", function() {
    expect(romanNumeral(1)).to.equal("I");
  });

  it("returns the roman numeral for one-thousand five-hundred", function() {
    expect(romanNumeral(1500)).to.equal("MD");
  });

  it("returns the roman numeral for one-thousand four-hundred", function() {
    expect(romanNumeral(1400)).to.equal("MCD")
  });

  it("returns the roman numeral for nine-hundred ninety-nine", function() {
    expect(romanNumeral(999)).to.equal("CMXCIX")
  });

  it("returns the roman numeral for four-hundred fourty-four", function() {
    expect(romanNumeral(444)).to.equal("CDXLIV")
  });
});
