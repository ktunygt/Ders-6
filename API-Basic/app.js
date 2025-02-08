const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./data/db");
const errerCatcher = require("./middlewares/error-catcher");
const logger = require("./helpers/logger");

app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE"
}));

app.use(express.json());

require("./models/user");
require("./models/blog");
require("./models/log");

(async () => {
    await sequelize.sync({ alter: true });
})();

const routes = require("./restAPI/index");
app.use(routes);

const unknownRoute = require("./restAPI/home/unknownRoute/index");
app.use(unknownRoute);

app.listen(4000, () => {
    // console.log("API çalışmakta");
    logger.info("API çalışmakta", { code: 1 });
});

app.use(errerCatcher);
