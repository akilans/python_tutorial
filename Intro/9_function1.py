def print_all(*args):
	name,company,role = args;
	print("Hi %s you are working in %s as a %s" %(name,company,role));
	
def print_two(arg1,arg2):
	print("Hi %s you are working in %s" %(arg1,arg2));
	

user_name = input(">>>Enter your Name : ");
user_company = input(">>>Enter your Company : ");
user_role = input(">>>Enter your Role : ");

print_all(user_name,user_company,user_role);
print_two(user_name,user_company);

print("Well Done %s You successfully called functions" % user_name);