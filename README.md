# Comments App

A simple Express.js web application for managing comments with full CRUD (Create, Read, Update, Delete) operations.

## Features

- 📝 Create new comments
- 👀 View all comments
- 🔍 View individual comments
- ✏️ Edit existing comments
- 🗑️ Delete comments
- 🎨 Clean and responsive UI

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating engine, HTML, CSS
- **Dependencies**: 
  - Express.js for web framework
  - EJS for templating
  - UUID for unique ID generation
  - Nodemon for development

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

3. Start the application:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

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
3. Fill in the user name and comment text
4. Submit the form

### Viewing Comments

- Visit `/data` to see all comments
- Click on any comment to view it individually

### Editing Comments

1. Go to the comments list (`/data`)
2. Click "Edit" on any comment
3. Modify the user name or comment text
4. Submit the changes

### Deleting Comments

1. Go to the comments list (`/data`)
2. Click "Delete" on any comment
3. The comment will be removed immediately

## Project Structure

```
CommentsApp/
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
├── public/             # Static assets
│   └── css/           # Stylesheets
├── views/             # EJS templates
│   ├── index.ejs      # Home page
│   ├── data.ejs       # Comments list
│   ├── new.ejs        # New comment form
│   ├── show.ejs       # Individual comment view
│   └── edit.ejs       # Edit comment form
└── README.md          # This file
```

## Development

To run the application in development mode with auto-restart:

```bash
npm run dev
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

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Comment threading/replies
- [ ] Search functionality
- [ ] Comment validation
- [ ] API endpoints for frontend frameworks
