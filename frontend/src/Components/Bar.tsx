import React from 'react'

interface Bar {
  height: number,
  width: number,
  selected: boolean
}

// Renders a bar to represent a number in the list
const Bar: React.FC<Bar> = ({ height, width, selected }: { height: number, width: number, selected: boolean }) => {
  const maxHeight = 40
  const style = {
    height: `${maxHeight*height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${width}%`,
    background: selected ? '#FF7A32' : '#3E54E0',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#37AFED'
  }

  return <div style={style} />
}

export default Bar