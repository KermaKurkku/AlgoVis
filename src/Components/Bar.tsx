import React from 'react'

// Renders a bar to represent a number in the list
const Bar = ({ height, width }: { height: number, width: number }) => {
  const maxHeight = 40
  const style = {
    height: `${maxHeight*height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${width}%`,
    background: '#3E54E0',
    zIndex: 50,
    borderStyle: 'solid',
    borderColor: '#37AFED'
  }

  return <div style={style} />
}

export default Bar