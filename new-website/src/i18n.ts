/**
 * Language helpers.
 * English pages live at "/", Marathi pages at "/mr/".
 */
export type Lang = 'en' | 'mr';
export const LANGS: Lang[] = ['en', 'mr'];

/** A piece of text in both languages. `mr` is optional — English is shown if it is missing. */
export type T = { en: string; mr?: string };
/** A list of lines in both languages. */
export type TList = { en: string[]; mr?: string[] };

export function t(text: T, lang: Lang): string {
  return (lang === 'mr' ? text.mr : text.en) ?? text.en;
}

export function tl(list: TList, lang: Lang): string[] {
  return (lang === 'mr' ? list.mr : list.en) ?? list.en;
}

/** Build a link for a language: localePath('mr', '/videos/') → '/mr/videos/' */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? clean : `/mr${clean === '/' ? '/' : clean}`;
}

/** Strip the language prefix from a URL path: '/mr/videos/' → '/videos/' */
export function stripLocale(pathname: string): string {
  const p = pathname.replace(/^\/mr(?=\/|$)/, '');
  return p === '' ? '/' : p;
}

const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

/** Show numbers in Marathi digits on Marathi pages: 9822970551 → ९८२२९७०५५१ */
export function num(value: string | number, lang: Lang): string {
  const s = String(value);
  return lang === 'mr' ? s.replace(/[0-9]/g, (d) => DEVANAGARI_DIGITS[Number(d)]) : s;
}

/** Interface words (menu, buttons, headings). */
export const ui = {
  siteName: { en: 'Chaitanya Sangeet Vidyalay', mr: 'चैतन्य संगीत विद्यालय' },
  places: { en: 'Sangola · Mangalwedha', mr: 'सांगोला · मंगळवेढा' },

  navHome: { en: 'Home', mr: 'मुख्य पान' },
  navSubjects: { en: 'Subjects', mr: 'विषय' },
  navVideos: { en: 'Videos', mr: 'व्हिडीओ' },
  navGallery: { en: 'Gallery', mr: 'फोटो समूह' },
  navContact: { en: 'Contact Us', mr: 'संपर्क' },
  switchLang: { en: 'मराठी', mr: 'English' },
  menu: { en: 'Menu', mr: 'मेनू' },

  musicPlay: { en: 'Play music', mr: 'संगीत सुरू करा' },
  musicPause: { en: 'Pause music', mr: 'संगीत थांबवा' },

  admission: { en: 'Admission', mr: 'प्रवेश' },
  brochure: { en: 'Brochure / Advertisement', mr: 'जाहिरात' },
  applicationForm: { en: 'Application Form', mr: 'प्रवेश अर्ज' },
  careerHeading: { en: 'Career Opportunities', mr: 'करिअर संधी' },
  careerLink: { en: 'Career Opportunities', mr: 'करिअरच्या संधी' },
  facultyHeading: { en: 'Teaching Faculty', mr: 'शिक्षक वर्ग' },

  mainOffice: { en: 'Main Office', mr: 'मुख्य कार्यालय' },
  branch: { en: 'Branch Mangalwedha', mr: 'शाखा मंगळवेढा' },
  contactPeople: { en: 'Contact', mr: 'संपर्क' },
  viewOnMaps: { en: 'View on Google Maps', mr: 'Google Maps वर पहा' },

  aboutHeading: { en: 'About the Vidyalay', mr: 'विद्यालयाविषयी' },
  milestonesHeading: { en: 'Our journey', mr: 'वाटचाल' },
  coursesHeading: { en: 'Subjects Taught / Courses Offered', mr: 'विषय' },
  allSubjects: { en: 'Subjects & achievements', mr: 'विषय व कामगिरी' },
  currentEvents: { en: 'Current Events', mr: 'महत्वाच्या-वर्तमान घडामोडी' },
  earlierEvents: { en: 'Earlier Events', mr: 'मागील / पूर्वीच्या घडामोडी' },
  achievementsHeading: { en: 'By subject', mr: 'विषयानुसार' },

  videosHeading: { en: 'Videos', mr: 'व्हिडीओ' },
  watchOnYouTube: { en: 'More on our YouTube channel', mr: 'आमच्या यूट्यूब चॅनलवर अधिक' },
  playVideo: { en: 'Play video', mr: 'व्हिडीओ चालू करा' },

  galleryHeading: { en: 'Gallery', mr: 'फोटो समूह' },
  close: { en: 'Close', mr: 'बंद करा' },
  previous: { en: 'Previous', mr: 'मागील' },
  next: { en: 'Next', mr: 'पुढील' },
  photo: { en: 'Photo', mr: 'फोटो' },

  contactHeading: { en: 'Contact Us : Chaitanya Sangeet Vidyalay', mr: 'संपर्क : चैतन्य संगीत विद्यालय' },
  addressSangola: { en: 'Sangola Address', mr: 'सांगोला पत्ता' },
  addressMangalwedha: { en: 'MangalWedha Address', mr: 'मंगळवेढा पत्ता' },
  mobile: { en: 'Mobile Number', mr: 'भ्रमणध्वनी / मोबाइल क्रमांक' },
  website: { en: 'Website', mr: 'विद्यालयाचे संकेतस्थळ' },
  email: { en: 'Email', mr: 'ई-मेल' },
  whatsapp: { en: 'WhatsApp', mr: 'व्हॉट्सॲप' },
  whatsappChat: { en: 'Chat on WhatsApp', mr: 'व्हॉट्सॲपवर संपर्क' },
  instagram: { en: 'Instagram', mr: 'इंस्टाग्राम' },
  youtube: { en: 'YouTube Channel', mr: 'यूट्यूब चॅनल / वाहिनी' },

  developedBy: { en: 'Developed & Maintained by', mr: 'Developed & Maintained by' },
} satisfies Record<string, T>;
