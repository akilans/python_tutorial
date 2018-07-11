import urllib.request, re

scan_url = input("Enter URL to scan for contact number : ")

if scan_url == "":
    print("Setting Default infy URL")
    scan_url = "https://www.infosys.com/contact/pages/country.aspx?subsidiary=Infosys&source=contact&country=India"

source = urllib.request.urlopen(scan_url).read().decode('utf-8')

'''
source_file =open("infy-contact.html","r")
source = source_file.read()
source_file.close()
'''

'''
pattern of phone numbers - +91 {2 to 4 numbers} {3 to 4 numbers} {4 numbers}
+91 8041119097
'''

pattern = re.compile(r'\+91\s\d{2,4}\s\d{3,4}\s\d{4}')

matches = pattern.finditer(source)

phone_book = open("phone_numbers.txt","w+")

phone_numbers = [] # Empty list

for match in matches:
    if match.group() not in phone_numbers:
        phone_numbers.append(match.group())

#phone_numbers = list(set(phone_numbers)) # Removes Duplicates
#print(phone_numbers)

for phone_no in phone_numbers:
  phone_book.write("%s\n" % phone_no)

phone_book.close()