import React from 'react';
import { connect } from 'react-redux'
import { selectKoma } from '../actions/selected_koma.jsx'
import { moveKoma } from '../actions/komas.jsx'

var Ban = React.createClass({
  getGrids: function() {
    var trs = []
    for (let rows = 0; rows < 9; rows++) {
      var tds = []
      for (let cols = 0; cols < 9; cols++) {
        let koma = this.props.koma_map[rows][cols]
        tds.push(this.komaToGrid(koma, cols, rows))
      }

      trs[rows] = <tr key={rows}>{tds}</tr>
    }
    return trs
  },
  komaToGrid: function(koma, cols, rows) {
    return <td key={cols} onClick={this.handleGridClick(koma, cols, rows)}>
      {koma? koma.id : ''}
    </td>
  },
  handleGridClick: function(koma, x, y) {
    switch (this.props.mode) {
      case 'selected_koma':
        return () => {
          this.props.moveKoma(this.props.selected_koma, x, y);
        }
        break
      default:
        if (koma) {
          return () => this.props.selectKoma(koma.id);
        }
    }
  },
  render: function() {
  
    return(
      <table id='ban'>
        <tbody>
          {this.getGrids()}
        </tbody>
      </table>
    )
  }
})


const stateToProps = (state) => {
  var koma_map = []
  for (let i = 0; i < 9; i++) koma_map[i] = []

  if(state.komas.sente) {
    state.komas.sente.forEach(koma => {
      koma_map[koma.position.y][koma.position.x] = koma
    })
  }

  var mode = 'normal'
  if (state.selected_koma) {
    mode = 'selected_koma'
  }
  
  return {
    koma_map: koma_map,
    mode: mode,
    selected_koma: state.selected_koma
  }
}

const stateToDispatch = (dispatch) => {
  return {
    selectKoma: function(id) {
      selectKoma(dispatch, id)
    },
    moveKoma: function(id, x, y) {
      moveKoma(dispatch, id, 'sente', x, y)
    } 
  }
}

Ban = connect(
  stateToProps,
  stateToDispatch
)(Ban)

export default Ban