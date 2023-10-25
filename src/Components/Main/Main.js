import React, { useEffect } from 'react'
import "./main.scss"




function Main({ employees, setEmployees, selectAll, setSelectAll }) {
    const completed = (id) => {
        const update = employees.map((item)=>{
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                };
            } else {
                return item
            }
        })
        setEmployees(update)
    }

    useEffect(() => {
        const allComplite = employees.every((item) => item.isCompleted)
        setSelectAll(allComplite)
    }, [employees, setSelectAll]);

    const completedAll = () => {
        const updatedEmployees = employees.map((item) => ({
          ...item,
          isCompleted: !selectAll,
        }));

        setEmployees(updatedEmployees);
        setSelectAll(!selectAll);
      }
      



    return (
        <div>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SureName</th>
                            <th>Age</th>
                            <th>
                                <label>
                                    <input 
                                    checked={selectAll}
                                    onChange={()=>{
                                        completedAll()
                                    }} type="checkbox"
                                    />
                                    <span>{employees.some((item) => !item.isCompleted) ? "Выделить всё" : "Снять выбор" }</span>
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((item, idx) => (
                            <tr key={idx} className={`table__tbody_tr ${item.isCompleted ? "completed" : ""}`}>
                                <td className='table__tbody_tr-tdImg'>
                                    <img className='table__tbody_tr-img' src={item.icon} alt={item.name} /> {item.name}
                                </td>
                                <td>{item.sureName}</td>
                                <td>{item.age}</td>
                                <td className='table__tbody_tr-td'>
                                    <label>
                                        <input 
                                            checked={item.isCompleted}
                                            onChange={()=>{
                                            completed(item.id)
                                            }} type="checkbox" 
                                        />      
                                        <span></span>                                         
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>                
            </div>

        </div>
    )
}

export default Main