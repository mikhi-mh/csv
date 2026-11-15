/**
 * ───────────────────────────────────────────────────────────────
 *  EVENTS / NEWS
 *  • To add news: copy one { ... } block to the TOP of `current`.
 *  • When news gets old: move its block into `earlier`.
 *  • `mr` is optional — if you leave it out, the English text is
 *    shown on the Marathi page too.
 *  • Put `highlight: true` on ONE current item to show it in the
 *    big admission banner on the home page.
 * ───────────────────────────────────────────────────────────────
 */
import type { T } from '@/i18n';

export type NewsItem = T & { highlight?: boolean };

export const current: NewsItem[] = [
  {
    highlight: true,
    en: 'Admission started for the academic year 2025-26',
    mr: '२०२५-२६ सत्रासाठी प्रवेश सुरू आहेत',
  },
  {
    en: 'Results declared for all subjects of all exams (up to Visharad), April/May 2025 — Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai — Sangola Centre',
    mr: 'अखिल भारतीय गांधर्व महाविद्यालय मंडळ, मुंबई — सांगोला केंद्राचा एप्रिल/मे २०२५ सर्व परीक्षांचा सर्व विषयांचा (विशारद पर्यंत) निकाल जाहीर',
  },
  {
    en: 'February 2025: International Music Competition — 11 students from the school participated, and 3 students won awards.',
    mr: 'आंतरराष्ट्रीय संगीत स्पर्धा फेब्रुवारी २०२५ मध्ये विद्यालयातील ११ विद्यार्थ्यांचा सहभाग आणि ३ विद्यार्थी पारितोषिक प्राप्त',
  },
  {
    en: 'Five school programs broadcast on All India Radio, Solapur (Akashvani Solapur).',
    mr: 'आकाशवाणी सोलापूर येथे विद्यालयाच्या पाच कार्यक्रमांचे प्रसारण',
  },
  {
    en: 'Art Exhibition and Trophy on the occasion of Shiv Jayanti celebrations in Mangalwedha.',
    mr: 'शिवजयंती महोत्सव, मंगळवेढा येथे कला प्रदर्शन, ट्रॉफी',
  },
];

export const earlier: NewsItem[] = [
  {
    en: 'Certificate of Honour/Appreciation from Art of Living for the “Taal Ninad” program in 2012.',
    mr: 'आर्ट ऑफ लिव्हिंगकडून “ताल निनाद” कार्यक्रमाचे मानपत्र २०१२',
  },
  {
    en: 'Annual cultural event held in December 2014.',
    mr: 'विद्यालयाचे वार्षिक संगीत संमेलन डिसेंबर २०१४',
  },
  {
    en: 'Annual Gathering / Meetup 2022',
    mr: 'वार्षिक स्नेहसंमेलन २०२२',
  },
  {
    en: 'NaadBhrahm Scholarship 2022',
    mr: 'नादब्रह्म शिष्यवृत्ती २०२२',
  },
  {
    en: "Program, Trophy, and Certificate for the school's performance on the occasion of the foundation day of Sangola Nagari Daily (a newspaper).",
    mr: 'दैनिक सांगोला नगरीच्या वर्धापन दिनानिमित्त विद्यालयाचा कार्यक्रम, ट्रॉफी आणि मानपत्र',
  },
  {
    en: 'Mast. Mikhilesh Hirphode & Mast. Aniket Pujari participated in a program on Pune Akashvani.',
    mr: 'कु. मिखिलेश हिरफोडे व कु. अनिकेत पुजारी यांचा आकाशवाणी संगीत स्पर्धेत, पुणे येथे सहभाग',
  },
];
