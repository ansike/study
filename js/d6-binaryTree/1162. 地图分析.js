// https://leetcode-cn.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const xLayout = [0,0,-1,1];
  const yLayout = [1,-1,0,0];
  const row = grid.length;
  const col = grid[0].length;
  const queue = [];
  // 将所有的陆地加入队列中
  for(let i = 0; i < row; i++){
      for(let j = 0; j < col; j++){
          if(grid[i][j] === 1){
              queue.push([i, j]);
          }
      }
  }
  let curLocation = null;
  let hasOcean = false;
  while(queue.length){
      curLocation = queue.shift();
      const x = curLocation[0];
      const y = curLocation[1];
      let direction = 3;
      
      while(direction >= 0){
          const newX = x + xLayout[direction];
          const newY = y + yLayout[direction];
          direction--;
          if(newX < 0 || newX >= col || newY < 0 || newY >= row || grid[newX][newY] !== 0){
              continue;
          }
          hasOcean = true;
          grid[newX][newY] = grid[x][y] + 1;
          queue.push([newX, newY]);
      }
  }

  // 只有海洋或者陆地的case
  if(!curLocation || !hasOcean){
      return -1;
  }

  // console.log(grid);
  return grid[curLocation[0]][curLocation[1]] - 1;

};