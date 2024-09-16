import 'dotenv/config'
import express from "express";
import cors from "cors";
import connect from "./connect";
import bookRoutes from "./routes/bookRoutes";

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/", bookRoutes);

export default app;
