import { SuperClass } from './SuperClass';

export class SubClass extends SuperClass {
	
	public print() {
		console.log(`${this.getName()}`);
		console.log(`Get Name From super class : ${super.getName()}`)
	}

	public getName() {
		return 'This Sub Class';
	}
}