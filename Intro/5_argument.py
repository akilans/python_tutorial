from sys import argv
#python3 5_argument.py akilan infosys bangalore
#script,first,second,third = argv
script = argv[0]
first = argv[1]
second = argv[2]
third = argv[3]

print("Script Name is : %s " % script)
print("Your Name is : %s " % first)
print("You are working in : %s " % second)
print("Your Current Location is : %s " % third)