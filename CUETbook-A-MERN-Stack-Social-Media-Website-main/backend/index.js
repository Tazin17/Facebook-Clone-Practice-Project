const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const connectDb = require('./config/db');
require('dotenv').config()
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');



const app = express()
app.use(express.json())
app.use(cookieParser())




connectDb()


//api route
app.use('/auth',authRoute)
app.use('/users',postRoute)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server listening on ${PORT}`))













// const express = require('express');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const connectDb = require('./config/db');
// require('dotenv').config();
// const authRoute = require('./routes/authRoute');

// const app = express();

// // Middlewares
// app.use(cors({ origin: '*', credentials: true })); // CORS FIX ✅
// app.use(express.json());
// app.use(cookieParser());


// connectDb()
// // Routes
// app.use('/auth', authRoute); // Ensure your auth routes are connected ✅

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
