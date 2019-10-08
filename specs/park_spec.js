const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;

  beforeEach(function () {
    park = new Park ('Jurassic', 30, [] );
    dino1 = new Dinosaur('t-rex', 'carnivore', 50)
    dino2 = new Dinosaur('stegerthing', 'vegan', 20)
  });


  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });


  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dino1);
    const expected = [dino1];
    assert.deepStrictEqual(park.dinosaurs,expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino1);
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs,expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const result = park.findMostVisitors();
    const expected = (dino1);
    assert.deepStrictEqual(result, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    const expected = (dino1);
    assert.deepStrictEqual(park.findAll('t-rex'), expected);
  });


  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    assert.strictEqual(park.totalVisitorsDay(), 70)
    });


  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    assert.strictEqual(park.totalVisitorsYear(), 25550)
  });




  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    assert.strictEqual(park.yearRevenue(), 766500)
  });
});
