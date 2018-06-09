from sys import argv

#script, file_name = argv;
script = argv[0]
file_name = argv[1]

file_object = open(file_name,'w')

print("Deleting Content From %s File" % file_name)

file_object.truncate()

print("Contents are Deleted Successfully From %s File" % file_name)

user_name = input(">> Enter your name : ")
user_age = input(">> Enter your age : ")
user_company = input(">> Enter your Company : ")
user_role = input(">> Enter your Designation : ")

file_object.write("My name is %s \n" % user_name)
file_object.write("My age is %s \n" % user_age)
file_object.write("I am working in %s as a %s \n" % ( user_company, user_role ) )
file_object.write("That's all about me!!! \n")

file_object.close()

print("Your Detail is ready based on the information given by you")

file_object = open(file_name)

file_contents = file_object.read()

print(file_contents)

file_object.close()