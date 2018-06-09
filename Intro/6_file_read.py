from sys import argv

#script , file_name = argv
#python3 6_file_read.py akilan.txt

script = argv[0]
file_name = argv[1]
file_object = open(file_name)

file_contents = file_object.read()

print(file_contents)
file_object.close()