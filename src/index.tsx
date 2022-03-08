import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

createServer({

  models: {
    transition: Model,
  },

  routes(){
    this.namespace = 'api'
    
    this.get('/transitions', () => {
      return this.schema.all('transitions')
    })

    this.post('/transitions', (scherma, request) => { 
      const data = JSON.parse(request.requestBody)

      return scherma.create('transaction', data)
    })
  }
})





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
