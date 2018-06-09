class Parent():

	def __init__(self,name):
		self.name = name

	def getName(self):
		print("Father name is %s" % self.name)
	
class Child(Parent):
	#pass
	def getName(self):
		print("Son name is %s" % self.name)

appa = Parent("Subramanian")
son = Child("Akilan")

appa.getName()
son.getName()