const morgan = require('morgan'),
  cors = require('cors'),
  express = require('express'),
  app = express(),
  PORT = (process.env.PORT || 5004);

/*
  Settings
*/
const indexRouter = require('./routes/indexRouter');

/*
  Settings
*/
app.set("port", PORT);


/*
  Static files
*/
app.use('/public',express.static(__dirname + '/public/'));

/*
  Middlewares
*/
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
  Global variables
*/
app.use((req, res, next) => {
  next();
});

/*
  Routes
*/
app.use('/api/v1', indexRouter);

/*
  Server start
*/
app.listen(PORT, () => {
  console.log(`Server runing on: http://localhost:${PORT}`);
});

