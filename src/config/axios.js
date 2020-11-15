import axios from 'axios';
const instance = axios.create({
	baseURL: 'http://localhost:5001/clone-11033/us-central1/api', // THE API (cloud function ) URl
});
export default instance;
