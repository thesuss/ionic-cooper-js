function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};


Person.prototype.cooperResult = function(distance) {
  if (this.gender.toLowerCase() == 'male') {
    this.message = getCooperTestMale(distance);
  } else {
    this.message = 'Result' //this.getCooperTestFemale(distance);
  }
};

getCooperTestMale = function(distance) {
  //just testing for result for male distance
  if(distance >= 2700){
    return 'Excellent';
  }
  if(distance >= 2400 && distance <= 2699){
    return 'Above Average';
  }
  if(distance >= 2200 && distance <=2399){
    return 'Average';
  }
  if(distance >= 2100 && distance <=2199){
    return 'Below Average';
  }
  if(distance < 2100){
    return 'Poor';
  }
};
