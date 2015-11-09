var Dungeon = (function() {
  function Dungeon(size){
    this.isWon = false
    this.charLoc = {}
    this.treasureLoc = {}
    this.size = size
    setupDungeon(this)
  }

  Dungeon.prototype.moveCharacter = function(dir){
    var directions = {up: {x: -1, y: 0},
                      down: {x: 1, y: 0},
                      left: {x: 0, y: -1},
                      right: {x: 0, y: 1}}
    var moveTo = merge(this.charLoc,directions[dir])
    if(moveTo.x<this.size && moveTo.x>=0 && moveTo.y<this.size && moveTo.y>=0){
      this.charLoc = moveTo
      removeRef(this, 'c')
      setRef(this, this.charLoc, 'c')
    }
    else{
      console.log("You cannot move outside the dungeon!")
    }
    checkWon(this)
  }

  //======FOR TESTING========

  // Dungeon.prototype.setObjLoc = function(locString,ref,x,y){
  //   this[locString] = {x: x, y: y}
  //   removeRef(this, ref)
  //   setRef(this, this.charLoc, ref)
  // }

  Dungeon.prototype.setCharLoc = function(x,y){
    this.charLoc = {x: x, y: y}
    removeRef(this, 'c')
    setRef(this, this.charLoc, 'c')
  }
  Dungeon.prototype.setTreasureLoc = function(x,y){
    this.treasureLoc = {x: x, y: y}
    removeRef(this, 't')
    setRef(this, this.treasureLoc, 't')
  }

  //=========PRIVATE FUNCTIONS============

  function setupDungeon(dung){
    dung.maze = buildEmptyMaze(dung.size)
    placeCharacter(dung)
    placeTreasure(dung)
  }

  function buildEmptyMaze(size){
    var maze = new Array(size)
    for (var i=0; i<size; i++){
      maze[i] = new Array(size)
      for(var j=0; j<size; j++){
        maze[i][j] = 'e'
      }
    }
    return maze
  }

  function placeCharacter(dung){
    dung.charLoc = {x: randomCoord(dung), y: randomCoord(dung)}
    setRef(dung, dung.charLoc, 'c')
  }

  function placeTreasure(dung){
    dung.treasureLoc = {x: randomCoord(dung), y: randomCoord(dung)}
    setRef(dung, dung.treasureLoc, 't')
  }

  function removeRef(dung, ref){
    foundRef = false
    for(var i=0;i<dung.maze.length;i++){
      for(var j=0;j<dung.maze.length;j++){
        if(dung.maze[i][j] == ref){
          dung.maze[i][j] = 'e'
          foundRef = true
          break
        }
      }
      if(foundRef == true) break
    }
  }

  function checkWon(dung){
    if(dung.charLoc.x == dung.treasureLoc.x && dung.charLoc.y == dung.treasureLoc.y){
      dung.isWon = true
      console.log("You got the treasure!")
    }
  }

  function setRef(dung, loc, value){
    dung.maze[loc.x][loc.y] = value
  }

  function randomCoord(dung){
    return Math.floor(Math.random()*(dung.size))
  }

  function merge(obj1,obj2){
    var result = {}
    for(i in obj1){
      result[i] = obj1[i]+obj2[i]
    }
    return result
  }

  return Dungeon
})()

module.exports = Dungeon
