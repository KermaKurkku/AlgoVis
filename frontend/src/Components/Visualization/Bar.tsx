import React, { MutableRefObject } from 'react'

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
  const maxHeight = 30
  const style = {
    height: `${maxHeight+1}em`,
    width: `${props.width}%`,
    background: props.area ? "rgb(170, 182, 193, 0.6)" : 'transparent',
    
  }
  const barStyle = {
    height: `${maxHeight*props.height}em`,
    maxHeight: `${maxHeight}em`,
    width: 'auto',
    background: normal ? '#f0f2f5' : props.main ? '#FF7A32' : 
    props.sub ? '#2EF550' : '#f0f2f5',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '0.2em',
    borderColor: '#1890ff',//'#f0f2f5',
    margin: '0.1em',
    opacity: '100%'
  }

  return (
    <div style={style} >
      <div style={barStyle} ref={ref} />
    </div>
  )
})

// Eslint is being a douche
Bar.displayName = 'Bar'

export default Bar
