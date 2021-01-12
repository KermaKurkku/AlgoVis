import React from 'react'

interface Bar {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
}

// Renders a bar to represent a number in the list
const Bar: React.FC<Bar> = ({ height, width, main, sub }: { height: number; width: number; main: boolean; sub: boolean }) => {
  const maxHeight = 40
  const style = {
    height: `${maxHeight*height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${width}%`,
    background: main ? '#FF7A32' : sub ? '#2EF550' : '#1890ff',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#f0f2f5',
  }

  return <div style={style} />
}

export default Bar