import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import {PreOriginal} from './Pre'
import {highlightLine} from './util'

let exampleCode1 = `
(function someDemo() {
  // highlight-start
var test = "Hello World!";
  console.log(testing);
  // highlight-end
})();
return () => <App />; // highlight-line
`.trim()

let exampleCode2 = `
const s = 10;//highlight-line
let m = 23;
let m = 23;
let m = 23;
let m = 23;
`.trim()

const exampleCode3 = `
let l = 20;
let m = 40;
`.trim()

const Prism = ({code}) => {
	// beware you should not use children prop, otherwise you get weird error like, unterminate string shit..!!!
	const inputCode = code.trim() // this is in use....
	return (
		<Highlight {...defaultProps} theme={theme} code={inputCode} language='jsx'>
			{({className, style, tokens, getLineProps, getTokenProps}) => (
				<PreOriginal className={className} style={style}>
					{tokens.map((line, i) => {
						const lineProps = getLineProps({line, key: i})
						const shouldExclude = highlightLine(line, lineProps)
						return !shouldExclude ? (
							<div {...lineProps} key={i}>
								{line.map((token, key) => (
									<span {...getTokenProps({token, key})} />
								))}
							</div>
						) : null
						// return (
						//   <div {...getLineProps({ line, key: i })}>
						//     {line.map((token, key) => (
						//       <span {...getTokenProps({ token, key })} />
						//     ))}
						//   </div>
						// );
					})}
				</PreOriginal>
			)}
		</Highlight>
	)
}

export default Prism

// import './CodeStyles.css'// imported in _app.js instead, yo!!
// source of line-highlighting: https://github.com/FormidableLabs/prism-react-renderer/issues/26#issuecomment-629013121
