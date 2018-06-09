print("Please select your Career \n 1). Web Developer \n 2). Android Developer \n 3). Network Engineer \n ")

selection = int(input(" >>Enter Career Options : "))

if(selection in range(1,4)):
	if( selection == 1 ):
		print("Conatct Akilan")
	elif( selection == 2 ) :
		print("Conatct Ponmagesh")
	elif(selection == 3 ):
		print("Contact jegan")
		
else:
	print("Please Enter correct Role")