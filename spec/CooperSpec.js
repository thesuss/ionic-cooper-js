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
    beforeEach(function() {
      person = new Person({gender: 'male', age: 0, distance: 0});
    });
    it("Result male 13-14 2000m should be \"Poor\"", function(){
      person.age = 13;
      person.cooperResult(2000);
      expect(person.message).toEqual("Poor");
    });
    it("Result male 15-16 2500m should be \"Above Average\"", function(){
      person.age = 15;
      person.cooperResult(2500);
      expect(person.message).toEqual("Above Average");
    });
    it("Result male 17-19 3000m should be \"Excellent\"", function(){
      person.age = 18;
      person.cooperResult(3000);
      expect(person.message).toEqual("Excellent");
    });
    it("Result male 20-29 2700m should be \"Above Average\"", function(){
      person.age = 22;
      person.cooperResult(2700);
      expect(person.message).toEqual("Above Average");
    });
    it("Result male 30-39 2700 should be \"Excellent\"", function(){
      person.age = 33;
      person.cooperResult(2700);
      expect(person.message).toEqual("Excellent");
    });
    it("Result male 45 2000 should be \"Average\"", function(){
      person.age = 45;
      person.cooperResult(2000);
      expect(person.message).toEqual("Average");
    });
    it("Result male over 50 2000 should be \"Above Average\"", function(){
      person.age = 55;
      person.cooperResult(2000);
      expect(person.message).toEqual("Above Average");
    });
  });


    describe("Feale testing", function() {
      beforeEach(function() {
        person = new Person({gender: 'female', age: 0, distance: 0});
      });
      it("Result female 13-14 2000m should be \"Excellent\"", function(){
        person.age = 13;
        person.cooperResult(2000);
        expect(person.message).toEqual("Excellent");
      });
      it("Result female 15-16 1700m should be \"Average\"", function(){
        person.age = 15;
        person.cooperResult(1700);
        expect(person.message).toEqual("Average");
      });
      it("Result female 17-19 2120m should be \"Above Average\"", function(){
        person.age = 18;
        person.cooperResult(2120);
        expect(person.message).toEqual("Above Average");
      });
      it("Result female 20-29 2700m should be \"Excellent\"", function(){
        person.age = 22;
        person.cooperResult(2700);
        expect(person.message).toEqual("Excellent");
      });
      it("Result female 30-39 1500 should be \"Below Average\"", function(){
        person.age = 33;
        person.cooperResult(1500);
        expect(person.message).toEqual("Below Average");
      });
      it("Result female 45 1500 should be \"Average\"", function(){
        person.age = 45;
        person.cooperResult(1500);
        expect(person.message).toEqual("Average");
      });
      it("Result female over 50 1800 should be \"Above Average\"", function(){
        person.age = 55;
        person.cooperResult(1800);
        expect(person.message).toEqual("Above Average");
      });
    });

});
