var Dungeon = (function() {
  function Dungeon(size){
    this.charLoc = {}
    this.treasureLoc = {}
    this.size = size
    this.maze = buildEmptyMaze(size)
    placeCharacter(this)
    placeTreasure(this)
  }

  Dungeon.prototype.moveCharacter = function(dir){
    var directions = {up: {x: -1, y: 0},
                      down: {x: 1, y: 0},
                      left: {x: 0, y: -1},
                      right: {x: 0, y: 1}}
    var moveTo = merge(this.charLoc,directions[dir])
    if(moveTo.x<this.size && moveTo.x>=0 && moveTo.y<this.size && moveTo.y>=0){
      this.charLoc = moveTo
      removeCharRef(this)
      setRef(this, this.charLoc, 'c')
    }
    else{
      console.log("You cannot move outside the dungeon!")
    }
  }

  Dungeon.prototype.setCharLoc = function(x,y){
    this.charLoc = {x: x, y: y}
    removeCharRef(this)
    setRef(this, this.charLoc, 'c')
  }

  //=========PRIVATE FUNCTIONS============


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

  function removeCharRef(dung){
    foundChar = false
    for(var i=0;i<dung.maze.length;i++){
      for(var j=0;j<dung.maze.length;j++){
        if(dung.maze[i][j] == 'c'){
          dung.maze[i][j] = 'e'
          foundChar = true
          break
        }
      }
      if(foundChar == true) break
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
