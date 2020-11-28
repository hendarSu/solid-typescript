import { SuperClass } from './SuperClass';
import { SubClass } from './SubClass';

const main = () => {
	const superClass = new SuperClass('this is SuperClass');
	const subClass = new SubClass('this is SubClass');

	console.log(`${superClass.getName()}`);
	console.log(`${subClass.getName()}`);
}

main();