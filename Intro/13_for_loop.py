roommates = [];
roommate_1 = input(">> Enter First Roommate Name : ");
roommates.append(roommate_1);

roommate_2 = input(">> Enter Second Roommate Name : ");
roommates.append(roommate_2);

roommate_3 = input(">> Enter Third Roommate Name : ");
roommates.append(roommate_3);

for roommate in roommates :
	print(roommate);

print("total:" , len(roommates));