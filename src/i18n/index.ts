import spanish from './languages/es.json';
import norwegian from './languages/no.json';
import english from './languages/en.json';
import dutch from './languages/nl.json';

const LANG = {
	NORWEGIAN: 'no',
	ENGLISH: 'en',
	SPANISH: 'es',
	DUTCH: 'nl',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.NORWEGIAN) return {...spanish, ...norwegian};
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	if (currentLocale === LANG.DUTCH) return {...spanish, ...dutch};
	return spanish;
};
