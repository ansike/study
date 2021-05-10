import './style.css';
import { cube } from './math.js';
import printMe from './print.js';

async function getComponent() {
	try {
		const { default: _ } = await import('lodash');
		const element = document.createElement('div');
		// element.innerHTML = _.join([ 'Hello', 'webpack21' ], ' ');
    element.innerHTML = [
      'Hello webpack！1',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
		return element;
	} catch (error) {
		console.log('An error occurred while loading the component');
		return false;
	}
}
(async () => {
	const component = await getComponent();
	if (component) document.querySelector('#app').appendChild(component);
})();

// TODO 作用
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe('Updating print.js...');
  })
}