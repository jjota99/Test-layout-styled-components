import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from "miragejs";
import App from './App';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);


