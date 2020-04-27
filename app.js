const http = require('http'),
			 express = require('express'),
			 constants = require('./config/constants'),
			 cors = require('cors');

const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('COVID-19 API for Australian data'))
app.use('/api', express.static('api') , function(req, res){
    // Optional 404 handler
    res.status(404);
    res.json({error:{code:404}})
});

app.listen(constants.PORT, () => console.log(`Listening to ${constants.PORT} ....`));