import os
os.system('clear')

class people:
    def __init__(self, name = ' ', surname = ' ', age = 0):
        self.name = name
        self.age = age
        self.surname = surname

    def next_name(self, rename):
        self.name = rename

    def info(self):
        print(f'Имя: {self.name} \nФамилия: {self.surname} \nВозраст: {self.age} \n')

peoples = people()

for i in range(5):
    people.name = input('Введите имя: ')
    people.surname = input('Введите фамилию: ')
    people.age = input('Введите возраст: \n')
    print(f'Имя: {people.name} \nФамилия: {people.surname} \nВозраст: {people.age} \n')

    answer = input('Хотите изменить имя? (y/n)')
    if answer == 'y' or 'Y':
        peoples.next_name = input()
        peoples.info()
    elif answer == 'n' or 'N':
        break
