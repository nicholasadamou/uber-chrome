import React from 'react'
import ReactDOM from 'react-dom'
import ExtendedFrame from './ExtendedFrame'

if (ExtendedFrame.isReady()) {
  ExtendedFrame.toggle()
} else {
  boot()
}

function boot() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  ReactDOM.render(<ExtendedFrame />, root)
}
