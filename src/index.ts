import express from 'express';
import 'dotenv/config'
import connect from './connect';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
const port = 3000;

connect();

app.use("/api/", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

