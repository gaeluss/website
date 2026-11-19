import { LANGUAGES, defaultLang, showDefaultLang, routes, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (Object.hasOwn(LANGUAGES, lang)) return lang as Lang;
	return defaultLang;
}

export function useTranslatedPath(lang: Lang) {
	return function translatePath(path: string, l: string = lang) {
		const pathName = path.replaceAll('/', '');
		const localeRoutes = routes[l as Lang] ?? {};
		const hasTranslation =
			defaultLang !== l && localeRoutes[pathName] !== undefined;
		const translatedPath = hasTranslation
			? '/' + localeRoutes[pathName]
			: path;

		return !showDefaultLang && l === defaultLang
			? translatedPath
			: `/${l}${translatedPath}`;
	};
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname;
	const parts = pathname?.split('/');
	const path = parts.pop() || parts.pop();

	if (path === undefined) {
		return undefined;
	}

	const currentLang = getLangFromUrl(url);

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0];
		return route[path];
	}

	const getKeyByValue = (
		obj: Record<string, string>,
		value: string
	): string | undefined => {
		return Object.keys(obj).find(key => obj[key] === value);
	};

	return getKeyByValue(routes[currentLang], path);
}
