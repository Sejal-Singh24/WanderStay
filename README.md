WanderStay

WanderStay is a full-stack travel and accommodation booking web application inspired by Airbnb. Users can explore listings, create their own stays, edit property details, and manage bookings through a clean and responsive interface.

Features

* User authentication and authorization
* Create, edit, and delete property listings
* Upload listing images
* Responsive UI with EJS templates
* Form validation and error handling
* MongoDB database integration
* RESTful routing
* Flash messages and session handling

Tech Stack

Frontend

* HTML
* CSS
* JavaScript
* EJS
* Bootstrap

Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

Authentication & Utilities

* Passport.js
* Express-session
* Connect-flash
* Joi Validation
* Method-override

Project Structure

```bash
WanderStay/
│
├── models/
├── routes/
├── views/
├── public/
│   ├── css/
│   └── js/
├── utils/
├── app.js
├── schema.js
├── package.json
└── README.md
```

Installation

Clone the repository:

```bash
git clone https://github.com/Sejal-Singh24/WanderStay.git
```

Move into the project folder:

```bash
cd WanderStay
```

Install dependencies:

```bash
npm install
```

Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
```

## Run the Project

Start the server:

```bash
node app.js
```

Or if using nodemon:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:8080
```

Screenshots

Add your project screenshots here.

Future Improvements

* Booking system
* Payment integration
* Maps and location search
* Reviews and ratings
* Wishlist functionality

Author

Sejal Singh

GitHub: [https://github.com/Sejal-Singh24](https://github.com/Sejal-Singh24)

Repository Link

[https://github.com/Sejal-Singh24/WanderStay](https://github.com/Sejal-Singh24/WanderStay)
