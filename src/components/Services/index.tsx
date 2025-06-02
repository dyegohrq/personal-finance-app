import axios from "axios";

export const api = axios.create({
    baseURL: 'https://data-personal-finance-app.vercel.app/data.json'
})