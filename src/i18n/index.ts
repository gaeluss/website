import spanish from './languages/es.json';
import norwegian from './languages/no.json';
import english from './languages/en.json';

const LANG = {
	NORWEGIAN: 'no',
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.NORWEGIAN) return {...spanish, ...norwegian};
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};
