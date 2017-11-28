1. # Input:  A set of kmers Motifs
# Output: Count(Motifs)
def Count(Motifs):
    count = {}
    # initializing the count dictionary
    k = len(Motifs[0])
    for symbol in "ACGT":
        count[symbol] = []
        for j in range(k):
             count[symbol].append(0)
    t = len(Motifs)
    for i in range(t):
        for j in range(k):
            symbol = Motifs[i][j]
            count[symbol][j] += 1
    return count

2. # Insert your Count(Motifs) function here from the last Code Challenge.

# Input:  A list of kmers Motifs
# Output: the profile matrix of Motifs, as a dictionary of lists.
def Profile(Motifs):
    t = len(Motifs)
    k = len(Motifs[0])
    profile = {}
    # initializing the count dictionary
    k = len(Motifs[0])
    for symbol in "ACGT":
        profile[symbol] = []
        for j in range(k):
             profile[symbol].append(0)
    t = len(Motifs)
    for i in range(t):
        for j in range(k):
            symbol = Motifs[i][j]
            profile[symbol][j] += 1/(t)
    # insert your code here
    return profile

3.Consensus sequence:
def Count(Motifs):
    count = {}
    # initializing the count dictionary
    k = len(Motifs[0])
    for symbol in "ACGT":
        count[symbol] = []
        for j in range(k):
             count[symbol].append(0)
    t = len(Motifs)
    for i in range(t):
        for j in range(k):
            symbol = Motifs[i][j]
            count[symbol][j] += 1/t
    return count

def Consensus(Motifs):
    k = len(Motifs[0])
    count = Count(Motifs)
    consensus = ""
    for j in range(k):
        m = 0
        frequentSymbol = ""
        for symbol in "ACGT":
            if count[symbol][j] > m:
                m = count[symbol][j]
                frequentSymbol = symbol
        consensus += frequentSymbol
    return consensus

# 4.Score:

def Consensus(Motifs):
    # insert your code here
    k = len(Motifs[0])
    count = Count(Motifs)
    consensus=""
    for j in range(k):
        m=0
        frequentSymbol = ""
        for symbol in "ACGT":
            if count[symbol][j] > m:
                m = count[symbol][j]
                frequentSymbol = symbol
        consensus+=frequentSymbol
    return consensus
    
def Count(Motifs):
    count = {}
    # your code here
    k = len(Motifs[0])
    for symbol in "ACGT": 
            count[symbol]=[]
            for i in range(k):
                count[symbol].append(0)
    t = len(Motifs)
    for i in range(t):
        for j in range(k):
            symbol = Motifs[i][j]
            count[symbol][j] += 1
    return count

def Score(Motifs):
    # Insert code here
    consensus=Consensus(Motifs)
    count= Count(Motifs)
    k =len(consensus)
    j= len(count)
    t=len(Motifs)
    mscore =0
    score =0
    for i in range(k):
        mscore= t - count[consensus[i]][i]
        score+=mscore
    return score