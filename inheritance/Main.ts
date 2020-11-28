import { SuperClass } from './SuperClass';
import { SubClass } from './SubClass';

const main = () => {
	const superClass = new SuperClass();
	const superClass2 = new SuperClass('this is name from constructor SuperClass');
	const subClass = new SubClass();
	const subClass2 = new SubClass('this is name from constructor SubClass');

	superClass.print();
	console.log(`${superClass2.name}`);
	subClass.print();
	console.log(`${subClass2.name}`);

}

main();