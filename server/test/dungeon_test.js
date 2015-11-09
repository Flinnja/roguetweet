var Dungeon = require('../dungeon/dungeon.js')
var chai = require('chai')
var expect = chai.expect

describe('Dungeon', function(){
  beforeEach(function(){
    this.testSize = 10
    this.testDung = new Dungeon(this.testSize)
  })

  it('Has a maze of correct size', function(){
    expect(this.testDung.maze.length).to.equal(this.testSize)
    expect(this.testDung.maze[0].length).to.equal(this.testSize)
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

  it('Has treasure hidden somewhere', function(){
    var foundTreasue = false
    for(var i=0;i<this.testDung.maze.length;i++){
      for(var j=0;j<this.testDung.maze.length;j++){
        if(this.testDung.maze[i][j] == "t"){
          foundTreasue = true
          break
        }
      }
      if(foundTreasue = true) break
    }
    expect(foundTreasue).to.be.true
  })

  it('Can move character around maze', function(){
    this.testDung.setCharLoc(1,0)
    this.testDung.moveCharacter('up')
    expect(this.testDung.charLoc.x).to.equal(0)
    expect(this.testDung.maze[0][0]).to.equal('c')
    expect(this.testDung.maze[1][0]).to.equal('e')
  })

  it('Cannot move a character outside of the dungeon limits', function(){
    this.testDung.setCharLoc(0,0)
    this.testDung.moveCharacter('up')
    expect(this.testDung.charLoc.x).to.equal(0)
    expect(this.testDung.maze[0][0]).to.equal('c')
  })

})
