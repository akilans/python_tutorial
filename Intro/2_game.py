"""
My python Second Project
Rock, Paper, Scissor Game
"""

class Game:
	import random;
	def __init__(self):
		self.name="";
		self.game_result=[0,0,0,0] #0th index - no of games,1st index computer won,2nd index - user won,3rd index - tie matches
		self.game_options=["ROCK","PAPER","SCISSOR","QUIT"]
		
	def get_user_name(self):
		while len(self.name) < 3 :
			self.name=input("Enter valid Name : ");
		print("Welcome %s, Game Starts"%self.name);
		
	def show_options(self):
		for id,value in enumerate(self.game_options):
			print("%i.%s"%(id+1,value));
			
	def add_to_register(self,game_count,computer_win_match,user_win_match,tie_match):
		self.game_result[0]+=game_count;
		self.game_result[1]+=computer_win_match;
		self.game_result[2]+=user_win_match;
		self.game_result[3]+=tie_match;
		
			
	def display_result(self,user_selection):
		computer_selection=self.random.randint(1,3);
		print("Your selection is : %s" %self.game_options[user_selection-1]);
		print("Computer selection is : %s" %self.game_options[computer_selection-1]);
		
		if(computer_selection == user_selection):
			print("Tie Match!!!..");
			self.add_to_register(1,0,0,1);
		else:
			if(computer_selection==1 and user_selection==2):
				print("Congrats!!!..You Won the match");
				self.add_to_register(1,0,1,0);
			elif(computer_selection==1 and user_selection==3):
				print("Oops!!!..Computer Won the match");
				self.add_to_register(1,1,0,0);
			elif(computer_selection==2 and user_selection==1):
				print("Oops!!!..Computer Won the match");
				self.add_to_register(1,1,0,0);
			elif(computer_selection==2 and user_selection==3):
				print("Congrats!!!..You Won the match");
				self.add_to_register(1,0,1,0);
			elif(computer_selection==3 and user_selection==1):
				print("Congrats!!!..You Won the match");
				self.add_to_register(1,0,1,0);
			elif(computer_selection==3 and user_selection==2):
				print("Oops!!!..Computer Won the match");
				self.add_to_register(1,1,0,0);
			else:
				print("Error Happened");
		
	def display_final_result(self):
		print("************************************************************");
		print("Hi %s, Your Final Result :"%self.name);
		print("Number of Games Played : %i" %self.game_result[0]);
		print("Computer Won matches : %i" %self.game_result[1]);
		print("User Won matches : %i" %self.game_result[2]);
		print("Tie Matches: %i" %self.game_result[3]);
		print("************************************************************");
		
	def game_start(self):
		print("************************************************************");
		self.show_options();
		print("************************************************************");
		user_selection=int(input("Enter the Code : "));
		
		if user_selection>0 and user_selection<4 :
			self.display_result(user_selection);
		elif user_selection==4:
			self.display_final_result();
			exit();
		else:
			print("Invalid Option");
		
		self.game_start();
	

game = Game();
game.get_user_name();
game.game_start();
