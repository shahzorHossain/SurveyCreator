const express = require("express");
//const passportConfig = require('./services/passport.js')
require("./models/Users");
require("./services/passport.js");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

//const authRoutes = require('./routes/authroute.js')
//authRoutes(app)

// app.get('/',(req,res) => {
//     res.send({ hi: 'buddy'});
// });

require("./routes/authroute.js")(app);
require("./routes/billingroutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
