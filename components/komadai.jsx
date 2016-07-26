import React from 'react';
import { connect } from 'react-redux'
import { selectKoma, cancelSelectedKoma } from '../actions/selected_koma.jsx'
import { moveKoma } from '../actions/komas.jsx'

var Komadai = React.createClass({
  handleKomaClick: function(koma) {
    return () => {
      if (koma.owner == this.props.teban)
      this.props.selectKoma(koma)
    }
  },
  renderKomas: function(teban) {
    var dom = []
    this.props.komas[teban].forEach(koma => {
      dom.push(<div key={koma.id} onClick={this.handleKomaClick(koma)}>{koma.render()}</div>)
    })
    return dom
  },
  render: function() {
    return <div>
      <div className='sente_komadai'>{this.renderKomas('sente')}</div>
      <div className='gote_komadai'>{this.renderKomas('gote')}</div>
    </div>
  }
})

const stateToProps = (state) => {
  var sente = [], gote = []
  state.komas.forEach(koma => {
    if (!koma.isBanjyou()) {
      if (koma.owner == 'sente') sente.push(koma)
      else gote.push(koma)
    }
  })
  
  return {
    teban: state.teban,
    komas: {
      sente: sente,
      gote: gote
    }
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

Komadai = connect(
  stateToProps,
  stateToDispatch
)(Komadai)

export default Komadai