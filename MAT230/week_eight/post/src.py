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

s = "latex would be great for writing white papers but i have not delved into theory just yet heh"

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

e = 3
N = 33
encrypted_message = []
for x in encoded_message:
    C = str((int(x) ** e) % N)
    if len(C) == 1:
        C = f"0{C}"
    encrypted_message.append(C)
ez_copy_pasta = " ".join(encrypted_message)
print(
    f"Encrypted message: {encrypted_message}\nJoined for easy copy pasta: {ez_copy_pasta}\n"
)

d = 7
decrypted_message = []
for x in encrypted_message:
    D = str((int(x) ** d) % N)
    if len(D) == 1:
        D = f"0{D}"
    decrypted_message.append(D)
print(f"Decrypted message: {decrypted_message}\n")

decoded_message = ""
for i in decrypted_message:
    try:
        letter = alphabet[int(i) - 1]
    except IndexError:
        letter = " "
    decoded_message += letter
print(f"Decoded message: {decoded_message}\n")
