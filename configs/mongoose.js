const mongoose = require('mongoose');

const url = 'mongodb+srv://abhishekprajapat423:7di1J01FwYKj42vu@cluster0.zwgezel.mongodb.net/'

async function mongo() {
        await mongoose.connect(url);
  }
mongo().then(()=>{
    console.log('Connected to mongoDB')
}).catch((error)=>{
    console.log('Unable to connect to mongoDB', error)
})
