from sys import argv
#script,file_name = argv;

script = argv[0]
file_name = argv[1]

file_object = open(file_name)
file_contents = file_object.readline()

print("Printing 1st Line \n" + file_contents)

file_contents = file_object.readline()

print("Printing 2nd Line \n" + file_contents)

file_object.seek(0)
file_contents = file_object.readline()

print("Read from Top again \n" + file_contents)

