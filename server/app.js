require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const multer = require('multer');

const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const errorMiddleware = require("./middleware/error-middleware");
const requestLogMiddleware = require("./middleware/request-logger");

const app = express();
const swaggerDoc = YAML.load(path.join(__dirname, "./docs/doc.yaml"));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(requestLogMiddleware);

const DIR = './public/personImages';

app.use("/favicon.ico", (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routers
const countryRouter = require("./modules/countries/country.router");
const userRouter = require("./modules/users/user.router");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

app.use(express.static(path.resolve(__dirname, "..")));
app.use(multer({storage:storage, fileFilter: fileFilter}).single("filedata"));
app.use("/countries", countryRouter);
app.use("/api/user", userRouter);

app.use((req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).send(ReasonPhrases.NOT_IMPLEMENTED);
});

app.use(errorMiddleware);

module.exports = app;
