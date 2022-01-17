const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");
const methodOverride = require("method-override");
const { urlencoded } = require("express");

const app = express();
dotenv.config();

//-----------Middlewares----------//

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(
  session({
    secret: "Piggy_Secret",
    resave: false,
    saveUninitialized: false,
  })
);

//----------Settings-------------//
app.set("port", process.env.PORT || 6000);

//------------Server-------------//
app.listen(app.get("port"));
console.log(
  "Server is ready on port",
  app.get("port"),
  "have a nice coding :)"
);
//-----------Routes ------------//

const auth = require("./routes/auth");
const user = require("./routes/user");
const category = require("./routes/category");
const operationType = require("./routes/operationType");
const operation = require("./routes/operation");

app.use("/", auth);
app.use("/api/user", user);
app.use("/api/category", category);
app.use("/api/operationType", operationType);
app.use("/api/operation", operation);
//------------404 and forward Error-----------//

app.use((req, res, next) => {
  res.status(404).render("404-page");
  next();
});
