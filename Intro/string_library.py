def break_words(words):
	return words.split(' ');
	
def first_word(words):
	word = str(words.pop(0));
	return word;
	
def last_word(words):
	word = str(words.pop(-1));
	return word;
	
	