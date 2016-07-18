import React from 'react';
import { connect } from 'react-redux'

var Ban = React.createClass({
  render: function() {
    var trs = []
    for (let rows = 0; rows < 9; rows++) {
      var tds = []
      for (let cols = 0; cols < 9; cols++) {
        let koma = this.props.koma_map[rows][cols]
        if (koma) {
          tds.push(<td key={cols}>{koma.id}</td>);
        }
        else {
          tds.push(<td key={cols}></td>);
        }
      }

      trs[rows] = <tr key={rows}>{tds}</tr>
    }

    return(
      <table id='ban'>
        <tbody>
          {trs}
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
  
  return {
    koma_map: koma_map
  }
}

Ban = connect(
  stateToProps
)(Ban)

export default Ban