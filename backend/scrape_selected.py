from bs4 import BeautifulSoup
import requests
import re
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

players = ["amari cooper", "brian thomas", "olave", "jameson williams", "jonathan taylor", "saquon", "hurts", "waddle"]

# input is an array that holds all the names we want to search
def scrape_selected(players):                                     
    url = "https://www.scoresandodds.com/nfl/players"
    homepage = requests.get(url).text
    homedoc = BeautifulSoup(homepage, "html.parser") 

    # first go into class = "container", which contains every player from every team offensive
    # find the search term, then back up and retreive the link, then we put out the next get request

    # go into the general container, and find a "link" from the name entered, if including any characters
    all_players = homedoc.find(class_ = "container")
    
    player_data= []                     # format of [{"name" : "xxxx", "stats" : []}, ....]
    
    for player in players:
        player_href = all_players.find("a", href=re.compile(player.replace(" ", "-"), re.IGNORECASE))

        # if there was at least 1 match
        if player_href:
            player_link = str(player_href).split("\"")[-2]
            # create new link to send request
            player_url = f"https://www.scoresandodds.com{player_link}"
            page = requests.get(player_url).text
            doc = BeautifulSoup(page, "html.parser")

            # get the table with data of the player
            stats_table = doc.find(class_="sticky")
            tbody = stats_table.find("tbody")
            trs = tbody.find_all("tr")

            # traverse data, unpack, and print for now
            print(player)
            player_stats = {"name" : player, "stats" : []}
            for tr in trs:
                tds = tr.find_all("td")
                cat, line, over, under = tds[:4]
                player_stats["stats"].append({
                    "category" : cat.string,
                    "line" : line.string,
                    "over" : over.string,
                    "under" : under.string,
                })
                print(cat.string, line.string, over.string, under.string)
                print()

            player_data.append(player_stats)
        
        else:
            print("Name entered not found")
        print()
        print()

    return player_data

@app.route('/api/scrape', methods=['POST'])
def scrape_api():
    players=request.json                                        # this will tie back into the react app, players is what the api awaits as the request
    scraped_data = scrape_selected(players)
    return jsonify(scraped_data)

if __name__ == "__main__":
    app.run(debug=True)



