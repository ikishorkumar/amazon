const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')(
	'Your Stripe Secret test Key '
);

// API

// App Config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello Kishor'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payemnt Request Recieved BOOM! dor this : ', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //sub units of the cureeency
		currency: 'usd',
	});
	// Ok -created
	response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// Listen Commands
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-11033/us-central1/api
