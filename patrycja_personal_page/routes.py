from flask import Flask, render_template
from patrycja_personal_page import app 

@app.route('/')
def index():
    # Render index(home) page as landing page
    return render_template('index.html')