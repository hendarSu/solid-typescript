export class SuperClass {
	name: string;

	constructor(name?: string) {
		this.name = name;
	}

	public print() {
		console.log(`${this.getName()}`);
	}

	public getName() {
		return 'This Super Class';
	}
}