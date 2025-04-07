const express = require('express');
const mongoose = require('mongoose');
const app = express();
//http://localhost:8082/students

const PORT = process.env.PORT || 8082; // Set the port to listen on

// Middleware to parse JSON requests
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/user_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected successfully.");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});
//create schema
const schemaStudent = new mongoose.Schema({
    name:{type:String},
    college:{type:String},
    marks: {type: Number}
},
{
    collection:"student_collection"
}
);
//create model for schema
const student=mongoose.model('student',schemaStudent)


app.get("/students", (request, response) => {
    student.find({})
        .then(students => {
            console.log("Retrieved students:", students); // Log the retrieved data
            response.status(200).json(students);
        })
        .catch(error => {
            response.status(500).json({ message: "Error fetching student data", error });
        });
});

app.get('/home', (request, response) => {
    response.send('home');
});

app.post('/submit', (request, response) => {
    const newStudent = new student({
        name: request.body.name,
        college: request.body.college,
        marks: request.body.marks
    });

    newStudent.save()
        .then(() => {
            response.status(201).json({ message: "Student added successfully!" });
        })
        .catch(error => {
            response.status(500).json({ message: "Error adding student data", error });
        });
});

app.put('/update', (request, response) => {
    response.send('update');
});

app.delete('/delete', (request, response) => {
    response.send('delete');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
