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
6. Open your browser and navigate to http://localhost:3000/login

- Important Notes
   - To play music, users must input their own Spotify API keys and have a Spotify Premium subscription.
   - The player functionality is restricted by Spotify and requires a Premium subscription.
   - Ensure that the Musixmatch API key is correctly set up to fetch song lyrics.
    
- Contributing
  
     - Feel free to contribute by opening issues or submitting pull requests.

- Screenshots

![image](https://github.com/user-attachments/assets/86b89013-9f18-465b-b08e-b37f9f7dc20c)

![image](https://github.com/user-attachments/assets/f36d9c60-7624-44dc-bccd-55132dc3882b)

![image](https://github.com/user-attachments/assets/bf1cdd0e-d614-4529-ab3d-e26b46195b12)

![image](https://github.com/user-attachments/assets/2294d323-421c-4733-8978-e5e0a8781071)

![image](https://github.com/user-attachments/assets/cd2e431c-4b83-4b99-8799-d13ec51fbe22)

![image](https://github.com/user-attachments/assets/40767484-9c9b-417e-a7ae-3ce60a69ea6a)


- License
  
     - This project is licensed under the Apache 2.0 License.
  
-------------------------------------------------------------------------------------------------------------------------------

*Spotify Clone*


Этот проект представляет собой клон Spotify, созданный с использованием Node.js, Express.js и EJS для фронтенда. Он использует Spotify for Developers и Musixmatch API для предоставления потокового воспроизведения музыки и текстов песен. Приложение имитирует реальный Spotify, предлагая различные функции, такие как воспроизведение музыки, альбомов, плейлистов, поиск и фильтрация по категориям.


- Функции

   - Воспроизведение музыки, альбомов и плейлистов
   - Поиск музыки, альбомов, плейлистов и исполнителей
   - Фильтрация результатов поиска по категориям: песни, альбомы, плейлисты, исполнители
   - Детальные страницы для каждого исполнителя, альбома и категории
   - Полностью адаптивный дизайн
   - Страница входа
   - Секция 'Мой профиль'
   - Список последних воспроизведенных песен

- Предварительные требования
 
  - Node.js
  - Express.js
  - EJS
  - Учетная запись разработчика Spotify с премиум подпиской
  - Ключ API Musixmatch

- Установка
   - Клонируйте репозиторий:
      - git clone https://github.com/yourusername/spotify-clone.git
      - cd spotify-clone
    - Установите зависимости:
        - Получите ключи API:
            - Spotify for Developers (Требуется премиум подписка)
            - Musixmatch API
    - Настройте переменные окружения:
        - Создайте файл .env в корневом каталоге и добавьте свои ключи API:
            - CLIENT_ID=ваш_spotify_client_id
            - CLIENT_SECRET=ваш_spotify_client_secret
            - MUSIXMATCH_API_KEY=ваш_musixmatch_api_key
            - REDIRECT_URI = 'http://localhost:3000/auth/callback'
            - SCOPE = 'user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-follow-read user-top-read user-read-recently-played user-read-email user-read-private'
      - Запустите приложение:
            - npm run dev
      - Откройте браузер и перейдите по адресу http://localhost:3000/login
- Важные замечания
    - Чтобы воспроизводить музыку, пользователи должны ввести свои собственные ключи API Spotify и иметь премиум подписку Spotify.
    - Функциональность плеера ограничена Spotify и требует премиум подписки.
    - Убедитесь, что ключ API Musixmatch правильно настроен для получения текстов песен.
 
- Вклад
    - Вы можете вносить свой вклад, открывая проблемы или отправляя запросы на слияние.
 
- Скриншоты

![image](https://github.com/user-attachments/assets/86b89013-9f18-465b-b08e-b37f9f7dc20c)

![image](https://github.com/user-attachments/assets/f36d9c60-7624-44dc-bccd-55132dc3882b)

![image](https://github.com/user-attachments/assets/bf1cdd0e-d614-4529-ab3d-e26b46195b12)

![image](https://github.com/user-attachments/assets/2294d323-421c-4733-8978-e5e0a8781071)

![image](https://github.com/user-attachments/assets/cd2e431c-4b83-4b99-8799-d13ec51fbe22)

![image](https://github.com/user-attachments/assets/40767484-9c9b-417e-a7ae-3ce60a69ea6a)


- Лицензия
    - Этот проект лицензирован на условиях лицензии Apache 2.0.

