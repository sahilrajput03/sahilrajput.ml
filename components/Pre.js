import styled from 'styled-components'

// I am using PreOriginal for now..., as it no longer throws "can't have pre tag under a paragraph tag.."
export const PreOriginal = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow: hidden; /*hide scrollbars ~sahil*/

	& .token-line {
		line-height: 1.3em;
		height: 1.3em;
	}
`

export const Pre = styled.pre`
	/* I am on purpose using ^^ span here, coz using pre causes issues, like
'pre tag cannot be nested under p tag, as this is automatic from mdx compiler, I just
couldn't figure it out to solve that, so now i explicitly added properties
by using pre tag here first and then copying all css properties here below..., yikes!
It works super cool!!
 */
	font-size: 0.875em;
	display: block;
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	border-radius: 0.5em; /* ~sahil */
	/* below are explicity added ~sahil */
	white-space: pre-line; /*Specifying this to make span behave like pre tag. ~sahil*/
	overflow: hidden; /*Specifying this coz i don't want any scrollbars, ~sahil.*/
	line-height: 1.7142857;
	margin-top: 1.7142857em;
	margin-bottom: 1.7142857em;
	border-radius: 0.375rem;
	padding-top: 0.8571429em;
	padding-right: 1.1428571em;
	padding-bottom: 0.8571429em;
	padding-left: 1.1428571em;
	font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
		'Courier New', monospace;

	/* below was original from prism-react-renderer */
	& .token-line {
		line-height: 1.3em;
		height: 1.3em;
	}
`
