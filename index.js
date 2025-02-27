import express from "express";
import * as path from "path";
import deviationsRoute from "./routes/deviations.js";
import favoritesRoute from "./routes/favorites.js";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

// join __dirname with views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Trafikatt",
    subtitle: "Res överallt som en katt",
  });
});

app.use("/deviations", deviationsRoute);
app.use("/favorites", favoritesRoute);

app.listen(PORT, () =>
  console.log(`✅ Listening on ${PORT} ➡ http://localhost:${PORT}`)
);
