import React, { MutableRefObject } from 'react'

import AnimateBar from './AnimateBar'

type Props = {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
  area: boolean;
}

type Ref = HTMLDivElement

interface Bar {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
  area: boolean;
}

// Renders a bar to represent a number in the list
const Bar: React.FC<Bar> = React.forwardRef<Ref, Props>((props: Props, ref) => {

  const normal = !props.main && !props.sub
  const maxHeight = 40
  const style = {
    height: `${maxHeight*props.height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${props.width}%`,
    background: props.area ? "#aab6c1" : 'transparent',
    opacity: '80%'
    
  }
  const barStyle = {
    height: '100%',
    width: 'auto',
    background: normal ? 'transparent' : props.main ? '#FF7A32' : 
    props.sub ? '#2EF550' : 'transparent',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '0.2em',
    borderColor: '#1890ff',//'#f0f2f5',
    margin: '0.1em'
  }

  return (
    <div style={style}>
      <AnimateBar>
        <div style={barStyle} ref={ref} />
      </AnimateBar>
    </div>
  )
})

// Eslint is being a douche
Bar.displayName = 'Bar'

export default Bar
