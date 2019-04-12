#!/usr/bin/python
from Domain import bus1

class Node(object):
	def __init__(self, name, category, input, output):
		self.name = name
		self.category = category
		self.input = input 
		self.output = output


if __name__ == "__main__":
	lst_node = []
	print type(bus1)
	lst_node.append(bus1)
	lst_node.append(bus1)
	#print lst_node
	#print('\n'.join(' '.join(map(str,sl)) for sl in lst_node))

