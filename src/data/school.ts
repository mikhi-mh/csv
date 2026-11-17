/**
 * ───────────────────────────────────────────────────────────────
 *  SCHOOL INFORMATION
 *  Edit this file to change addresses, phone numbers, the about
 *  text, gurus, faculty or social links. Every page reads from here,
 *  so a change made once shows up everywhere (English + Marathi).
 * ───────────────────────────────────────────────────────────────
 */
import type { T, TList } from '@/i18n';

/** Shown in the thin strip at the very top of every page. */
export const invocation = '|| ॐ नादब्रह्मणे नमः ||';

/** The trust that runs the school. */
export const sanstha = 'श्रीराम शैक्षणिक सामाजिक सांस्कृतिक बहुद्देशीय प्रतिष्ठान शिरभावी संचलित';

/** School motto (from the admission poster). */
export const motto = 'घरोघरी संगीत, ज्ञानासह आनंद';

export const foundingDate = '2006-01-26';

/* ── Contact details ─────────────────────────────────────────── */

export const contact = {
  /** Main number — used for calls and WhatsApp. */
  mobile: '9822970551',
  /** All school contact numbers (shown on the Contact page and footer). */
  mobiles: ['9822970551', '9049406050'],
  whatsapp: '919822970551',
  email: 'csvidyalay@gmail.com',
  website: 'https://www.chaitanyasangeetvidyalay.com/',
  instagram: {
    handle: '@chaitanya_sangeet_vidyalaya_06',
    url: 'https://www.instagram.com/chaitanya_sangeet_vidyalaya_06/',
  },
  youtube: {
    handle: '@chaitanyasangeetvidyalaysa1008',
    url: 'https://www.youtube.com/@chaitanyasangeetvidyalaysa1008',
  },
};

export type Person = { name: T; phone: string };

export const people: Person[] = [
  { name: { en: 'Mr. Prasad Patil', mr: 'श्री. प्रसाद पाटील' }, phone: '9822970551' },
  { name: { en: 'Adv. Ms. Prajakta Patil', mr: 'ॲड. सौ. प्राजक्ता पाटील' }, phone: '7875007648' },
  { name: { en: 'Adv. Praveen Patil', mr: 'ॲड. प्रवीण पाटील' }, phone: '9890185072' },
];

export type Office = { id: string; address: TList; mapUrl: string };

export const mainOffice: Office = {
  id: 'sangola',
  address: {
    en: [
      'Chaitanya Sangeet Vidyalay,',
      'near Mahimkar Apartment,',
      'Old Alegaon-Medshingi Road,',
      'Sangola - PIN Code: 413307',
      'Taluka-Sangola, District-Solapur,',
      'State-Maharashtra, Country-India',
    ],
    mr: [
      'चैतन्य संगीत विद्यालय',
      'महिमकर कॉम्प्लेक्स जवळ',
      'जुना आलेगाव - मेडशिंगी रोड, सांगोला',
      'ता. सांगोला, जि. सोलापूर',
    ],
  },
  mapUrl: 'https://maps.app.goo.gl/xmFyuYR5bFNNUcB16',
};

export const branchOffice: Office = {
  id: 'mangalwedha',
  address: {
    en: [
      'Chaitanya Sangeet Vidyalay',
      '1st floor, Swami Samarth Temple, Mangalwedha',
      'Tal-Mangalwedha, Dist-Solapur',
    ],
    mr: ['चैतन्य संगीत विद्यालय', 'स्वामी समर्थ मंदिर, वरचा मजला, मंगळवेढा', 'ता. मंगळवेढा, जि. सोलापूर'],
  },
  mapUrl: 'https://maps.app.goo.gl/eujioWYS4VZwT1tx7',
};

/* ── About / history ─────────────────────────────────────────── */

export const about = {
  intro: {
    en: [
      'Chaitanya Sangeet Vidyalay was founded by Mr. Prasad Patil. He has completed his formal education in Arts with Hindi. He has been taking music lessons since childhood.',
    ],
    mr: [
      'चैतन्य संगीत विद्यालयाची स्थापना श्री. प्रसाद पाटील B.A. (हिंदी) यांनी २६ जानेवारी २००६ रोजी ठोंबरे वाडा, महादेव गल्ली, सांगोला येथे केली.',
      'ते स्वतः संगीत विशारद (तबला) आणि संगीत विशारद (सतार) आहेत.',
    ],
  } satisfies TList,

  history: {
    en: [
      'Chaitanya Sangeet Vidyalay was founded on 26th January 2006 at Thombare Wada, Mahadev Galli, Sangola.',
      'The Vidyalay has been affiliated with “Akhil Bharatiya Gandharva Mahavidyalaya Mandal”, Mumbai since 2008.',
      'Affiliation Number S-M97 and Certificate Number 723.',
      'A new branch was founded on 1st January 2009 at Indikar Wada, Killa Bhag, Mangalwedha.',
      'It is currently located on the 1st floor of Swami Samarth Temple, Mangalwedha, Tal-Mangalwedha, Dist-Solapur.',
    ],
    mr: [
      'चैतन्य संगीत विद्यालय हे अखिल भारतीय गांधर्व महाविद्यालय मंडळ, मुंबई या संस्थेची संलग्नता प्राप्त विद्यालय आहे.',
      'संलग्नता प्राप्त क्रमांक S-M97 आणि प्रमाणपत्र क्रमांक ७२३, मान्यता साल २००८.',
      'चैतन्य संगीत विद्यालयाची दुसरी शाखा मंगळवेढा येथे १ जानेवारी २००९ पासून कार्यरत आहे.',
    ],
  } satisfies TList,

  gurusHeading: {
    en: 'He has been blessed with music lessons from these Gurus (Teachers)',
    mr: 'संगीत शिक्षणामधील गुरुवर्य',
  } satisfies T,

  gurus: {
    en: [
      'Mr. Shashikant Balakrushna Patil (Father)',
      'Mr. Bhanudas Buva Dhavalikar Sir, Pandharpur',
      'Late Mr. Tryambak Joshi Sir (Mangalwedhekar), Pandharpur',
      'Mr. Vinayak Phatak Sir, Pune',
      'Mr. Manmohan Kumbhare Sir, Sangli',
      'Mr. Mohasin Mirajkar Sir, Miraj',
      'Mr. Purbayan Chatterjee Sir, Mumbai / Kolkata',
    ],
    mr: [
      'श्री. शशिकांत बाळकृष्ण पाटील (वडील)',
      'श्री. भानुदास बुवा ढवळीकर सर, पंढरपूर',
      'कै. श्री. त्र्यंबक दत्तोपंत जोशी सर (मंगळवेढेकर), पंढरपूर',
      'श्री. विनायक फाटक सर, पुणे',
      'श्री. मनमोहन कुंभारे सर, सांगली',
      'श्री. मोहसीन मिरजकर सर, मिरज',
      'श्री. पुरबयान चटर्जी सर, मुंबई	/ कलकत्ता',
    ],
  } satisfies TList,
};

/** Key dates shown as highlight tiles on the home page. */
export const milestones: { value: T; label: T }[] = [
  { value: { en: '26 Jan 2006', mr: '२६ जानेवारी २००६' }, label: { en: 'Founded at Sangola', mr: 'सांगोला येथे स्थापना' } },
  { value: { en: '2008', mr: '२००८' }, label: { en: 'Affiliated with A.B. Gandharva Mahavidyalaya Mandal, Mumbai', mr: 'अखिल भारतीय गांधर्व महाविद्यालय मंडळ संलग्नता' } },
  { value: { en: 'S-M97', mr: 'S-M97' }, label: { en: 'Affiliation No. · Certificate No. 723', mr: 'संलग्नता क्रमांक · प्रमाणपत्र क्रमांक ७२३' } },
  { value: { en: '1 Jan 2009', mr: '१ जानेवारी २००९' }, label: { en: 'Mangalwedha branch', mr: 'मंगळवेढा शाखा' } },
];

/** Admission highlights (from the admission poster) — shown in the admission banner. */
export const admissionHighlights: T[] = [
  { en: 'Online and offline classes', mr: 'ऑनलाइन व ऑफलाइन तास होतील' },
  { en: 'Provision of 15 marks in 10th standard', mr: '१० वी इयत्तेत १५ गुणांची तरतूद' },
];

/* ── Teaching faculty ────────────────────────────────────────── */

export const faculty: { name: T; title: T }[] = [
  { name: { en: 'Mr. Uday Bhumkar Sir', mr: 'श्री. उदय भूमकर सर' }, title: { en: 'Sangeet Alankar', mr: 'संगीत अलंकार' } },
  { name: { en: 'Mr. Prasad Patil Sir', mr: 'श्री. प्रसाद पाटील सर' }, title: { en: 'Sangeet Visharad', mr: 'संगीत विशारद' } },
];

/* ── Downloads ───────────────────────────────────────────────── */
// The admission poster lives in  src/assets/admission-poster.png  (replace that file to update it).
export const downloads = {
  applicationForm: '/downloads/application-form.pdf',
  careerOpportunities: '/downloads/career-opportunities.pdf',
};
