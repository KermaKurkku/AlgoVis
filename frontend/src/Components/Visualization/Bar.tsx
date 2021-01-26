import React, { MutableRefObject } from 'react'

type Props = {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
}

type Ref = HTMLDivElement

interface Bar {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
}

// Renders a bar to represent a number in the list
const Bar: React.FC<Bar> = React.forwardRef<Ref, Props>((props: Props, ref) => {
  const normal = !props.main && !props.sub
  const maxHeight = 40
  const style = {
    height: `${maxHeight*props.height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${props.width}%`,
    background: normal ? 'transparent' : props.main ? '#FF7A32' : 
    props.sub ? '#2EF550' : 'transparent',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '0.2em',
    borderColor: '#1890ff',//'#f0f2f5',
    margin: '0.1em'
  }

  return <div style={style} ref={ref} />
})

// Eslint is being a douche
Bar.displayName = 'Bar'

export default Bar
