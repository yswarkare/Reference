/*
? Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
? An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
? You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:

11110

11010

11000

00000

Output: 1

Example 2:

Input:

11000

11000

00100

00011

Output: 3
*/

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

let grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

function numbersIsland(grid) {
    function markIslands(grid, x, y, visited) {
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length) {
            return;
        }
        if (visited[x][y] == true) {
            return;
        }
        visited[x][y] = true;
        if (grid[x][y] == 0) {
            return;
        }
        markIslands(grid, x - 1, y, visited);
        markIslands(grid, x + 1, y, visited);
        markIslands(grid, x, y - 1, visited);
        markIslands(grid, x, y + 1, visited);
    }

    let visited = [];
    for (let i = 0; i < grid.length; i++) {
        visited[i] = [];
    }

    let count = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (!visited[x][y] && grid[x][y] == "1") {
                count++;
                markIslands(grid, x, y, visited)
            }
            visited[x][y] = true;
        }
    }
    return count;
}

numbersIsland(grid2);