const { findTaskById } = require("../repository/taskRepository");

async function hasCycle(taskId, dependencies) {
    const  visited = new Set();

    async function dfs(nodeId) {
        if (visited.has(node)) return true;  // cycle detected
        visited.add(node);

        for (let dep of graph[node]) {
        if (dfs(dep)) return true;
        }

        visited.delete(node);  // backtrack
        return false;
    }
}