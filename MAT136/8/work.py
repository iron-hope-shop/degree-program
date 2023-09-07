from statistics import median,mean,mode
l = "16; 17 ; 19; 20; 20; 21; 23; 24; 25; 25; 25; 26; 26; 26; 27; 27; 28; 29; 29; 32; 33; 33; 34; 35; 37; 39; 49"
l = l.split(";")
l = [int(x.strip()) for x in l]
print(mean(l))
print(median(l))
print(mode(l))

