import json
import logging
from flask import Flask, render_template, send_from_directory, request

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home_page():
    logging.info("This is the blank path::%s", request.path)
    logging.info("This is the blank form::%s", request.form)
    messages = {
        "company_name": "YourCompanyName",  # Replace with actual company name
        "type": "YourType"  # Replace with actual type
    }
    return render_template('index.html', messages=messages)

# Add a route to serve images
@app.route('/static/react/static/media/<path:path>', methods=['GET'])
def send_media(path):
    return send_from_directory('/static/react/static/media', path)

if __name__ == '__main__':
    app.run(port=5051, host='localhost', debug=True, use_debugger=True, use_reloader=True)
