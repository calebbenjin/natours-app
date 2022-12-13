const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

mongoose.set('strictQuery', true);

const DB = process.env.DATABASE

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(con => {
  console.log('DB connections successful')
})

// 5) Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
