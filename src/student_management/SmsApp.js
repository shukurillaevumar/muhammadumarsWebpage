import { useState } from 'react';
import Header from './Components/Header';
import TableComp from './Components/TableComp';
import './styles/App.css';


const SmsApp = (id) => {
    const [students, setStudent] = useState([
        {id: 1, name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"},
        {id: 2, name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"},
        {id: 3, name: "Muhammadumar", classNum: 3, phone: "998 97 006 96 56", birthDate: "27.04.2008"}
    ]);

    function addStudent (user) {
        setStudent((prev) => {
            return [...prev, user]
        })
        
    }

    function removeStudent () {
        console.log(`Student ${id} is removed`)
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