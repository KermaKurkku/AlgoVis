import React from 'react'

const Bar = ({ height, width }: { height: number, width: number }) => {
  const style = {
    height: height * 3,
    width: `${width}%`,
    background: '#3E54E0',
    zIndex: 50,
    borderStyle: 'solid',
    borderColor: '#37AFED'
  }

  return <div style={style} />
}

export default Bar