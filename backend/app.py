from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Setup logging
logging.basicConfig(level=logging.INFO)

# Configure your MySQL connection
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',  # Set your MySQL root password if any
    'database': 'snapshare'
}

def get_db():
    return mysql.connector.connect(**db_config)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    app.logger.info(f"[Signup] Received: username={username}")
    if not username or not password:
        app.logger.warning("[Signup] Missing username or password")
        return jsonify({'success': False, 'message': 'Missing username or password'}), 400

    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM users WHERE username=%s", (username,))
        if cursor.fetchone():
            app.logger.info(f"[Signup] Username already exists: {username}")
            cursor.close()
            conn.close()
            return jsonify({'success': False, 'message': 'Username already exists'}), 409

        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
        conn.commit()
        app.logger.info(f"[Signup] User registered: {username}")
        cursor.close()
        conn.close()
        return jsonify({'success': True, 'message': 'User registered successfully'})
    except Exception as e:
        app.logger.error(f"[Signup] Exception: {e}")
        return jsonify({'success': False, 'message': 'Server error'}), 500

@app.route('/login', methods=['POST'])
def login():
    app.logger.info("Login endpoint hit")
    data = request.json
    username = data.get('username')
    password = data.get('password')
    app.logger.info(f"[Login] Received: username={username}")
    if not username or not password:
        app.logger.warning("[Login] Missing username or password")
        return jsonify({'success': False, 'message': 'Missing username or password'}), 400

    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM users WHERE username=%s AND password=%s", (username, password))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        if user:
            app.logger.info(f"[Login] Login successful: {username}")
            return jsonify({'success': True, 'message': 'Login successful'})
        else:
            app.logger.info(f"[Login] Invalid credentials for: {username}")
            return jsonify({'success': False, 'message': 'Invalid credentials'}), 401
    except Exception as e:
        app.logger.error(f"[Login] Exception: {e}")
        return jsonify({'success': False, 'message': 'Server error'}), 500

@app.route('/', methods=['GET'])
def index():
    return "SnapShare backend is running!", 200

if __name__ == '__main__':
    app.run(debug=True)
