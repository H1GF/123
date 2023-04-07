import os
os.system('clear')

# ----------------------
#Функция выявления совершенного числа

# def perfect_number(n):
#     sum = 0
#     for i in range(1, n):
#         delit = n//i
#         if n%i == 0:
#             sum += i
#     if n == sum:
#         print('Да, это совершенное число!')
#     else:
#         print('Это несовершенное число')
    


# perfect_number(28)
# ----------------------
#Решето Эратосфена

# n = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]

n = [*range(2, 120)]

def sieve_of_Eratosthenes(num):
    if type(num) is list:
        for i in range(2,  121):
            for j in range(2, 121):
                if i*i in num:
                    n.remove(i*i)
                if i*j in num:
                    n.remove(i*j)
                # if i//2 != 0 in num:
                #     n.remove(i//2)

sieve_of_Eratosthenes(n)
print(n)



