"""
Final Project Script Four Draft: Pattern Search and Replace
Bradley Jackson
10/12/19
"""
import re

def lprint(instances):
  print(len(instances))

lorem_ipsum = '''Lorem ipsum dolor sit-amet, consectetur adipiscing elit. Phasellus iaculis velit ac nunc interdum tempor. 
Ut volutpat elit metus, vel auctor enim commodo at. Nunc quis quam non ligula ultricies luctus porta id justo. 
Quisque dapibus est ut sagittis bibendum. Mauris ullamcorper pellentesque porttitor. Ut sit:amet ex nec dolor gravida 
porttitor. Proin at justo finibus justo vestibulum congue. Suspendisse et ipsum et ipsum eleifend dapibus a fermentum 
lacus. Vivamus porta nunc eu nisl sagittis, quis vulputate metus dignissim. Integer non fermentum nisl, id vestibulum 
elit. Sed euismod vestibulum purus ut porttitor. Integer sit-amet mollis neque. Donec sed lacinia diam, ac finibus 
lectus. Mauris tempor ipsum nisl, vitae posuere est lacinia nec. Nam eget euismod odio.'''

non_alphanumeric = r"[^a-zA-Z0-9]"
# regex pattern to match the opposite of the range of 
# all alphanumeric characters.
sep_special = r"sit[:-]amet"
# regex pattern to match literal strings 'sit' and 'amet'
# separated by range of special characters: colon and hyphen.
sep_spaces = r"sit\samet"
# regex pattern to match the literal 'sit amet'
sep_wildcard = r"sit.amet"
# regex pattern demonstrating a wildcard
# matches "sit" and "amit" separated by any single character
non_aplha_chars = re.findall(non_alphanumeric, lorem_ipsum)
occurrance_sit_amet_special = re.findall(sep_special, lorem_ipsum)
replace_results = re.sub(sep_special, "sit amet", lorem_ipsum)
# stores a copy string of lorem_ipsum with 'sit:amet' and
# 'sit-amet' replaced with 'sit amet'
occurrance_sit_amet = re.findall(sep_spaces, replace_results)
wild = re.findall(sep_wildcard, lorem_ipsum)

lprint(non_aplha_chars)
# prints the number of non-alphanumeric characters in lorem_ipsum
lprint(occurrance_sit_amet_special)
# prints the number of 'sit:amet' and 'sit-amet' occurances
lprint(occurrance_sit_amet)
# prints the number of 'sit amet' occurances
lprint(wild)
