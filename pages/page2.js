import Prism from 'components/Prism.js'

export default function Page2(params) {
  return <Way2 />
}

const Way2 = () => (
  <Prism
    code={`
(function someDemo() {
  // highlight-start
  var test = "Hello World!";
  console.log(testing);
  // highlight-end
})();
return () => <App />; // highlight-line
`}
  />
)

// shit way...
// const Way1 = () => (
//   <Code
//     code={`
// (function someDemo() {
//   // highlight-start
//   var test = "Hello World!";
//   console.log(testing);
//   // highlight-end
// })();
// return () => <App />; // highlight-line
// `}
//   />
// )
