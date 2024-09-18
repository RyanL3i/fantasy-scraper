from bs4 import BeautifulSoup
import requests
import json
import os

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

    data_file_path = os.path.join("..", "player-data-static", "data.json")

    # Write the data to the JSON file
    with open(data_file_path, "w") as file:
        json.dump(player_list, file, indent=4)              # .dump takes 3 params (content to be dumped, file in write mode, indent for readability)
    print("written")
    return player_list

if __name__ == "__main__":
    scrape()
