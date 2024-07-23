*Spotify Clone*



This project is a Spotify clone built using Node.js, Express.js, and EJS for the frontend. It leverages the Spotify for Developers and Musixmatch API to provide music streaming and song lyrics. The application mimics the real Spotify, offering various features such as playing music, albums, playlists, searching, and filtering by categories.



- Features
  - Play music, albums, and playlists
  - Search for music, albums, playlists, and artists
  - Filter search results by categories: songs, albums, playlists, artists
  - Detailed pages for each artist, album, and category
  - Fully responsive design
  - Login page
  - 'My Profile' section
  - List of recently played songs

- Setup
   - Prerequisites
   - Node.js
   - Express.js
   - EJS
   - Spotify Developer account with a Premium subscription
   - Musixmatch API key
   - Installation

1. Clone the repository:
    - git clone https://github.com/yourusername/spotify-clone.git
    - cd spotify-clone
2. Install dependencies:
    - npm install
3. Obtain API keys:
    - Spotify for Developers (Requires Premium subscription) (https://developer.spotify.com/)
    - Musixmatch API (https://developer.musixmatch.com/)
4. Set up environment variables:
    - Create a .env file in the root directory and add your API keys:
      - CLIENT_ID= your_spotify_client_id
      - CLIENT_SECRET= your_spotify_client_secret
      - MUSIXMATCH_API_KEY= your_musixmatch_api_key
      - REDIRECT_URI = 'http://localhost:3000/auth/callback'
      - SCOPE = 'user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-follow-read user-top-read user-read-recently-played user-read-email user-read-private'
5. Start the application:
      - npm run dev
6. Open your browser and navigate to http://localhost:3000

- Important Notes
   - To play music, users must input their own Spotify API keys and have a Spotify Premium subscription.
   - The player functionality is restricted by Spotify and requires a Premium subscription.
   - Ensure that the Musixmatch API key is correctly set up to fetch song lyrics.
    
- Contributing
  
     - Feel free to contribute by opening issues or submitting pull requests.

- License
  
     - This project is licensed under the Apache 2.0 License.
  
-------------------------------------------------------------------------------------------------------------------------------
