// React
import React from 'react'
// React Spring
import { useSpring, animated } from 'react-spring'

function Transition({ children }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <div className="transition-mail">
      <animated.div style={props}>{children}</animated.div>
    </div>
  )
}

export default Transition
