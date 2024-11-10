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
	currentLocale = LANG.SPANISH,
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.NORWEGIAN) return norwegian;
	if (currentLocale === LANG.ENGLISH) return english;
	if (currentLocale === LANG.DUTCH) return dutch;
	return spanish;
};
