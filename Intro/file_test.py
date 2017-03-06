from sys import argv

script, file_name = argv;

file_object = open(file_name);
file_content=file_object.read();

print(file_content);
file_object.close();