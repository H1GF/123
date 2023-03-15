

def funct(a,*ar)

def funct(a=1, b=2, c=3):
    if b>= a <=c:
        return funct(a)
    elif a>= b <=c:
        return funct(b)
    elif b>= c <=a:
        return funct(c)
