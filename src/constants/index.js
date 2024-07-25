import {
  focuscalm_icon,
  muse2_icon,
  museS_icon,
  openbci_chip_icon,
  openbci_icon,
  waveguard_icon,
  neurosky_icon,
  eno_icon,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  email,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "ビジョン",
    url: "/#vision",
  },
  {
    id: "1",
    title: "事業一覧",
    url: "/#services",
  },
  {
    id: '2',
    title: 'メンバー',
    url: '/people',
  },
  {
    id: "3",
    title: "お問い合わせ",
    url: "/contacts",
  },
];

export const teamMembers = [
  {
    title: "CEO",
    name: "ピーク・エイダン・ゼファー",
    description: "明治大学在学中。15歳で起業、4事業を立ち上げる。脳波研究、ゴルフ連盟会長等活動は多岐にわたる。",
  },
  {
    title: "CTO",
    name: "長嶋隼矢",
    description: "慶應義塾大学大学院在学中。脳波をはじめとし、マルチモーダル言語処理、ロボティクス、時系列解析を含む様々な領域へのAI応用、研究に携わる。",
  },
  {
    title: "開発",
    name: "西村喬行",
    description: "慶應義塾大学大学院在学中。マルチモーダル言語処理、音声認識、CV、LLMに精通。",
  },
  {
    title: "開発",
    name: "平野愼之助",
    description: "慶應義塾大学大学院在学中。マルチモーダル言語処理、AI・機械学習の説明性、説明生成に精通。",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "感性解析",
    text: "脳科学とAIを用いて感情やストレス値、疲労度を算出し、客観的に精神状態をモニタリング",
    date: "In Progress",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "脳波基礎研究",
    text: "簡易的な脳波デバイスからうつ傾向を判定するためのAIモデルの開発をはじめ、その他脳に関連した基礎研究",
    date: "In Progress",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "受託開発",
    text: "画像や言語のマルチモーダルなAIに関する受託開発をはじめとしたAI全般に関する受託開発(独自のモデル構築を含む)",
    date: "In Progress",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Neural HR",
    text: "脳科学とAIを用いた人財と企業の直接的なマッチング",
    date: "Pending",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const newsItems = [
  "代表取締役がHiNODE PiTCHに登壇 (2024/7/20)",
  "[To appear]",
  "[To appear]",
  "[To appear]",
  "[To appear]",
];

export const collabText =
  // "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  "1つのソフトウェアで多くのデバイスに対応可能";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "FocusCalm",
    icon: focuscalm_icon,
    width: 40,
    height: 36,
  },
  {
    id: "1",
    title: "Muse 2",
    icon: muse2_icon,
    width: 40,
    height: 36,
  },
  {
    id: "2",
    title: "Muse S",
    icon: museS_icon,
    width: 40,
    height: 28,
  },
  {
    id: "3",
    title: "OpenBCI Chip",
    icon: openbci_chip_icon,
    width: 40,
    height: 35,
  },
  {
    id: "4",
    title: "OpenBCI",
    icon: openbci_icon,
    width: 38,
    height: 34,
  },
  {
    id: "5",
    title: "WaveGuard",
    icon: waveguard_icon,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "NeuroSky",
    icon: neurosky_icon,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Eno",
    icon: eno_icon,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "email",
    title: "Email",
    url: "mailto:info@neurogica.com", 
    iconUrl: email
  },
  {
    id: "1",
    title: "X(Twitter)",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
