# Wanderlust 🌍

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to discover, book, and review unique places to stay around the world. The project demonstrates a complete CRUD (Create, Read, Update, Delete) workflow, user authentication, map integration, and cloud-based image storage.

## ✨ Key Features

  * **User Authentication:** Secure user registration and login functionality using Passport.js.
  * **Listings Management:** Authenticated users can create, edit, and delete their own listings.
  * **Image Uploads:** Image files are uploaded directly to the cloud using Cloudinary and Multer.
  * **Interactive Maps:** Each listing displays its location on an interactive map using MapLibre GL JS.
  * **Geocoding:** Converts location names into geographic coordinates (latitude, longitude) using the Geoapify API.
  * **Reviews and Ratings:** Users can leave reviews and ratings on listings.
  * **Responsive Design:** A clean and responsive UI built with Bootstrap.

## 🛠️ Technology Stack

### Backend

  * **Runtime:** [Node.js](https://nodejs.org/)
  * **Framework:** [Express.js](https://expressjs.com/)
  * **Database:** [MongoDB](https://www.mongodb.com/)
  * **ODM:** [Mongoose](https://mongoosejs.com/)
  * **Authentication:** [Passport.js](http://www.passportjs.org/) (`passport-local`, `passport-local-mongoose`)
  * **File Uploads:** [Cloudinary](https://cloudinary.com/), [Multer](https://github.com/expressjs/multer)
  * **Schema Validation:** [Joi](https://joi.dev/)
  * **Session Management:** [express-session](https://github.com/expressjs/session), [connect-flash](https://github.com/jaredhanson/connect-flash)

### Frontend

  * **Templating:** [EJS (Embedded JavaScript)](https://ejs.co/) & [EJS-Mate](https://github.com/JacksonTian/ejs-mate)
  * **CSS Framework:** [Bootstrap](https://getbootstrap.com/)
  * **Mapping Library:** [MapLibre GL JS](https://maplibre.org/)
  * **Icons & Fonts:** [Font Awesome](https://fontawesome.com/), [Google Fonts](https://fonts.google.com/)

### APIs & Services

  * **Cloudinary API:** For cloud-based image and video management.
  * **Geoapify Geocoding API:** For converting addresses into map coordinates.

-----

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

  * [Node.js](https://nodejs.org/en/download/) (v18.x or higher)
  * [MongoDB](https://www.mongodb.com/try/download/community) installed and running on your local machine.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/wanderlust.git
    cd wanderlust
    ```

2.  **Install npm packages:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of the project and add the following variables. You will need to get your own API keys from the respective services.

    ```
    # Cloudinary Credentials
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret

    # Geoapify API Key
    GEOAPIFY_API_KEY=your_geoapify_api_key

    # Session Secret
    SECRET=a_strong_secret_for_sessions
    ```

4.  **Initialize the Database:**

      * First, register at least one user in the application to get an `owner` ID.
      * Find the user's ID in your MongoDB `users` collection.
      * Open the `init/index.js` file and replace `"YOUR_USER_OBJECT_ID_HERE"` with the actual ID.
      * Run the initialization script from your terminal:
        ```bash
        node init/index.js
        ```

### Running the Application

Once the setup is complete, you can start the server:

```bash
node app.js
```

The application will be running at [http://localhost:8080](https://www.google.com/search?q=http://localhost:8080).
