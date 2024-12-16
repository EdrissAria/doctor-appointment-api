const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const app = express();
const PORT = 3333;

app.use(bodyParser.json());
app.use(cors())

const getDoctorsData = () => {
  try {
    const data = fs.readFileSync('doctors.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading doctors.json:', error);
    return [];
  }
};

app.get('/', (req,res)=>{
  res.json({hello: 'world'})
})

app.get('/api/doctors', (req, res) => {
  const doctors = getDoctorsData();
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const doctorId = parseInt(req.params.id, 10);
  const doctors = getDoctorsData();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({
      success: false,
      message: 'Doctor not found'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
