import re
sentence = "Akilan is working in infosys as a Devops engineer.He is 30 years old.Mr. Alex, Mr Kumar, Mr mathan,Mr S are his friends.His mobile number is 9738840498 and 8778641559 his email id is akil.dove@gmail.com"

#pattern = re.compile(r'^Ak') # Start with Ak
#pattern = re.compile(r'\.com$') # Ends with .com
#pattern = re.compile(r'\w[0-9]') # Words has numeric
#pattern = re.compile(r'\w[^0-9]') # Words has non-numeric
#pattern = re.compile(r'\d.') # Returns all digits

#pattern = re.compile(r'[789]\d\d\d\d\d\d\d\d\d.') # Print mobile number starts with 7 0r 8 0r 9.Ten digit pattern
#pattern = re.compile(r'[7-9]\d\d\d\d\d\d\d\d\d.') # Print mobile number starts with 7 0r 8 0r 9.Ten digit pattern
#pattern = re.compile(r'[^0-6]\d\d\d\d\d\d\d\d\d.') # Print mobile number starts without 0 to 6.Ten digit pattern

#pattern = re.compile(r'[^0-6]\d{9}.') # Print mobile number starts without 0 to 6.Ten digit pattern
'''
Mr - Start with Mr
\.? - After Mr "." is optional(?)
\s - must have space
[A-Z] - It should be a capital letter
\W* - Word may be a single or multiple characters 
'''
pattern = re.compile(r'Mr\.?\s[A-Z]\w*') 
'''
Ignore Mr mathan - as his name starts with small letter
Mr. Alex
Mr Kumar
Mr S
'''


matches = pattern.finditer(sentence)

for match in matches:
    print(match)
    #print(match.group())