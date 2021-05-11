import {useEffect, useState} from 'react'
// source:: codesandbox: https://codesandbox.io/s/vqpyjyrqw7?file=/src/Letter.js
export const useKeypress = ({key}) => {
  const [keyPressed, setKeypressed] = useState({
    up: false,
    down: false,
    key: key,
  })

  function keyDown(event) {
    // if (key && event.key === key.toLowerCase()) {
    if (key && event.key === key) {
      // if (event) { // for knowing what key user pressed.
      setKeypressed({up: false, down: true, key: key})
    }
  }
  function keyUp(event) {
    // if (event.key === key.toLowerCase()) {
    if (event.key === key) {
      setKeypressed({up: true, down: false, key: key})
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDown)
    document.addEventListener('keyup', keyUp)
    return () => {
      document.removeEventListener('keydown', keyDown)
      document.removeEventListener('keyup', keyUp)
    }
  }, [])

  return keyPressed
}
