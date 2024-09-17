from flask import Flask, jsonify
import scrape_all_players
from flask_cors import CORS

# flask allows us to handle web servers and apis
# handles http requets/responses, serve data to web apps

app = Flask(__name__)           # app is the Flask application, name tells Flask where app located
CORS(app)                       # enables CORS, allowing other domains to access API

@app.route('/api/players', methods=['GET'])         # when a client accesses the url path, function will be executed
# the route will only respond to GET requests!
# react app must make a GET request!

def get_players():                                 # function to be triggered to when "get" send
    data = scrape_all_players.scrape()              # data is returned from scrape function
    return jsonify(data)                            # turn the data into json format!


@app.route('/api/run-scraper', methods=['POST'])        # when accessing at the url, POSTs a request to run scraper!
def run_scraper():
    # Run the scraper
    scrape_all_players.scrape()
    return jsonify({"status": "scraper run successfully"}), 200

if __name__ == '__main__':                      # runs only if the "main" to run is "name" (defined above)
    app.run(debug=True, port=5002)
