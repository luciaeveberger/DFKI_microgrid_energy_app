
from graph import Graph

if __name__ == "__main__":

    g = { "a" : ["d"],
          "b" : ["c"],
          "c" : ["b", "c", "d", "e"],
          "d" : ["a", "c"],
          "e" : ["c"],
          "f" : []
        }


    graph = Graph(g)

    big_index = 0 
    data = 10 
    for j in range(data):
        print (j) 

    # print("Vertices of graph:")
    # print(graph.vertices())

    # print("Edges of graph:")
    # print(graph.edges())

    # print("Add vertex:")
    # graph.add_vertex("z")

    # print("Vertices of graph:")
    # print(graph.vertices())
 
    # print("Add an edge:")
    # graph.add_edge({"a","z"})
    
    # print("Vertices of graph:")
    # print(graph.vertices())

    # print("Edges of graph:")
    # print(graph.edges())

    # print('Adding an edge {"x","y"} with new vertices:')
    # graph.add_edge({"x","y"})
    # print("Vertices of graph:")
    # print(graph.vertices())
    # print("Edges of graph:")
    # print(graph.edges())