import express, { json } from 'express';
import student from './routes/api/students';
import auth from './routes/api/auth';
import school from './routes/api/school';
import connectDB from './config/db';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(json());

app.get('/', (req, res) => {
  res.send('API running');
});

// Define routes
app.use('/api/students', student);
// app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/schools', school);
// app.use('/api/classes', require('./routes/api/classes'));
app.use('/api/auth', auth);

app.listen(PORT, () =>
  console.log(`Server is listening on a http://localhost:${PORT}`)
);
