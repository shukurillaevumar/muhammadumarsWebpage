import { useState } from 'react';
import Header from './Components/Header';
import TableComp from './Components/TableComp';
import './styles/App.css';


const SmsApp = () => {
    const [students, setStudent] = useState(JSON.parse(localStorage.getItem("students")));

    localStorage.setItem("Student", JSON.stringify(students));

    function addStudent (user) {
        const updDB = [...students, user];
        localStorage.setItem("students", JSON.stringify(updDB));
        setStudent(JSON.parse(localStorage.getItem("students")));
    }

    function removeStudent (id) {
        setStudent(students.filter((student) => student.id !== id));
    }

    return (
        <div>
            <h1 className='brand'>Student Management App</h1>
            <div className='box'>
                <Header add={addStudent} students={students} />
                <TableComp students={students} remove={removeStudent}/>
            </div>
        </div>
    );
}

export default SmsApp;