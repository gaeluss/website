import spanish from './languages/es.json';
import norwegian from './languages/no.json';
import english from './languages/en.json';

const LANG = {
	NORWEGIAN: 'no',
	ENGLISH: 'en',
	SPANISH: 'es',
};

export const getI18N = ({
	currentLocale = LANG.SPANISH,
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.NORWEGIAN) return norwegian;
	if (currentLocale === LANG.ENGLISH) return english;
	return spanish;
};
