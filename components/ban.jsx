import React from 'react';
import { connect } from 'react-redux'
import { selectKoma, cancelSelectedKoma } from '../actions/selected_koma.jsx'
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
    var className = ''
    if (this.props.mode == 'selected_koma') {
      if (this.props.selected_koma.canMove(cols, rows)) {
        className = 'movable'
      }
    }

    return <td className={className} key={cols} onClick={this.handleGridClick(koma, cols, rows)}>
      {koma? koma.render() : ''}
    </td>
  },
  handleSelectKoma: function(koma) {
    if (!koma) return

    return () => {
      if (koma.owner == this.props.teban)
        this.props.selectKoma(koma)
    }
  },
  handleMoveKoma: function( x, y) {
    return () => {
      if (this.props.selected_koma.canMove(x, y)) {
        this.props.moveKoma(this.props.selected_koma, x, y);
      }
      else {
        this.props.cancelSelectedKoma()
      }
    }
  },
  handleGridClick: function(koma, x, y) {
    switch (this.props.mode) {
      case 'selected_koma':
        return this.handleMoveKoma(x, y)
        break
      default:
        return this.handleSelectKoma(koma)
    }
  },
  render: function() {
    if (this.props.results.finish) {
      window.alert(this.props.results.winner + 'の勝ち!')
    }
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

  if(state.komas) {
    state.komas.forEach(koma => {
      if (koma.isBanjyou()) {
        koma_map[koma.position.y][koma.position.x] = koma
      }
    })
  }

  var mode = 'normal'
  if (state.selected_koma) {
    mode = 'selected_koma'
  }
  
  return {
    koma_map: koma_map,
    mode: mode,
    selected_koma: state.selected_koma,
    teban: state.teban,
    results: state.results
  }
}

const stateToDispatch = (dispatch) => {
  return {
    selectKoma: function(koma) {
      selectKoma(dispatch, koma)
    },
    moveKoma: function(koma, x, y) {
      moveKoma(dispatch, koma, x, y)
    },
    cancelSelectedKoma: function() {
      cancelSelectedKoma(dispatch)
    }
  }
}

Ban = connect(
  stateToProps,
  stateToDispatch
)(Ban)

export default Ban