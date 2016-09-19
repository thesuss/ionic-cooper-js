function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};


Person.prototype.cooperResult = function(distance) {
  if (this.gender.toLowerCase() == 'male') {
    this.message = this.getCooperTestMale(distance);
  } else {
    this.message = 'Result' //this.getCooperTestFemale(distance);
  }
};

Person.prototype.getCooperTestMale = function(distance) {
  //just testing for result for male distance
  //now adding age variable
  if(this.age>= 1 && this.age<= 14) {
    if(distance >= 2700){
      return 'Excellent'
    }
    if(distance >= 2400 && distance <= 2699){
      return 'Above Average'
    }
    if(distance >= 2200 && distance <=2399){
      return 'Average'
    }
    if(distance >= 2100 && distance <=2199){
      return 'Below Average'
    }
    if(distance < 2100){
      return 'Poor'
    }
  }
  if(this.age>= 15 && this.age<= 16) {
    if(distance >= 2800){
      return 'Excellent'
    }
    if(distance >= 2500 && distance <= 2799){
      return 'Above Average'
    }
    if(distance >= 2300 && distance <=2499){
      return 'Average'
    }
    if(distance >= 2200 && distance <=2299){
      return 'Below Average'
    }
    if(distance < 2200){
      return 'Poor'
    }
  }
};
