const mongoose = require('mongoose');
require('dotenv').config();
const uriDb = process.env.URI_DB;

const db = mongoose.connect(uriDb, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});
