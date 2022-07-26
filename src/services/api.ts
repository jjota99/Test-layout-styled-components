import axios from 'axios';
import { createServer } from "miragejs";

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/analytics', () => {
            return [
                {
                    diabeticos: 60,
                    hipertensos: 58,
                    quadrimestre: 'Q1/2021',
                },
                {
                    diabeticos: 125,
                    hipertensos: 111,
                    quadrimestre: 'Q2/2021',
                },
                {
                    diabeticos: 91,
                    hipertensos: 73,
                    quadrimestre: 'Q3/2021',
                }
            ]
        })
    }
})