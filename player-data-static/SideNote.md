Has backend functionality using Render, using flask to handle requests and calls
However, free tier of render is slow! Makes loading the auto-complete way too slow

Current solution:
Static html page with /data.json storing all players url
Use autofill from there instead!
To update:
    rerun scrape_all, as that will rewrite the file data.json with updated data
    navigate into the player-data-static and "firebase deploy"
