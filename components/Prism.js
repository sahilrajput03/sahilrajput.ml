import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import {PreOriginal} from './Pre'
import {highlightLine} from './util'

// See how kent uses his setup with prism-react-renderer
// https://github.com/kentcdodds/old-kentcdodds.com/blob/7a3101a751513ad5864bf4d7cd54ec7dd6d2268e/src/components/mdx/code.js

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

const Prism = ({code, language}) => {
	// beware you should not use children prop, otherwise you get weird error like, unterminate string shit..!!!
	const inputCode = code.trim() // this is in use....
	// Below line hightlight examples work superb as well!
	// const inputCode = exampleCode1.trim() // this is in use....
	// const inputCode = exampleCode2.trim() // this is in use....
	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={inputCode}
			language={language || 'jsx'}
		>
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
