import { messages } from '../translations/messages';
import { getCurrentLanguage } from '../components/LanguageSelector';

type MessageKey = keyof typeof messages['en'];

export const getMessage = (key: MessageKey): string => {
  const currentLang = getCurrentLanguage();
  return messages[currentLang as keyof typeof messages][key];
};

export const formatDate = (date: Date): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.DateTimeFormat(currentLang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const formatNumber = (num: number): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.NumberFormat(currentLang === 'de' ? 'de-DE' : 'en-US').format(num);
};

export const formatCurrency = (amount: number, currency: string = 'EUR'): string => {
  const currentLang = getCurrentLanguage();
  return new Intl.NumberFormat(currentLang === 'de' ? 'de-DE' : 'en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}; 