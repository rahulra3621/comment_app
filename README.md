# Comments App

A full-stack Express.js web application for managing comments with complete CRUD (Create, Read, Update, Delete) operations. Built with MongoDB for persistent data storage and featuring a clean, responsive user interface.

## Features

- 📝 Create new comments with username and text
- 👀 View all comments in a organized list
- 🔍 View individual comments with detailed information
- ✏️ Edit existing comments
- 🗑️ Delete comments with confirmation
- 🎨 Clean and responsive UI with custom CSS
- 💾 Persistent data storage with MongoDB
- ⏰ Automatic timestamps for all comments
- ✅ Input validation and error handling

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating engine, HTML, CSS
- **Dependencies**: 
  - Express.js for web framework
  - Mongoose for MongoDB object modeling
  - EJS for templating
  - UUID for unique ID generation
  - Nodemon for development

## Prerequisites

- Node.js (version 14.0.0 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulra3621/CommentsApp.git
cd CommentsApp
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system:
```bash
# For Windows (if MongoDB is installed as a service)
net start MongoDB

# For macOS/Linux
mongod
```

4. Start the application:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Database Setup

The application uses MongoDB with the following schema:

```javascript
const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
}, { timestamps: true });
```

The database will be automatically created when you first run the application. The default database name is `commentApp`.

### Routes

- `GET /` - Home page
- `GET /data` - View all comments
- `GET /data/new` - Create new comment form
- `POST /data/new` - Submit new comment
- `GET /data/show/:id` - View specific comment
- `GET /data/edit/:id` - Edit comment form
- `POST /data/edit/:id` - Update comment
- `GET /data/delete/:id` - Delete comment

### Adding a Comment

1. Navigate to the home page
2. Click "Add New Comment" or go to `/data/new`
3. Fill in the username (required) and comment text
4. Submit the form
5. You'll be redirected to the comments list

### Viewing Comments

- Visit `/data` to see all comments in a list format
- Click on any comment to view it individually at `/data/show/:id`
- Each comment shows username, text, and creation/update timestamps

### Editing Comments

1. Go to the comments list (`/data`)
2. Click "Edit" on any comment
3. Modify the username or comment text
4. Submit the changes
5. You'll be redirected back to the comments list

### Deleting Comments

1. Go to the comments list (`/data`)
2. Click "Delete" on any comment
3. The comment will be permanently removed from the database
4. You'll be redirected back to the comments list

## Project Structure

```
CommentsApp/
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
├── public/             # Static assets
│   └── css/            # Stylesheets
|       ├── index.css   # Home Page Styling
|       ├── data.css    # Comments Page Styling
|       ├── new.css     # New Comment Form Page Styling
|       ├── show.css    # Individual Comment Page Styling
|       └── edit.css    # Edit Comment Page Styling
├── views/              # EJS templates
│   ├── index.ejs       # Home page
│   ├── data.ejs        # Comments list
│   ├── new.ejs         # New comment form
│   ├── show.ejs        # Individual comment view
│   └── edit.ejs        # Edit comment form
└── README.md           # This file
```

## Development

To run the application in development mode with auto-restart:

```bash
npm run dev
```

This will start the server with nodemon, which automatically restarts the server when you make changes to the code.

## Environment Variables

The application uses the following environment variables:

- `PORT`: Server port (default: 3000)
- MongoDB connection string (default: `mongodb://localhost:27017/commentApp`)

To use a different MongoDB connection string, modify the `uri` variable in `app.js`:

```javascript
const uri = 'mongodb://localhost:27017/commentApp';
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

**Rahul Rajput**

## API Endpoints

The application provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/data` | Get all comments |
| GET | `/data/new` | New comment form |
| POST | `/data/new` | Create new comment |
| GET | `/data/show/:id` | Get specific comment |
| GET | `/data/edit/:id` | Edit comment form |
| POST | `/data/edit/:id` | Update comment |
| GET | `/data/delete/:id` | Delete comment |

## Error Handling

The application includes basic error handling:

- Username validation (required field)
- MongoDB connection error handling
- 404 error for non-existent comments
- Form validation with error messages

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Comment threading/replies system
- [ ] Advanced search and filtering
- [ ] Comment validation with more robust rules