import os
os.system('clear')

# empty_set = set()
# c = frozenset(5) #Неизменяемый список

# print(a & b)
# print(a | b)
# print(a - b)
# print(a ^ b)

# Используя функцию zip нужно создать словарь из кортежа ключей : значений и вывести. Два списка, один ключ, другой - значение
keys = [
    'optimist','pessimist','troll'
]

values = [
    'Стакан наполовину полон', 'Стакан наполовину пуст', 'Стакан с водой'
]

set = {}

for key, value in zip(keys, values):
    set[key] = value
    
print(set)

# Пользователь вводит слово и нужно посчитать сколько вхождений каждой буквы в слове

word = input('Введите слово: \n')

l_in_w = {letter:word.count(letter) for letter in set(word)}
print(l_in_w)

# Считать только нужные буквы, которые ввел пользователь

li = 'al'
word = input('Введите слово: \n')

l_in_w = {letter:word.count(letter) for letter in set(word) if letter in li}
print(l_in_w)