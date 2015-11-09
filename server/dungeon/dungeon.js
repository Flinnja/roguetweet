var Dungeon = (function() {
  function Dungeon(size){
    this.charLoc = {}
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
    this.charLoc = merge(this.charLoc,directions[dir])
  }

  Dungeon.prototype.setCharLoc = function(x,y){
    this.charLoc = {x: x, y: y}
    removeCharRef(this)
    setCharRef(this)
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
    setCharRef(dung)
  }

  function placeTreasure(dung){
    dung.maze[randomCoord(dung)][randomCoord(dung)] = 't'
  }

  function removeCharRef(dung){
    for(var i=0;i<dung.maze.length;i++){
      for(var j=0;j<dung.maze.length;j++){
        if(dung.maze[i][j] == 'c'){
          dung.maze[i][j] == 'e'
          foundChar = true
          break
        }
      }
      if(foundChar = true) break
    }
  }

  function setCharRef(dung){
    dung.maze[dung.charLoc.x][dung.charLoc.y] = 'c'
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
