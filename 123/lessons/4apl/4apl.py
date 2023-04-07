import os
os.system('clear')
# ----------------------
# def foo(a, b):
#     return a+b

# res = foo(5, 3)

# ----------------------
# def foo(*args): 
#     for elem in args:
#         sum += elem
#     return sum

# res = foo(5, 4, 1)

# ----------------------
# def foo(**args): 
#     sum = 0

#     for value in args.values:
#         print(value)

# res = foo(a=5, b=4, c=1)

# ----------------------
# a = [1,2,3,4,5]

# print(a)
# print(*a) #вывод аргумента
# ----------------------

# a = [*a] #копия списка

# ----------------------

a = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        'a'
    ]
]

def foo(date):
    res = []

    if type(date) is list:
        for elem in date:
            res += foo(elem)
    else:
        res.append(date)

    return res 

r = foo(a)
print(r)





