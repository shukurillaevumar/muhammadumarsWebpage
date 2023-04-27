import { useState } from 'react';
import Header from './Components/Header';
import TableComp from './Components/TableComp';
import './styles/App.css';


const SmsApp = () => {
  // localStorage.setItem(
  //   "students",
  //   JSON.stringify([
  //     {
  //       id: "8a161aa2-d7ab-4e6c-a68c-3afd9da83550",
  //       name: "Umid",
  //       classNum: 3,
  //       phone: "+998-90-039-39-88",
  //       birthDate: "06.05.1995",
  //     },
  //     {
  //       id: "1db84a8c-e8db-4fdc-aed5-e15cf41d61ab	",
  //       name: "Ann",
  //       classNum: 3,
  //       phone: "+998-90-039-39-88",
  //       birthDate: "06.05.1995",
  //     },
  //     {
  //       id: "e7c86ea0-b47b-40d3-a104-da57d09b2bb5	  ",
  //       name: "Umar",
  //       classNum: 3,
  //       phone: "+998-90-039-39-88",
  //       birthDate: "06.05.1995",
  //     },
  //   ])
  // );
  if(!JSON.parse(localStorage.getItem("students"))){
    localStorage.setItem(
          "students",
          JSON.stringify([]));
  } 

  const [students, setStudent] = useState(JSON.parse(localStorage.getItem("students")));

    function addStudent (user) {
        const updDB = [...students, user];
        localStorage.setItem("students", JSON.stringify(updDB));
        setStudent(JSON.parse(localStorage.getItem("students")));
    }

    function removeStudent (id) {
        const updStds = students.filter((student) => student.id !== id);
        localStorage.setItem("students", JSON.stringify(updStds));
        setStudent(updStds);
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