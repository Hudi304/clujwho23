interface BubbleProps {
  colorHashT: string
  colorHashC: string
  colorHashB: string
  width: string
  height: string
  connectTop?: boolean
  connectBotomn?: boolean
}

export function Bubble(props: BubbleProps) {
  const { colorHashT, colorHashC, colorHashB, width, height, connectTop, connectBotomn } = props

  if (connectTop && connectBotomn) {
    return (
      <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1">
          <rect id="connectionUP" x="45.5" y="0.5" width="9" height="27" fill={colorHashT} stroke="black" />
          <rect id="connectionUP_2" x="46" width="8" height="28" fill={colorHashT} />
          <rect id="connectionDown" x="45.5" y="72.5" width="9" height="27" fill={colorHashB} stroke="black" />
          <rect id="connectionDown_2" x="46" y="73" width="8" height="27" fill={colorHashB} />
          <circle id="bubble" cx="50" cy="50" r="29.5" fill={colorHashC} stroke="black" />
        </g>
      </svg>
    )
  }

  if (connectTop && !connectBotomn) {
    return (
      <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1">
          <rect id="connectionUP" x="45.5" y="0.5" width="9" height="27" fill={colorHashT} stroke="black" />
          <rect id="connectionUP_2" x="46" width="8" height="28" fill={colorHashT} />
          <circle id="bubble" cx="50" cy="50" r="29.5" fill={colorHashC} stroke="black" />
        </g>
      </svg>
    )
  }

  if (!connectTop && connectBotomn) {
    return (
      <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1">
          <rect id="connectionDown" x="45.5" y="72.5" width="9" height="27" fill={colorHashB} stroke="black" />
          <rect id="connectionDown_2" x="46" y="73" width="8" height="27" fill={colorHashB} />
          <circle id="bubble" cx="50" cy="50" r="29.5" fill={colorHashC} stroke="black" />
        </g>
      </svg>
    )
  }

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame 1">
        <circle id="bubble" cx="50" cy="50" r="29.5" fill={colorHashC} stroke="black" />
      </g>
    </svg>
  )
}
