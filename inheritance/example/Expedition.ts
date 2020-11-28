export class Expedition {
	private name: string;
	private origin: string;
	private destination: string;
	private service: string;
	private servicePrice: number;

	constructor(name, origin, destination, service, servicePrice)
	{
		this.name = name;
		this.origin = origin;
		this.destination = destination;
		this.service = service;
		this.servicePrice = servicePrice;
	}

	public get = () => {
		console.log(`${this.getName()} from ${this.getOrigin()} to ${this.getDestination()} with service ${this.getService()} is ${(this.getServicePrice() <= 0) ? 'FREE Shipping' : `${this.getServicePrice()} IDR`}`)
	}

	public setName = (name: string) => {
		this.name = name;
	}

	public getName = () => {
		return this.name;
	}

	public setOrigin = (origin: string) => {
		this.origin = origin;
	}

	public getOrigin = () => {
		return this.origin;
	}

	public setDestination = (destination: string) => {
		this.destination = destination;
	}

	public getDestination = () => {
		return this.destination;
	}

	public setService = (service: string) => {
		this.service = service;
	}

	public getService = () => {
		return this.service;
	}

	public setServicePrice = (servicePrice: number) => {
		this.servicePrice = servicePrice;
	}

	public getServicePrice = () => {
		return this.servicePrice;
	}
}