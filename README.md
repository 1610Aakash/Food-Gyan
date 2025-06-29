🍽️ Food Gyan
Food Gyan is a full-stack web application where users can register/login and manage their personal recipes. Each recipe includes nutritional information like calories, protein, and allergies.

🧰 Tech Stack
Layer	Technology
Frontend	Angular (Standalone Components)
Backend	Node.js + Express.js
Database	Neo4j (Graph Database)
Auth	JWT (JSON Web Tokens)

🚀 Features
User Registration & Login with JWT

Authenticated Recipe CRUD (Create, Read, Update, Delete)

Recipes stored per user

Neo4j Graph DB integration

Responsive UI using Angular

🧾 Prerequisites
Before running the project, make sure you have:

Node.js (v16+ recommended)

npm (comes with Node)

Neo4j Desktop or Aura DB

Angular CLI installed globally:

bash
Copy
Edit
npm install -g @angular/cli
📦 Folder Structure
bash
Copy
Edit
Food-Gyan/
│
├── Backend/         # Express.js + Neo4j backend
├── Frontend/        # Angular frontend app
└── README.md
⚙️ Backend Setup (Node.js + Neo4j)
Open terminal and go to the backend folder:

bash
Copy
Edit
cd Backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

env
Copy
Edit
PORT=5000
NEO4J_URI=neo4j://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=your_neo4j_password
JWT_SECRET=your_jwt_secret_key
Start your Neo4j database (via Neo4j Desktop or other setup)

Start the backend server:

bash
Copy
Edit
npm start
✅ You should see: ✅ Server running on port 5000

🖥️ Frontend Setup (Angular)
Open a new terminal and navigate to the frontend folder:

bash
Copy
Edit
cd Frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the Angular development server:

bash
Copy
Edit
ng serve
Visit the app in your browser at:

arduino
Copy
Edit
http://localhost:4200
🔐 Authentication
On successful registration, a JWT token is stored in localStorage.

Login persists the session until logout.

Navbar hides login/register once logged in.

Recipes are linked per user (via JWT token).

🧪 Testing
To test the backend APIs, you can use:

Postman

Curl

Frontend app's built-in forms

📬 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login with email/pass
GET	/api/recipes/:email	Get all recipes for a user
POST	/api/recipes	Add new recipe
DELETE	/api/recipes/:id	Delete a recipe

✨ Future Improvements
Edit recipe functionality on backend

Image upload for recipes

Filter/search functionality

Nutrition API integration
