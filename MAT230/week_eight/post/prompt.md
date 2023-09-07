As you learned this week, RSA is the most widely used public key cryptosystem. In this discussion, you will apply RSA to post and read messages. For this reflection discussion, use the prime numbers p = 3 and q = 11.

Using the public key e = 3, post a phrase about something that you found interesting or relevant in this course. Include only letters and spaces in your phrase. Represent the letters A through Z by using the numbers 01 through 26, and represent a space by the number 32. Treat upper case and lower case letters as the same.

Optional: If you want to include punctuation characters, you can use the numbers 27 through 31 for that, but you must inform your classmates that you did.

How did you calculate your value for d? As a check, the phrase "A CAB" would be represented by "01 32 03 01 02" and would be encrypted as "01 32 27 01 08".


Below are the steps to encrypt my message:

p = 3
q = 11

N = p*q = 3*11 = 33

The public keys are N = 33 and e = 3.

To find the private key, d, we need to find the multiplicative inverse of the public key, e, modulo M.  To find the modulus value, M:

M = (p-1)(q-1)
M = 2*10 = 20

e = 3

In this case d = 7 is the inverse of 3 mod 20.

Using C = M^e % N (I wrote a Python script to encode/decode and encrypt/decrypt the messages) my message is:
26 21 12 26 24 32 27 03 24 27 21 03 14 28 32 01 05 31 32 14 24 01 03 12 28