var Dungeon = require('../dungeon/dungeon.js')
var chai = require('chai')
var expect = chai.expect

describe('Dungeon', function(){
  before(function(){
    this.testDung = new Dungeon(5)
  })

  it('Has a maze of correct size', function(){
    expect(this.testDung.maze.length).to.equal(5)
    expect(this.testDung.maze[0].length).to.equal(5)
  })

  it('Has a character at a starting position', function(){
      var foundChar = false
      for(var i=0;i<this.testDung.maze.length;i++){
        for(var j=0;j<this.testDung.maze.length;j++){
          if(this.testDung.maze[i][j] == "c"){
            foundChar = true
            break
          }
        }
        if(foundChar = true) break
      }
    expect(foundChar).to.be.true
  })

})
