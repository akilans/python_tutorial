class Roommate(object):
	def __init__(self,profile):
		self.profile = profile
		
	def details(self):
		print(self.profile)
		
akilan = Roommate('Akilan,Infosys,Technology Analyst')
akilan.details()