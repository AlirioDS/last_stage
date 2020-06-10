import React, { Component } from 'react'
import MonthList from '../components/MonthList'

import Firebase from '../config'

class Home extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
      loading: false
    }
    this.database = Firebase.database().ref("/")
  }

  componentDidMount() {
    this.setState({ loading: true })

    this.getData()
  }

  getData() {
    this.database.on('value', snap => {
      if (snap.exists()) {
        this.setState({ 
          data: this.sortedData(snap.val()),
          loading: false
        })
      }
    })
  }

  sortedData(snap) {
      
    var groups = snap.reduce((r, o) => {
      let m = parseInt(o['Mes'].split("-")[0]);
      (r[m])? r[m].data.push(o) : r[m] = { month: m, data: [o] }
      return r
    }, {})
  
    var result = Object.keys(groups).map(function(k){ return groups[k]; });
    return result
  }

  render() {
    return (
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-sm text-center">
            <h1>Last Stage</h1>
          </div>
        </div>
        <div className="row">
          < MonthList lists={this.state.data} loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}

export default Home
