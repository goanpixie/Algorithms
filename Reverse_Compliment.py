#Reverse Compliment of a Nucleotide:

def complement(Nucleotide):
    comp = []
    i=0
    while(i<len(Nucleotide)):
        if Nucleotide[i] == "A":
            comp.append("T")
        elif Nucleotide[i] == "T":
            comp.append("A")
        elif Nucleotide[i] == "G":
            comp.append("C")        
        elif Nucleotide[i] == "C":
            comp.append("G")
        i=i+1
    # your code here
    return comp

def ReverseComplement(Pattern):
    ans=(complement(Pattern))[::-1]
    revComp = "".join(str(x) for x in ans)
    # your code here
    return revComp


# Copy your reverse function from the previous step here.


# HINT:   Filling in the following function is optional, but it may come in handy when solving ReverseComplement
# Input:  A character Nucleotide
# Output: The complement of Nucleotide



### DO NOT MODIFY THE CODE BELOW THIS LINE ###
import sys
print(ReverseComplement(sys.stdin.read().strip()))