from bs4 import BeautifulSoup
import requests
import json

def scrape():
    url = "https://www.scoresandodds.com/nfl/players"
    page = requests.get(url).text 
    doc = BeautifulSoup(page, "html.parser") 

    all_players = doc.find(class_ = "container").find_all(class_="list-item")
    player_list = []

    for player in all_players:
        position = player.find("span").string
        name = player.find("a").string
        player_list.append({name : position})

    return player_list
