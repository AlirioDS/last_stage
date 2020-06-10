import React from 'react'
import { Link } from 'react-router-dom'

function hiredOfTheMonth(list) {
  let month = list.month
  let hiredInMonth = []

  for (let worker of list.data) {
    if(parseInt(worker['Fecha de ingreso'].split("/")[1]) === month) {
      hiredInMonth.push(worker)
    } 
  }

  if (hiredInMonth.length != 0) {
    return (
      <React.Fragment>
        <h5 className="card-title">Contratado del Mes</h5>
          {hiredInMonth.map((workerHiredInMonth, index) => (  
            <p className="card-text" key={index}>{workerHiredInMonth['Nombre']}</p>
          ))}
      </React.Fragment>
    )
  }
}

function MonthList(props) {

  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

  if(props.loading) {
    return(
      <React.Fragment>
        <div className="col-md-12 col-sm-12 p-1">
          <div className="text-center">
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Cargando...
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {props.lists.map((list, i) => (
        <div className="col-sm-4" key={i}>
          <div className="card border-dark mb-3">
            <div className="card-header bg-transparent">{months[list.month]}</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Total Pagado del Mes</h5>
              <p className="card-text">{list.data.reduce((a, b) => +a + +b['Sueldo bruto'], 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " CLP" }</p>
              
              {hiredOfTheMonth(list)}

            </div>
            <div className="card-footer bg-transparent text-right">
              <Link className="btn btn-primary" 
              to={{ pathname: `/organization-chart/${i+1}`, state: { listworkers: list } }}>
                Organigrama
              </Link>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  )

}

export default MonthList
