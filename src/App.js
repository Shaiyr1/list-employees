import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import employee from "./Components/icons/employee.png"
import hipster from './Components/icons/hipster.png'
import hipsterTwo from './Components/icons/hipsterTwo.png'
import manTwo from './Components/icons/manTwo.png'
import man from './Components/icons/man.png'
import person from './Components/icons/person.png'


function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees')
    return saved ? JSON.parse(saved) :
      [
        {
          id: 1,
          name: "Adilet",
          sureName: "Baktyiarov",
          age: 24,
          isCompleted: false,
          icon: employee
        },
        {
          id: 2,
          name: "BekMurat",
          sureName: "Saktanov",
          age: 23,
          isCompleted: false,
          icon: hipster
        },
        {
          id: 3,
          name: "Sultan",
          sureName: "Adylbekov",
          age: 23,
          isCompleted: false,
          icon: hipsterTwo
        },
        {
          id: 4,
          name: "Bek",
          sureName: "Alimov",
          age: 25,
          isCompleted: false,
          icon: manTwo
        },
        {
          id: 5,
          name: "Manas",
          sureName: "Bekmatov",
          age: 28,
          isCompleted: false,
          icon: man
        },
        {
          id: 6,
          name: "Aktan",
          sureName: "Duishobaev",
          age: 27,
          isCompleted: false,
          icon: person
        }
      ]
    })
    
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() =>{
      localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees])



return (
  <div className="App" id='root'>
    <Header />
    <Main employees={employees} setEmployees={setEmployees} selectAll={selectAll} setSelectAll={setSelectAll} />
    <Footer employees={employees} />
  </div>
);
}

export default App;