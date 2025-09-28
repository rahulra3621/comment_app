const express = require('express')
const app = express()
const path = require('path')
// const moment = require('moment-timezone');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/commentApp';

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error Connecting to MongoDB', err));

// Schema

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
}, { timestamps: true });

// Model
const commentModel = mongoose.model('comment', commentSchema);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// let comments = [
//     {
//         id: uuid(),
//         time: new Date(),
//         user: "Rahul",
//         text: "Comment jdinrrjf",
//     },
//     {
//         id: uuid(),
//         time: new Date(),
//         user: "Himank",
//         text: "Comment  cgyefdyuhwe ytfgweghcveufbc",
//     },
// ];



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/data', async (req, res) => {
    const comments = await commentModel.find();
    res.render('data', { comments });
})

app.get('/data/new', (req, res) => {
    res.render('new', err = null)
})

app.post('/data/new', async (req, res) => {
    const { username, text } = req.body;
    if (!username) {
        res.render('new', { err: 'Username is required !!!' });
    }
    const newComment = await commentModel.create({
        username: username,
        text: text,
    })
    console.log('Comment Added: ', newComment)
    // return res.status(201).json({msg: 'success'})
    // comments.push({ id: uuid(), time: new Date(), user: user, text: text });
    res.redirect('/data')
})

app.get('/data/show/:id', async (req, res) => {
    const { id } = req.params;
    const comment = await commentModel.findById(id);
    if (!comment) return res.status(404).json({ msg: 'Comment not Found!' });

    // const comment = comments.find((x) => x.id === (id))
    res.render('show', { comment })
})

app.get('/data/edit/:id', async (req, res) => {
    const { id } = req.params;
    const comment = await commentModel.findById(id);
    // const comment = comments.find((x) => x.id === (id))
    res.render('edit', { comment }, err = null)
})
app.post('/data/edit/:id', async (req, res) => {
    const { id } = req.params;
    // const comment = await commentModel.findById(id);
    const { username, text } = req.body;
    if (!username) {
        // res.render('edit',{ err: 'Username is required !!!' });
        res.redirect(`/data/edit/${id}`);
    }
    else {
        updateComment = { username: username, text: text }
        const commentUpdated = await commentModel.findByIdAndUpdate(
            id,
            updateComment,
        )
        console.log('Updated Comment: ', commentUpdated);
        // comments.find((x) => x.id === (id)).user = user;
        // comments.find((x) => x.id === (id)).text = text;
        // comments.find((x) => x.id === (id)).time = new Date();
        res.redirect('/data')
    }
})

app.get('/data/delete/:id', async (req, res) => {
    const { id } = req.params;
    const deleted = await commentModel.findByIdAndDelete(id);
    console.log('Deleted Comment:', deleted);
    // comments = comments.filter((comment) => comment.id !== id);
    res.redirect('/data');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})