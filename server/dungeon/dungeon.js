var Dungeon = (function() {
  function Dungeon(size){
    this.size = size
    this.maze = emptyMaze(size)
    placeCharacter(this)
  }

  Dungeon.prototype.placeCharacter = function(){
    this.maze[randomCoord()][randomCoord()] = 'c'
  }

  function emptyMaze(size){
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
    dung.maze[randomCoord(dung)][randomCoord(dung)] = 'c'
  }

  function randomCoord(dung){
    return Math.floor(Math.random()*(dung.size))
  }

  return Dungeon
})()

module.exports = Dungeon
