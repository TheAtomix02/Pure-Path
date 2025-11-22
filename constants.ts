
import { Contradiction, FaqItem, ResourceItem } from './types';

export const CONTRADICTIONS: Contradiction[] = [
  {
    id: 'adultery',
    title: 'Adultery Punishment',
    category: 'quran-vs-hadith',
    severity: 'high',
    quranSource: "Qur'an 24:2",
    quranText: "100 lashes",
    hadithSource: "Sahih Muslim",
    hadithText: "Stoning to death",
    description: "Clear contradiction between divine command and human narration regarding punishment for adultery.",
    tags: ['Legal', 'Punishment']
  },
  {
    id: 'apostasy',
    title: 'Apostasy Penalty',
    category: 'quran-vs-hadith',
    severity: 'high',
    quranSource: "Qur'an 2:256",
    quranText: "No compulsion",
    hadithSource: "Sahih Bukhari",
    hadithText: "Death penalty",
    description: "Fundamental contradiction on religious freedom and the treatment of those who leave Islam.",
    tags: ['Freedom', 'Rights']
  },
  {
    id: 'inheritance',
    title: 'Inheritance of Prophets',
    category: 'quran-vs-hadith',
    severity: 'medium',
    quranSource: "Qur'an 27:16",
    quranText: "Prophets inherit",
    hadithSource: "Hadith",
    hadithText: "No inheritance",
    description: "Contradiction regarding whether prophets leave material inheritance to their families.",
    tags: ['Inheritance', 'Prophets']
  },
  {
    id: 'magic',
    title: 'Prophet Under Magic',
    category: 'character-issues',
    severity: 'high',
    quranSource: "Qur'an 17:47",
    quranText: "Refutes slander",
    hadithSource: "Sahih Bukhari",
    hadithText: "Claims bewitched",
    description: "Hadith contradicts Qur'anic defense of the Prophet against accusations of being bewitched.",
    tags: ['Character', 'Magic']
  },
  {
    id: 'fly',
    title: 'Fly in the Drink',
    category: 'scientific',
    severity: 'low',
    quranSource: "Science/Logic",
    quranText: "Hygiene",
    hadithSource: "Sahih Bukhari",
    hadithText: "Dip the fly",
    description: "Hadith claims one wing of a fly has disease and the other has cure - scientifically baseless.",
    tags: ['Science', 'Health']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'prayer',
    question: "How do we pray without hadith?",
    answer: "The Qur'an commands prayer (Salat), mentions its timings, and its core components like standing, bowing, and prostrating (e.g., 2:238, 11:114, 22:77). The universal physical practice of Salat has been passed down through generations from the time of Abraham, a practice Prophet Muhammad revived.",
    category: 'practice',
    difficulty: 'easy',
    highlights: [
      { icon: 'book', text: "Qur'anic guidance is sufficient" },
      { icon: 'history', text: "Historical continuity from Abraham" },
      { icon: 'heart', text: "Focus on sincere remembrance" }
    ],
    quote: { text: "And establish prayer for My remembrance.", cite: "Qur'an 20:14" }
  },
  {
    id: 'messenger',
    question: "Doesn't the Qur'an say to 'Obey the Messenger'?",
    answer: "Yes, and the Messenger's primary duty was to deliver the message he received from God—the Qur'an. Obeying the Messenger is obeying the Qur'an. He had no authority to create his own separate religious laws.",
    category: 'authority',
    difficulty: 'medium',
    highlights: [
      { icon: 'scroll', text: "Messenger delivers God's message" },
      { icon: 'check', text: "Obeying messenger = obeying Qur'an" }
    ],
    quote: { text: "I only follow what is revealed to me.", cite: "Qur'an 6:50" }
  },
  {
    id: 'sect',
    question: "Isn't this a new sect?",
    answer: "On the contrary, this is a call to abandon all sects (Sunni, Shia, etc.), which are themselves based on allegiance to different sets of hadith and scholars. It is a return to the original, pure Islam guided by the one Book sent to all of mankind.",
    category: 'theology',
    difficulty: 'easy',
    highlights: [
      { icon: 'users', text: "Abandons sectarianism" },
      { icon: 'undo', text: "Returns to original Islam" }
    ],
    quote: { text: "As for those who divide their religion and break up into sects, you have no part in them in the least.", cite: "Qur'an 6:159" }
  },
  {
    id: 'zakat',
    question: "Is Zakat fixed at 2.5%?",
    answer: "The Qur'an does not specify a fixed percentage like 2.5%. Instead, it instructs believers to give 'the excess' (al-afwa) (2:219) and to give on the day of harvest (6:141). The 2.5% rate is a later juristic deduction, often limiting true generosity.",
    category: 'practice',
    difficulty: 'medium',
    highlights: [
      { icon: 'percent', text: "No fixed % in Qur'an" },
      { icon: 'heart', text: "Give from the excess" }
    ],
    quote: { text: "They ask you what they should spend. Say: The excess.", cite: "Qur'an 2:219" }
  },
  {
    id: 'intercession',
    question: "Will the Prophet intercede for us?",
    answer: "The Qur'an repeatedly states that all intercession belongs to Allah alone (39:44) and that on the Day of Judgment, 'no intercession will be accepted' (2:48) from anyone unless Allah permits, emphasizing individual responsibility.",
    category: 'theology',
    difficulty: 'hard',
    highlights: [
      { icon: 'shield', text: "Intercession belongs to Allah" },
      { icon: 'user', text: "Individual accountability" }
    ],
    quote: { text: "Say: To Allah belongs all intercession.", cite: "Qur'an 39:44" }
  },
    {
    id: 'hijab',
    question: "Is the headscarf (hijab) mandatory?",
    answer: "The Qur’an explicitly commands covering the bosom (24:31) and lengthening garments (33:59), but does not explicitly command a headscarf. However, the headscarf is strongly recommended as a noble choice that aligns perfectly with Qur’anic values of modesty. It fulfills the purpose of modesty, protects dignity, strengthens spiritual identity, and serves as a daily act of devotion that inspires respect.",
    category: 'practice',
    difficulty: 'medium',
    highlights: [
      { icon: 'shield', text: "Protects dignity" },
      { icon: 'heart', text: "Strengthens faith" },
      { icon: 'star', text: "Noble & recommended" }
    ],
    quote: { text: "That is more suitable that they will be known and not abused.", cite: "Qur'an 33:59" }
  },

  {
    id: 'jesus',
    question: "Will Jesus return?",
    answer: "The Qur'an states that Jesus was caused to die and raised to God (5:117, 3:55). There is no explicit mention of his second coming in the Qur'an. Muhammad is the Seal of the Prophets (33:40), implying no prophet comes after him.",
    category: 'theology',
    difficulty: 'medium',
    highlights: [
      { icon: 'book', text: "Muhammad is the Seal" },
      { icon: 'arrow-up', text: "Jesus was raised" }
    ],
    quote: { text: "I caused you to die and raised you to Myself.", cite: "Qur'an 3:55" }
  },
  {
    id: 'music',
    question: "Is music haram?",
    answer: "There is no verse in the Qur'an prohibiting music or singing. God asks, 'Who has forbidden the adornment of Allah which He has produced for His servants?' (7:32). Prohibition comes entirely from Hadith literature.",
    category: 'practice',
    difficulty: 'easy',
    highlights: [
      { icon: 'music', text: "Not forbidden in Qur'an" },
      { icon: 'sun', text: "Enjoy God's blessings" }
    ],
    quote: { text: "Who has forbidden the adornment of Allah?", cite: "Qur'an 7:32" }
  },
  {
    id: 'abrogation',
    question: "Do Qur'anic verses abrogate each other?",
    answer: "The theory of abrogation (Naskh) claims some verses cancel others. However, the Qur'an claims to be free of contradictions (4:82). Verses cited as abrogated often have specific contexts or applications, not cancellations.",
    category: 'authority',
    difficulty: 'hard',
    highlights: [
      { icon: 'check', text: "No contradictions" },
      { icon: 'layers', text: "Context matters" }
    ],
    quote: { text: "Will they not reflect upon the Qur'an? If it had been from other than Allah, they would have found within it much contradiction.", cite: "Qur'an 4:82" }
  },
  {
    id: 'stoning',
    question: "Is stoning (Rajm) the punishment for adultery?",
    answer: "The Qur'an explicitly prescribes 100 lashes for adultery (24:2). Stoning is never mentioned. Stoning was a Jewish law that was reintroduced into Islam via Hadith, contradicting the Qur'an.",
    category: 'authority',
    difficulty: 'medium',
    highlights: [
      { icon: 'book', text: "100 Lashes is the law" },
      { icon: 'x', text: "Stoning is Biblical" }
    ],
    quote: { text: "The [unmarried] woman or [unmarried] man found guilty of sexual intercourse - lash each one of them with a hundred lashes.", cite: "Qur'an 24:2" }
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'quran-sufficient',
    title: "Qur'an is Sufficient",
    description: "Complete evidence that the Qur'an is sufficient for guidance and law.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1SKupp-8L5nGy8uwLvcC1W8M_DXFGAtWB/view?usp=drivesdk",
    meta: "Foundation • Core Doctrine"
  },
  {
    id: 'quran-prohibits-hadith',
    title: "Qur'an Prohibits Hadiths",
    description: "Verses explicitly discouraging the following of other sources.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1txxfUP6R3mqVoBrV2LTw9c3k7-p3K7PG/view?usp=drivesdk",
    meta: "Scriptural Proof • 20 Pages"
  },
  {
    id: 'hadith-contradicts-quran',
    title: "Hadith Contradicts Qur'an",
    description: "Sahih Hadiths that directly oppose Qur'anic verses.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1ZPESAHra1mObITOqQdKiKzZVpTsipgo7/view?usp=drivesdk",
    meta: "Comparison • Critical Analysis"
  },
  {
    id: 'hadith-contradicts-hadith',
    title: "Internal Hadith Conflicts",
    description: "Sahih Hadiths that contradict other Sahih Hadiths.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1ts1Qb_jrywNbU7QWbsHB1s0-gSNEoZAe/view?usp=drivesdk",
    meta: "Internal Consistency"
  },
  {
    id: 'hadith-prohibits-hadith',
    title: "Hadith Prohibits Hadith",
    description: "Narrations where the Prophet forbade writing his sayings.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1u1d2JjOj8V4OY0J_iR90qc6icSvQx6ja/view?usp=drivesdk",
    meta: "Historical • Irony"
  },
  {
    id: 'character-attack',
    title: "Attacks on Prophet's Character",
    description: "Sahih Hadiths that portray the Prophet in a negative light.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1tuVrgbwSvqSOJJxGYWSSfVHn1ehwhGuv/view?usp=drivesdk",
    meta: "Theological Issues"
  },
  {
    id: 'problematic-hadith',
    title: "Problematic Narrations",
    description: "Collection of scientifically or morally questionable hadiths.",
    type: 'pdf',
    link: "https://drive.google.com/file/d/1tv93SbwuPlY0YdFCz6Ww1JwqqSO97v9n/view?usp=drivesdk",
    meta: "Scientific • Logical"
  }
];
