from bs4 import BeautifulSoup
import requests
import re

url = "https://www.scoresandodds.com/nfl/players"
page = requests.get(url).text
doc = BeautifulSoup(page, "html.parser") 

all_players = doc.find(class_ = "container").find_all(class_="list-item")

for player in all_players:
    position = player.find("span").string
    name = player.find("a").string
    print(f"{name}, {position}")