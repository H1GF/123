
# ---------------------------
# file = open('text.txt')

# # Читает весь файл
# data = file.read()

# print( data )

# # Обязательно закрываем файл после работы с ним, иначе будут ошибки
# file.close()
# ---------------------------

# with open("26 aprel/text.txt", 'r') as file:
#     """"Выводит текст в файле"""
#     for line in file:
#         print( line.strip() )

# ---------------------------

# with open('26 aprel/text.txt', 'w') as file:
#     file.write('125')
#     file.write('\n')

# ---------------------------

# Создать список и сохранить его в файле 

# my_list = ['four ', 'five']

# with open("26 aprel/26 aprel.txt", 'a') as file:
#     file.writelines(my_list)
#     file.writelines('\n')

# ---------------------------

# import os

# _path__to_data = '26 aprel/data/'

# files = sorted(os.listdir(_path__to_data))

# for file in files:
#     with open(_path__to_data+file) as f:
#         for line in f:
#             print( line.strip() )

# ---------------------------
# Пробежаться по файлу и посчитать сколько букв а е к

import os

_path__to_data = '26 aprel/data/'

files = sorted(os.listdir(_path__to_data))

for file in files:
    with open(_path__to_data+file) as f:
        for line in f:
            text = str(line.strip() )
            count_a = 0
            count_e = 0
            count_k = 0
            for letter in line:
                if letter == "а" or letter == "А":
                    count_a += 1
                if letter == "е" or letter == "Е":
                    count_e += 1
                if letter == "к" or letter == "К":
                    count_k += 1
    print(f'В {_path__to_data+file} файле буква "а" встречается {count_a} раз')
    print(f'В {_path__to_data+file} "e" встречается {count_e} раз')
    print(f'В {_path__to_data+file} "к" встречается {count_k} раз \n')

