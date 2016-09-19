describe('Person', function() {
  var person;
  var girl;
  var boy;

  describe("Assertions", function() {
    beforeEach(function() {
      girl = new Person({gender: 'female', age: 10, distance: 1000});
      boy = new Person({gender: 'male', age: 22, distance: 2900});
    });

    it("should be girl", function() {
      expect(girl.gender).toBeDefined();
      expect(girl.gender).toEqual('female');
    });

    it("should be 10 years old", function() {
      expect(girl.age).toBeDefined();
      expect(girl.age).toEqual(10);
    });

    it("ran 1000 meters", function() {
      expect(girl.distance).toBeDefined();
      expect(girl.distance).toEqual(1000);
    });

    it("should be boy", function() {
      expect(boy.gender).toBeDefined();
      expect(boy.gender).toEqual('male');
    });

    it("should be 50 years old", function() {
      expect(boy.age).toBeDefined();
      expect(boy.age).toEqual(22);
    });

    it("ran 2900 meters", function() {
      expect(boy.distance).toBeDefined();
      expect(boy.distance).toEqual(2900);
    });
  });

  describe("Male testing", function() {
    describe("Age 13-14", function() {
      it("Result for 2000 should be \"Poor\"", function(){
        person = new Person({gender: 'male', age: 13, distance: 2000});
        person.cooperResult(person.distance);
        expect(person.message).toEqual("Poor");
      });
    });

    describe("Age 15-16", function() {
      it("Result for 2500 should be \"Above Average\"", function(){
        person = new Person({gender: 'male', age: 15, distance: 2500});
        person.cooperResult(person.distance);
        expect(person.message).toEqual("Above Average");
      });
    });

    describe("Age 17-19", function() {
      it("Result for 3000 should be \"Excellent\"", function(){
        person = new Person({gender: 'male', age: 18, distance: 3000});
        person.cooperResult(person.distance);
        expect(person.message).toEqual("Excellent");
      });
    });

    describe("Age 20-29", function() {
      it("Result for 2700 should be \"Above Average\"", function(){
        person = new Person({gender: 'male', age: 22, distance: 2700});
        person.cooperResult(person.distance);
        expect(person.message).toEqual("Above Average");
      });
    });

  });
});
