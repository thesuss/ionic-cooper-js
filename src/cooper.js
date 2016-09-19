function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};


Person.prototype.cooperResult = function(meters) {
  if (this.gender.toLowerCase() == 'male') {
    this.message = "Result" //this.getCooperTestMale(meters);
  } else {
    this.message = "Result" //this.getCooperTestFemale(meters);
  }
};

  
