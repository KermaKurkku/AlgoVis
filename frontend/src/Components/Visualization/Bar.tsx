import React, { MutableRefObject } from 'react'

type Props = {
  height: number;
  width: number;
  main: boolean;
  sub: boolean;
}

type Ref = HTMLDivElement

// Renders a bar to represent a number in the list
const Bar: React.FC<Props> = React.forwardRef<Ref, Props>((props: Props, ref) => {
  const maxHeight = 40
  const style = {
    height: `${maxHeight*props.height}em`,
    maxHeight: `${maxHeight}em`,
    width: `${props.width}%`,
    background: props.main ? '#FF7A32' : props.sub ? '#2EF550' : '#1890ff',
    zIndex: 50,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#f0f2f5',
  }

  return <div style={style} ref={ref} />
})

// Eslint is being a douche
Bar.displayName = 'Bar'

export default Bar
