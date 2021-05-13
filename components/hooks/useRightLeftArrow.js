import {useKeypress} from './useKeyPress'
import {useEffect} from 'react'

const useRightLeftArrow = ({next, prev}) => {
	const arrow_right = useKeypress({key: 'ArrowRight'})
	const arrow_left = useKeypress({key: 'ArrowLeft'})

	useEffect(() => {
		if (arrow_left.down) {
			prev()
		}
		if (arrow_right.down) {
			next()
		}
	}, [arrow_right.down, arrow_left.down])
}

export default useRightLeftArrow
