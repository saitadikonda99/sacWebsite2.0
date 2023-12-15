const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

// imports start here

// middleware
const verifyJWT = require('./middleware/verifyJWT')
const verifyRoles = require('./middleware/verifyRoles')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')

// auth routes
const Login = require('./routes/auth/login.Route')
const Refresh = require('./routes/auth/refresh.Route')
const Logout = require('./routes/auth/logout.Route')
const Forgot = require('./routes/auth/forgot.Route')
const Reset = require('./routes/auth/reset.Route')


// normal routes
const Events = require('./routes/events/event.Route')
const Upload = require('./routes/attendance/upload.Route')
const Attendance = require('./routes/attendance/attend.Route')


// cors 
app.use(cors(corsOptions))
app.use(credentials)

// cookie 
app.use(cookieParser());

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes start here
app.use('/login', Login)
app.use('/refresh', Refresh)
app.use('/logout', Logout)
app.use('/forgot', Forgot)
app.use('/reset', Reset)


// normal routes 
app.use('/events', Events)
app.use('/upload', Upload)
app.use('/attendance', Attendance)

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align:center"> SAC Server running</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})