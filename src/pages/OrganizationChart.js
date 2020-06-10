import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

const columns = [
  {
    name: 'Nombre',
    selector: 'Nombre',
    sortable: true
  },
  {
    name: 'ID',
    selector: 'ID',
    sortable: true
  },
  {
    name: 'Fecha de ingreso',
    selector: 'Fecha de ingreso',
    sortable: true
  },
  {
    name: 'Sueldo bruto',
    selector: 'Sueldo bruto',
    sortable: true
  },
  {
    name: 'División',
    selector: 'División',
    sortable: true
  },
  {
    name: 'Area',
    selector: 'Area',
    sortable: true
  },
  {
    name: 'Subarea',
    selector: 'Subarea',
    sortable: true
  },
  {
    name: 'ID Lider',
    selector: 'ID Lider',
    sortable: true
  },
  {
    name: 'Nivel Jerárquico',
    selector: 'Nivel Jerárquico',
    sortable: true
  }
]

class OrganizationChart extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Link className="btn btn-primary"to='/'>Inicio</Link>
          <DataTable 
            title="Last Stage"
            columns={columns}
            data={this.props.location.state.listworkers.data}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default OrganizationChart
