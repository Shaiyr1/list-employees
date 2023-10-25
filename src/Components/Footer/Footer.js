import React from 'react'
import './footer.scss'

function Footer({ employees }) {
  function getCompleted(employees) {
    const employeesCompleted = employees.filter((item) => item.isCompleted)
    return employeesCompleted.map((item)=> item.name).join(", ")
  }

  const completedName = getCompleted(employees)

  return (
    <div>
      <div className="container">
        <p className='footer__title'>
          <b>Пользователи:</b> {completedName}
        </p>        
      </div>

    </div>
  )
}

export default Footer
