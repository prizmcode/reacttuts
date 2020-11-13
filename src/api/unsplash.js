import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dq5wYbfu6MKNSAO3mXmkJ6I4kU0Ro4NBR4DdhbFnnKA'
    }
});