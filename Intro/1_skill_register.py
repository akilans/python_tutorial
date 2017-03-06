"""
Here is my First Python Project
Skill Register
"""
class Skill:
	def __init__(self):
		self.name="";
		self.skill_list = ["PHP","PYTHON","PERL","RUBY","JAVA","QUIT"];
		self.user_skill_list = []
		
	def add_skills(self):
		print("**********************************************************");
		self.show_skill_list();
		print("**********************************************************");
		user_skill = int(input("Enter the skill code : "));
		if(user_skill > 0 and user_skill < 6) :
			self.add_to_register(self.skill_list[user_skill-1]);
		elif(user_skill ==6):
			self.display_result();
			exit();
		else:
			print("Invalid Skill");
		self.add_skills();
	
	def get_user_name(self):	
		while len(self.name) < 3 :
			self.name = input("Please Enter Valid Name : " );
		else :
			print("Welcome %s, Start add your skills" %self.name);
	
	def show_skill_list(self) :
		print("Start Add skills by Entering Numbers");
		for id, value in enumerate(self.skill_list):
			print("%i.%s" %(id+1,value));
			
	def add_to_register(self,skill):
		if skill not in self.user_skill_list :
			self.user_skill_list.append(skill);
			print("'%s' Skill Added Successfully"%skill);
		else:
			print("'%s' Skill Already Exists!!!"%skill);
		
	def display_result(self):
		print("**********************************************************");
		print("Final result :");
		print("Hi %s, You know %i Programming languages :" %(self.name,len(self.user_skill_list)));
		for id, value in enumerate(self.user_skill_list):
			print("%i.%s" %(id+1,value));
		print("**********************************************************");

			
skill = Skill();
skill.get_user_name();
skill.add_skills();
