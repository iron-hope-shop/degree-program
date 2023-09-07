alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

s = "walk"

encoded_message = []
for i in s.lower():
    try:
        pos = str(alphabet.index(i) + 1)
        if len(pos) == 1:
            pos = f"0{pos}"
    except ValueError:
        pos = "32"
    encoded_message.append(pos)
print(f"\nEncoded message: {encoded_message}\n")

decrypted_message = [18, 21, 12, 5, 18]
decoded_message = ""
for i in decrypted_message:
    try:
        letter = alphabet[int(i) - 1]
    except IndexError:
        letter = " "
    decoded_message += letter
print(f"Decoded message: {decoded_message}\n")

c = 44
N = 70
k = 60
x = (c - k) % N
print(x)

p = 17
q = 11
d = 3
c = 6

N = p * q
x = (c ** d) % N
print(x)
