const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (name) {
  const remainingDinosaurs = [];
  for (const dinosaur of this.dinosaurs) {
    if (!name) {remainingDinosaurs.push(dinosaur);
    }
  }
  this.dinosaurs = remainingDinosaurs;
};

Park.prototype.findMostVisitors = function () {
  let mostVisited =[];
  let currentMax = 0;
  for (const dinsr of this.dinosaurs) {
    if (dinsr.guestsAttractedPerDay > currentMax){
      mostVisited.push(dinsr);
      currentMax = dinsr.guestsAttractedPerDay;
    };
    return mostVisited[0];
  };
};

Park.prototype.findAll = function(type){
  const allThatType = [];
  for (const dinz of this.dinosaurs) {
    if (this.dinz.species == type) {allThatType.push(dinz)
    }
  };
  return allThatType[0];
}

Park.prototype.totalVisitorsDay = function(){
  let totalPerDay = 0;
  for (const dinosaur of this.dinosaurs){
    totalPerDay += dinosaur.guestsAttractedPerDay;
  }
  return totalPerDay;
};

Park.prototype.totalVisitorsYear = function(){
  return this.totalVisitorsDay()*365
};

Park.prototype.yearRevenue = function(){
  return this.totalVisitorsYear()* this.ticketPrice
};

module.exports = Park;
