import { Expedition } from './Expedition';
import { Sicepat } from './Sicepat';
import { Jne } from './Jne';

const main = () => {
	const expedition = new Expedition('Super Expedition', 'Jakarta', 'Bandung', 'Reguler', 0);
	const sicepat = new Sicepat('Sicepat Express', 'Jakarta', 'Bandung', 'Reguler', 10000);
	const jne = new Jne('JNE Express', 'Jakarta', 'Bandung', 'Reguler', 11000);

	expedition.get();
	sicepat.get();
	jne.get();
}

main();