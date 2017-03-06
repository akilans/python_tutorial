from sys import argv


script, from_file, to_file = argv

print("Starts copy content from %s to %s" % ( from_file , to_file ));

from_file_object = open(from_file,'r');
from_file_content = from_file_object.read();

print("Total number of characters in %s file is %d !!!" %(from_file,len(from_file_content)));
to_file_object = open(to_file,'w');

print("Clearning contents From %s" % to_file);
to_file_object.truncate();
to_file_object.write(from_file_content);

from_file_object.close();
to_file_object.close();

print("Well Done !!!...End of copying content from %s to %s" % ( from_file , to_file ));