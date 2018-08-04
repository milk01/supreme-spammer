import requests
import time
import colorama
from colorama import init 
from colorama import Fore, Back
from termcolor import colored
init()


#variables
c = input('how many accounts do you want to make?: ') #how many accounts do you want to make
email = 'example@example.com'

supreme = colored('Supreme', 'white', 'on_red')

print('--------')
print('Making request to ' + supreme + '.')
print('--------')
time.sleep(1)

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
}

session = requests.Session()
url = 'https://register.supremenewyork.com/mailinglist_signup'

def main():
    data = {
        'email': email,
        }

    response = session.request("POST", url, data=data, headers=headers)
    #print(response.text)

print('Email sent (' + c + ')')

#while True:
for i in range(int(c)):
    time.sleep(0.1)
    main()

#watermark you can remove if you want
#it doesnt affect the script at all
time.sleep(1)
print('--------')
time.sleep(1)
print('made by @pupperpuppy')
time.sleep(1)
print('--------')    