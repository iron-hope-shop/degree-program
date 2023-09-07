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
msg = "13 01 19 08 12 03 05 13 32 19 03 13 17 14 32 08 26 32 26 01 28 03 26 24 32 05 09 23 32 14 17 01 14 32 03 32 11 05 09 23 32 01 32 12 03 14 14 12 26 32 19 09 24 26"

msg = msg.split(" ")
print(msg)

N = 33
d = 7
decoded = []
for x in msg:
    D = str((int(x) ** d) % N)
    if len(D) == 1:
        D = f"0{D}"
    decoded.append(D)

print(decoded)

decoded_message = ""
for i in decoded:
    print(i)
    try:
        letter = alphabet[int(i) - 1]
    except IndexError:
        letter = " "
    decoded_message += letter

print(decoded_message)
