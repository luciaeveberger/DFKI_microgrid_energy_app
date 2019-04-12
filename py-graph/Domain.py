#!/usr/bin/python
from subcomponents.Technology import Technology

class Domain(object):
	# properties 
	attached_components = 0
	type_bus = ""
	component_list = []

	def __init__(self, type_bus, voltage):
		self.type_bus = type_bus
		self.voltage = voltage

	def addComponents(self, component_id):
		self.component_list.append(component_id)

	def displayBus(self):
		print "Type : ", self.type_bus, "Voltage : ",self.voltage , ", Attached Components: ", self.component_list, 


bus = Domain("Electric Power", "high_voltage")
bus.addComponents({"component_id": 't1'})
technology = Technology("t1", "MV 1", "1000", "Output")

bus1 = Domain("Electric Power", "low_voltage")
bus1.addComponents({"component": technology.name})
bus1.addComponents({"component_id": 't3'})
bus1.addComponents({"component_id": 't5'})

#print bus.displayBus(), bus1.displayBus()
