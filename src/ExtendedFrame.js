import React from 'react'
import { Frame } from 'chrome-sidebar'
import { url } from './constants'

export class ExtendedFrame extends Frame {
  render () {
    return (
      <Frame
        url={url}
        onMount={this.frameMount}
      />
    )
  }
}

export default ExtendedFrame
