name = "Akilan"
Company = "Infosys"
Location = "Bangalore"

print("Lets Discuss About %s , Python Lover" % "Akilan")
question ="Where is %s working?"

print( question % name )

Answer = "%s is working in %s , %s"
print( Answer % ( name, Company, Location ) )

print ( "." * 50 )

print( name +"----"+ Company )
print( Location )

print ( "." * 50 )

print("Roommates Details of %s" % name)
roommates = "Akilan\njegan\nPonmagesh"

print(roommates)

print("\tMy name is %s \n\tI am working in %s \n\tI am in %s \n\tI Love %s Programming " % ( name, Company, Location,'Python' ) )