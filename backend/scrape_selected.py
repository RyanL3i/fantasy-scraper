from bs4 import BeautifulSoup
import requests
import re

search_term = input("What NFL Player's Odds? ")
url = "https://www.scoresandodds.com/nfl/players"
homepage = requests.get(url).text
homedoc = BeautifulSoup(homepage, "html.parser") 

# first go into class = "container", which contains every player from every team offensive
# find the search term, then back up and retreive the link, then we put out the next get request

# go into the general container, and find a "link" from the name entered, if including any characters
all_players = homedoc.find(class_ = "container")
player_href = all_players.find("a", href=re.compile(search_term.replace(" ", "-"), re.IGNORECASE))

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
    for tr in trs:
        tds = tr.find_all("td")
        cat, line, over, under = tds[:4]
        print(cat.string, line.string, over.string, under.string)
        print()

else:
    print("Name entered not found")



