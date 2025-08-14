export type WorkCategory = 'react' | 'vanilla' | 'node'

export interface Work {
  title: string
  icon: string
  description: string
  demoUrl: string
  thumbnail: string
  date: number
  category: WorkCategory
}

export const works: Work[] = [
  {
    title: 'Coderplex Donation Page',
    icon: '💰',
    description:
      'Built a page to accept donations through UPI without any payment gateway and added razorpay payment gateway as fallback for users who want to use Debit/Credit cards to donate!',
    demoUrl: 'https://donate.coderplex.org',
    thumbnail: '/images/coderplex-donate.png',
    date: 1564935578,
    category: 'react',
  },
  {
    title: 'WeddingCloud',
    icon: '📸',
    description:
      'WeddingCloud is a one place cloud solution for managing wedding photos, wedding invitation & many other things of wedding domain.',
    demoUrl: 'https://weddingcloud.in',
    thumbnail: '/images/weddingcloud.png',
    date: 1540751400,
    category: 'react',
  },
  {
    title: 'MycoForest',
    icon: '🍄',
    description:
      'Built a B2B website for a local Cordyceps mushroom seller with a blog and contact form using Gatsby.js and NetlifyCMS as content management system.',
    demoUrl: 'https://mycoforest.com',
    thumbnail: '/images/mycoforest.png',
    date: 1561401000,
    category: 'react',
  },
  {
    title: 'Linklet',
    icon: '🔗',
    description:
      'Linklet as of now contains the links which are shared in whatsapp freeCodeCamp Hyderabad group.',
    demoUrl: 'https://linklet.app',
    thumbnail: '/images/linklet.png',
    date: 1493115120,
    category: 'react',
  },
  {
    title: 'TutorBro',
    icon: '🏫',
    description:
      'First Freelancing Site. Built a landing page to showcase servces offered for tutoring and a careers page to recruit tutors.',
    demoUrl: 'https://tutorbro.com',
    thumbnail: '/images/tutorbro.png',
    date: 1470546000,
    category: 'react',
  },
  {
    title: 'Coderplex',
    icon: '👨‍💻',
    description:
      'Helped coderplex community to build a landing, events, co-learning space and learn guides pages using Next.js, EmotionCSS.',
    demoUrl: 'https://coderplex.org',
    thumbnail: '/images/coderplex.png',
    date: 1501612200,
    category: 'react',
  },
  {
    title: 'TopGit',
    icon: '★',
    description:
      'You can search different programming languages and browse top github projects conveniently.',
    demoUrl: 'https://topgit.vinaypuppal.com',
    thumbnail: '/images/topgit.png',
    date: 1472973240,
    category: 'react',
  },
  {
    title: 'Markdown Editor',
    icon: '📠',
    description: 'A Github flavoured Markdown Editor built using React.js.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/jrMKpe',
    thumbnail: '/images/react_markdown_editor.png',
    date: 1466420400,
    category: 'react',
  },
  {
    title: 'Recipe Book',
    icon: '🍱',
    description:
      'A list of Recipes that the user can create with name and ingredients.All Recipes are stored in users localstorage.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/pbPabb',
    thumbnail: '/images/recipe_book.png',
    date: 1467363600,
    category: 'react',
  },
  {
    title: 'Coderplex: CodeFights',
    icon: '👨‍💻',
    description: 'Built a website for coderplex codefights event with a countdown timer.',
    demoUrl: 'https://coderplex.github.io/codefights/',
    thumbnail: '/images/coderplex-codefights.png',
    date: 1485369000,
    category: 'vanilla',
  },
  {
    title: 'Tribute Page',
    icon: '💁',
    description: 'A Tribute Page For Nandamuri Taraka Rama Rao.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/JXJJaL/',
    thumbnail: '/images/tribute_page_for_NTR.png',
    date: 1460040840,
    category: 'vanilla',
  },
  {
    title: 'Random Quote Generator',
    icon: '👨‍🌾',
    description: 'A simple quote generator that you can tweet and share.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/dMdxKR/',
    thumbnail: '/images/random_quote_generator.png',
    date: 1460559240,
    category: 'vanilla',
  },
  {
    title: 'Wiki Search',
    icon: '🔍',
    description: 'A useful app to search Wikipedia articles.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/WwzxxR/',
    thumbnail: '/images/wiki_search.png',
    date: 1460818440,
    category: 'vanilla',
  },
  {
    title: 'Show Local Weather',
    icon: '🌤',
    description: 'A simple app to locate your current position and tell you the current weather.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/NNLepx',
    thumbnail: '/images/local_weather.png',
    date: 1461596040,
    category: 'vanilla',
  },
  {
    title: 'Basic JavaScript Calculator',
    icon: '🔢',
    description: 'A simple calculator with the ability to chain operations.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/mPYbOX',
    thumbnail: '/images/javaScript_calculator.png',
    date: 1463410440,
    category: 'vanilla',
  },
  {
    title: 'Pomodoro Clock',
    icon: '⏰',
    description: 'Pomodoro timer featuring notification and audible alarm.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/ZWNWxb',
    thumbnail: '/images/pomodoro_clock.png',
    date: 1463496840,
    category: 'vanilla',
  },
  {
    title: 'Twitch Streamers',
    icon: '📺',
    description: 'A simple widget to show online status of Twitch streamers.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/aNrMPK',
    thumbnail: '/images/twitchtv.png',
    date: 1463583240,
    category: 'vanilla',
  },
  {
    title: 'Tic-Tac-Toe Game',
    icon: '🎮',
    description: 'A Tic-Tac-Toe game with unbeatable AI created using Minimax Algorithm.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/aZZGWQ',
    thumbnail: '/images/tic-tac-toe_ai.png',
    date: 1466261640,
    category: 'vanilla',
  },
  {
    title: 'Simon Says Game',
    icon: '🎲',
    description: 'A classic Simon Says Game built for fun.',
    demoUrl: 'https://codepen.io/vinaypuppal/full/MejJZj',
    thumbnail: '/images/simon_says.png',
    date: 1466348040,
    category: 'vanilla',
  },
  {
    title: 'Timestamp Microservice',
    icon: '🕐',
    description:
      'I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date.',
    demoUrl: 'https://vp-timestamp.herokuapp.com',
    thumbnail: '/images/timestamp_microservice.png',
    date: 1465063500,
    category: 'node',
  },
  {
    title: 'Request Header Parser Microservice',
    icon: '👻',
    description: 'I can get the IP address, language and operating system for my browser.',
    demoUrl: 'https://vp-header-parser.herokuapp.com',
    thumbnail: '/images/header_parser_microservice.png',
    date: 1465123500,
    category: 'node',
  },
  {
    title: 'URL Shortener Microservice',
    icon: '👞',
    description:
      'I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.',
    demoUrl: 'http://vp-shorturl.herokuapp.com',
    thumbnail: '/images/url_shortener_microservice.png',
    date: 1465126920,
    category: 'node',
  },
  {
    title: 'Image Search Abstraction Layer',
    icon: '👿',
    description:
      'I can get the image URLs, alt text and page urls for a set of images relating to a given search string.',
    demoUrl: 'https://vp-images.herokuapp.com',
    thumbnail: '/images/image_search_abstraction_layer.png',
    date: 1465223220,
    category: 'node',
  },
  {
    title: 'File MetaData Microservice',
    icon: '📁',
    description:
      'I can submit a FormData object that includes a file upload. And get File metadata as response.',
    demoUrl: 'https://vp-file-metadata.herokuapp.com/',
    thumbnail: '/images/file_metadata_microservice.png',
    date: 1465397640,
    category: 'node',
  },
]
