export const COMPANY = {
  name: 'Gaeluss',
  email: 'info@gaeluss.com',
};

export const SOCIAL_PROFILES = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/gaeluss' },
  { name: 'Instagram', href: 'https://www.instagram.com/gaeluss_es' },
  { name: 'X', href: 'https://x.com/gaeluss_es' },
] as const;

export type SocialName = (typeof SOCIAL_PROFILES)[number]['name'];
