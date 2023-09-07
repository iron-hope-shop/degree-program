import hashlib
HASH = '5f4dcc3b5aa765d61d8327deb882cf99'
PASSLIST = [
        'test',
        'name',
        'hello',
        'password',
        'goodbye'
]
def main():
        for word in PASSLIST:
                guess = hashlib.md5(word.encode('utf-8')).hexdigest()
                if guess.upper() == HASH or guess.lower() == HASH:
                        print(f'[+] Password found: {word}')
                        exit(0)
                else:
                        print(f'[-] Guess: {word} incorrect... {guess}')
        print(f'Password not found in wordlist...')
if __name__ == '__main__':
        main()