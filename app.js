const express = require('express');
	const mongoos = require('mongoose');
	const bodyParser = require('body-parser')
	const path = require('path');
	const postRouter = require('./routs/post');
	const keys = require('./keys');
	
	const port = process.env.PORT || 5000;
	const clientPath = path.join(__dirname, 'client');
	
	mongoos.connect(keys.mongoURI, { useNewUrlParser: true })
	    .then(() => console.log('MongoDB connected'))
	    .catch(err => console.error(err));
	
	const app = express();
	app.use(bodyParser.json());
	app.use('/api/post', postRouter);
	app.use(express.static(clientPath));
	app.listen(port,() => {
	    console.log(`Server has been started on port ${port}`)
	    });

