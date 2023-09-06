# Complete the 'superDigit' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING n
#  2. INTEGER k
#

def superDigit(n, k):
    
    n= str(sum(map(int,n))*k)
    while len(n)!=1:
        n = str(sum(map(int,n)))

    return int(n)