# Для пропуска функции используется pass
# def func():
#     """ комментарий о том, что делает функция"""
#     pass 

# func() - вызов функции

# print(func()) - вывод результата функции


def func(r, pi = 3.14):
    """Функция, которая считает площадь круга. 
    Вводится число R и дается возможность пользователю ввести свое число пи"""
    if answ == 'n':
        circle = pi*(r*r)
    else: 
        pi = int(input('Ваше число Пи: \n'))
        circle = pi*(r*r)
    return pi*r**2

r = int(input('Введите R = '))
answ = str(input("Число Пи меняем? y/n: \n"))

circle = func(r)

print(circle)

