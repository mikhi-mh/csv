/**
 * ───────────────────────────────────────────────────────────────
 *  SUBJECTS / COURSES  and  ACHIEVEMENTS BY SUBJECT
 *  • Course names: the first name before " / " is shown big,
 *    the rest are shown smaller as other names.
 *  • Achievements: add a line to the `en` and `mr` lists.
 *  • `image` must match a file in  src/assets/instruments/
 * ───────────────────────────────────────────────────────────────
 */
import type { T, TList } from '@/i18n';

export const courses: T[] = [
  { en: 'Vocal / Classical Vocal / Singing', mr: 'गायन / शास्त्रीय गायन / गाण' },
  { en: 'Tabala / Tabla / Tabor', mr: 'तबला' },
  { en: 'Sitar / Satar', mr: 'सतार / सितार' },
  { en: 'Harmonium / Reed Organ / Pump Organ', mr: 'हार्मोनियम / पेटी / रीड ऑर्गन / पंप ऑर्गन' },
  { en: 'Keyboard / Piano / Synthesizer / Synthesiser / Synth', mr: 'कीबोर्ड / पियानो / सिंथेसायझर' },
  { en: 'Mrudung / Pakhwaj / Pakhawaj / Mridangam', mr: 'मृदंग / पखवाज / मृदंगम / पखावज' },
  { en: 'Guitar', mr: 'गिटार' },
  { en: 'Violin', mr: 'व्हायोलिन' },
  { en: 'Kathak / Kaththak (Indian Classical Dance)', mr: 'कथ्थक / कथक (भारतीय शास्त्रीय नृत्य)' },
  { en: 'Flute / Basari / Bansuri', mr: 'बासरी / बासुरी' },
];

export type InstrumentImage = 'tabla' | 'vocal' | 'harmonium' | 'sitar' | 'mrudung';

export const achievements: { title: T; image: InstrumentImage; items: TList }[] = [
  {
    title: { en: 'Tabala', mr: 'तबला' },
    image: 'tabla',
    items: {
      en: [
        'Shriya Kulkarni got “Tabala Visharad” degree in 1st class also she is 1st student of vidyalaya who got degree exam held on April-May 2013',
        'Shriya Kulkarni performed in program of “Saam Marathi Channel” on 21th August 2011',
        'Shriya Kulkarni got 3rd price in competition arranged by shrirang kala niketan Talegaon Dabhade.',
        'Naveli Deshpande performed in “VA RE VA” program of “Sahyadri Channel” on 14th February 2009',
        'Kumar Pratham Yadav performed in “VA RE VA” program of “Sahyadri Channel” on 19 January 2009',
        'Shriya Ganesh Kulkarni got first price for playing Tabala Datta Gayan Samaj Barshri.',
        'Aniket Pujari got 4th rank in taal competition arranged by “Taal Sadhana” Solapur',
      ],
      mr: [
        'श्रिया कुलकर्णी हिने तबला विशारद ( प्रथम श्रेणी ) मिळवली आणि विद्यालयातून प्रथम पदवी प्राप्त करण्याचा मान मिळवला परीक्षा एप्रिल मे २०१३',
        'कुमारी नवेली देशपांडे हिचे सह्यादी वाहिनी " वा रे वा " दि १४/०२/२००९ रोजी तबला वादन',
        'कुमार प्रथम यादव याने सह्यादी वाहिनी " वा रे वा " दि १९/०१/२००९ रोजी तबला वादन',
        'श्रीया गणेश कुलकर्णी दत्त गायन समाज बार्शी प्रथम क्रमांक दि.१२/०२/२००९',
        'श्रीया गणेश कुलकर्णी हिचा श्रीरंग कला निकेतन तळेगाव दाभाडे येथील कै. राम मराठे यांच्या संगीत स्पर्धेत तृतीय क्रमांक',
        'श्रिया कुलकर्णी हिचे साम मराठी वाहिनीवर तबला वादन दि.२१/०८/२०११',
        'ताल साधना सोलापूर आयोजित स्पर्धेत अनिकेत पुजारी चौथा क्रमांक दि.२५/१२/२०११',
      ],
    },
  },
  {
    title: { en: 'Classical Vocal', mr: 'गायन' },
    image: 'vocal',
    items: {
      en: [
        'Abhishek Pujari performed Sugam Gayan on “Saam Marathi” 18 September 2011',
        'Utkranti Masal has passed preliminary Exam in 1st rank held in April – May 2010',
        'Utkranti Masal performed in Classical vocal program of Solapur Radio Station.',
      ],
      mr: [
        'अभिषेक पुजारी साम मराठी वाहिनीवर सुगम गायन दि.१८/०९/२०११',
        'कुमारी उत्क्रांती मासाळ प्र.पूर्ण गायन विषयास तिसऱ्या परीक्षेत प्रथम श्रेणी आणि केंद्रात प्रथम वर्ष एप्रिल - मे सत्र २०१०',
        'कुमारी उत्क्रांती मासाळ सोलापूर आकाशवाणी वर शास्त्रीय संगीताचा कार्यक्रम दि. २१/००/२०११',
      ],
    },
  },
  {
    title: { en: 'Harmonium', mr: 'हार्मोनियम' },
    image: 'harmonium',
    items: {
      en: ['Sumedh Dabir passed preliminary Exam in harmonium held in April – May 2014'],
      mr: ['सुमेध डबीर हार्मोनियम विषयांत प्र.प्रथम परीक्षेत विशेष गुणवत्तेसह केंद्रात प्रथम सत्र एप्रिल मे २०१४'],
    },
  },
  {
    title: { en: 'Satar', mr: 'सतार' },
    image: 'sitar',
    items: {
      en: ['Gayatri Kulkarni passed preliminary Exam.', 'Shravani Hirfode got 1st Rank in Exam.'],
      mr: ['कु.गायत्री कुलकर्णी प्र.पूर्ण परिक्षेत विशेष योग्यतेसह उत्तीर्ण', 'कु. श्रावणी हिरफोडे प्रथम श्रेणीत उत्तीर्ण'],
    },
  },
  {
    title: { en: 'Mrudung', mr: 'मृदंग' },
    image: 'mrudung',
    items: {
      en: ['Mrudung is one of ratna found at the time of "Samudra Manthan"'],
      mr: ['हे वाद्य समुद्रमंथनातून जी नव रत्ने आली त्यामधील हे एक रत्न मानले गेले आहे'],
    },
  },
];
