const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel')

dotenv.config({ path: './config.env' });

mongoose.set('strictQuery', true);

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connections successful');
  });


  // READ FILES
  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

  // IMPORT DATA INTO DB

  const importData = async () => {
    try {
      await Tour.create(tours)
      console.log("Data successfuly Loaded!!")
      process.exit()
    } catch (error) {
      console.log(error)
    }
  }


  // DELETE DATA INTO DB

  const deleteData = async () => {
    try {
      await Tour.deleteMany()
      console.log("Data successfuly Deleted!! ")
      process.exit()
    } catch (error) {
      console.log(error)
    }
  }

  if(process.argv[2] === '--import') {
    importData()
  } else if (process.argv[2] === '--delete') {
    deleteData()
  }