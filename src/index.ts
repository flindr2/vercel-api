import express from "express";
import cors from "cors";
import "dotenv/config";
import connect from "./connect";
import bookRoutes from "./routes/bookRoutes";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

connect();

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
