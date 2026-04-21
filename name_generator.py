# name_generator.py
import random
import sys

def generate_username(name_of_user):
    minimum_capital_letter = 2
    minimum_specia_char = 2
    minimum_digits = 2
    min_len_of_username = 8
    special_chars = ['@', '#', '$', '&', '_']

    username = ""
    name_of_user = "".join(name_of_user.split()).lower()
    minimum_char_from_name = min_len_of_username - minimum_digits - minimum_specia_char

    temp = 0
    for i in range(random.randint(minimum_char_from_name, len(name_of_user))):
        if temp < minimum_capital_letter:
            username += name_of_user[i].upper()
            temp += 1
        else:
            username += name_of_user[i]

    temp_list = []
    for i in range(minimum_digits):
        temp_list.append(str(random.randint(0, 9)))

    for i in range(minimum_specia_char):
        temp_list.append(special_chars[random.randint(0, len(special_chars) - 1)])

    random.shuffle(temp_list)
    username += "".join(temp_list)

    return username

def generate_unique_usernames(name_of_user, count=10):
    usernames = set()
    while len(usernames) < count:
        usernames.add(generate_username(name_of_user))
    return list(usernames)

if __name__ == "__main__":
    name = sys.argv[1] if len(sys.argv) > 1 else "John Doe"
    usernames = generate_unique_usernames(name, 10)

    for username in usernames:
        print(username)