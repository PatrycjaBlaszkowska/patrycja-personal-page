import os
from flask import Flask

# Load environment variables, if available
if os.path.exists("env.py"):
    import env

# Initialize Flask app
app = Flask(__name__)

# Import routes from routes.py
from patrycja_personal_page import routes  # noqa: E402
