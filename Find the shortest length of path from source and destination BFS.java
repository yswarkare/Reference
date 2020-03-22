import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

   public static void main(String[] args)
        {
            Scanner sc = new Scanner(System.in);

            int testCases = sc.nextInt();

            for (int i = 0; i < testCases; i++)
            {
                int totalNodes = sc.nextInt();
                int totalEdges = sc.nextInt();

                Map<Integer, List<Integer>> adjacencyList = new HashMap<Integer, List<Integer>>();

                for (int j = 0; j < totalEdges; j++)
                {
                    int src = sc.nextInt();
                    int dest = sc.nextInt();

                    if (adjacencyList.get(src) == null)
                    {
                        List<Integer> neighbours = new ArrayList<Integer>();
                        neighbours.add(dest);
                        adjacencyList.put(src, neighbours);
                    } else
                    {
                        List<Integer> neighbours = adjacencyList.get(src);
                        neighbours.add(dest);
                        adjacencyList.put(src, neighbours);
                    }


                    if (adjacencyList.get(dest) == null)
                    {
                        List<Integer> neighbours = new ArrayList<Integer>();
                        neighbours.add(src);
                        adjacencyList.put(dest, neighbours);
                    } else
                    {
                        List<Integer> neighbours = adjacencyList.get(dest);
                        neighbours.add(src);
                        adjacencyList.put(dest, neighbours);
                    }
                }

                int start = sc.nextInt();

                Queue<Integer> queue = new LinkedList<>();

                queue.add(start);

                int[] costs = new int[totalNodes + 1];

                Arrays.fill(costs, 0);

                costs[start] = 0;

                Map<String, Integer> visited = new HashMap<String, Integer>();

                while (!queue.isEmpty())
                {
                    int node = queue.remove();

                    if(visited.get(node +"") != null)
                    {
                        continue;
                    }

                    visited.put(node + "", 1);

                    int nodeCost = costs[node];

                    List<Integer> children = adjacencyList.get(node);

                    if (children != null)
                    {
                        for (Integer child : children)
                        {
                            int total = nodeCost + 6;
                            String key = child + "";

                            if (visited.get(key) == null)
                            {
                                queue.add(child);

                                if (costs[child] == 0)
                                {
                                    costs[child] = total;
                                } else if (costs[child] > total)
                                {
                                    costs[child] = total;
                                }
                            }
                        }
                    }
                }

                for (int k = 1; k <= totalNodes; k++)
                {
                    if (k == start)
                    {
                        continue;
                    }

                    System.out.print(costs[k] == 0 ? -1 : costs[k]);
                    System.out.print(" ");
                }
                System.out.println();
            }
        }
}