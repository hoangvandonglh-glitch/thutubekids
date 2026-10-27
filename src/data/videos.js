import dynamicVideosJson from './dynamic-videos.json';

// Curated safe kids videos from YouTube
// All videos are pre-verified via YouTube oEmbed to guarantee 100% embeddable & active thumbnails

export const categories = [
  { id: 'all', label: '⭐ All Videos', emoji: '⭐' },
  { id: 'nursery-rhymes', label: '🎵 Nursery Rhymes', emoji: '🎵' },
  { id: 'animals', label: '🦁 Animals', emoji: '🦁' },
  { id: 'learning', label: '📚 Learn & Grow', emoji: '📚' },
  { id: 'stories', label: '📖 Stories', emoji: '📖' },
  { id: 'cartoons', label: '🎨 Cartoons', emoji: '🎨' },
  { id: 'science', label: '🔬 Science', emoji: '🔬' },
  { id: 'music', label: '🎶 Music & Dance', emoji: '🎶' },
];

export const videos = [
  // 1. Baby Shark Dance
  {
    id: 'v1',
    slug: 'baby-shark-dance',
    title: 'Baby Shark Dance 🦈',
    channel: 'Pinkfong! Kids Songs & Stories',
    category: 'nursery-rhymes',
    youtubeId: 'XqZsoesa55w',
    thumbnail: 'https://img.youtube.com/vi/XqZsoesa55w/hqdefault.jpg',
    duration: '2:17',
    views: '13B',
    ageRange: '0-5',
    badge: '🔥 Most Viewed',
    description: 'Baby Shark Dance is the world’s most watched children song of all time! Produced by Pinkfong, this bright and bouncy animated music video features cute sea creatures and catchy choreography that toddlers, preschoolers, and families love to dance along with. Follow Baby Shark, Mommy Shark, Daddy Shark, Grandma Shark, and Grandpa Shark on their underwater ocean adventure!',
    learningPoints: [
      'Identifies family members: baby, mommy, daddy, grandma, and grandpa',
      'Encourages gross motor skills and hand-eye coordination with the iconic shark clamp motions',
      'Develops musical rhythm, tempo recognition, and energetic physical exercise'
    ],
    lyrics: `Baby shark, doo-doo, doo-doo\nBaby shark, doo-doo, doo-doo\nBaby shark, doo-doo, doo-doo\nBaby shark!\n\nMommy shark, doo-doo, doo-doo...\nDaddy shark, doo-doo, doo-doo...\nGrandma shark, doo-doo, doo-doo...\nGrandpa shark, doo-doo, doo-doo...\nLet's go hunt, doo-doo, doo-doo!\nRun away, doo-doo, doo-doo!\nSafe at last, doo-doo, doo-doo!\nIt's the end, doo-doo, doo-doo!`,
    parentTips: 'Encourage your child to stand up and do the small baby shark finger claps up to the big grandpa shark arm movements. It is fantastic light exercise before nap or mealtime!',
    tags: ['baby shark', 'pinkfong', 'dance', 'nursery rhyme', 'ocean animals']
  },

  // 2. Wheels on the Bus
  {
    id: 'v2',
    slug: 'wheels-on-the-bus',
    title: 'Wheels on the Bus 🚌',
    channel: 'Cocomelon - Nursery Rhymes',
    category: 'nursery-rhymes',
    youtubeId: 'e_04ZrNroTo',
    thumbnail: 'https://img.youtube.com/vi/e_04ZrNroTo/hqdefault.jpg',
    duration: '20:04',
    views: '5.2B',
    ageRange: '0-6',
    badge: '⭐ Popular',
    description: 'Hop aboard the bright yellow school bus with JJ, his loving family, and playful animal friends in this timeless nursery rhyme classic! As the bus travels through town, kids will explore the sights and sounds of public transport — from the wipers swishing back and forth to the horn honking, wipers swishing, and babies going wah wah wah.',
    learningPoints: [
      'Learn spatial concepts and descriptive sounds (round and round, swish swish swish, beep beep beep)',
      'Introduces vehicles, everyday transport, and community safety concepts',
      'Reinforces social-emotional comfort with friendly parents comforting their little ones'
    ],
    lyrics: `The wheels on the bus go round and round,\nRound and round, round and round.\nThe wheels on the bus go round and round,\nAll through the town!\n\nThe wipers on the bus go swish, swish, swish...\nThe horn on the bus goes beep, beep, beep...\nThe baby on the bus goes wah, wah, wah...\nThe mommy on the bus says "Shh, shh, shh"...`,
    parentTips: 'Ask your toddler what other sounds a vehicle makes (like an engine vrooom or door open and shut) while imitating the motions together.',
    tags: ['cocomelon', 'wheels on the bus', 'vehicles', 'rhymes', 'sing along']
  },

  // 3. Twinkle Twinkle Little Star
  {
    id: 'v3',
    slug: 'twinkle-twinkle-little-star',
    title: 'Twinkle Twinkle Little Star ⭐',
    channel: 'Super Simple Songs',
    category: 'nursery-rhymes',
    youtubeId: 'yCjJyiqpAuU',
    thumbnail: 'https://img.youtube.com/vi/yCjJyiqpAuU/hqdefault.jpg',
    duration: '1:59',
    views: '1.8B',
    ageRange: '0-4',
    badge: '💫 Bedtime',
    description: 'A gentle, heartwarming lullaby animation created by Super Simple Songs. Perfect for quiet time, naptime, or preparing little dreamers for bed. Watch a friendly smiling star twinkle high up in the quiet midnight sky above sleepy owls and peaceful clouds, accompanied by soothing acoustic melodies.',
    learningPoints: [
      'Calms nervous energy and promotes healthy bedtime routines',
      'Introduces astronomy concepts like night sky, stars, and diamonds in a gentle poetic metaphor',
      'Enhances listening skills and language cadence'
    ],
    lyrics: `Twinkle, twinkle, little star,\nHow I wonder what you are!\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are!`,
    parentTips: 'Dim the room lights and play this peaceful melody at the end of the evening to signal sleep time for your little ones.',
    tags: ['bedtime', 'lullaby', 'super simple songs', 'sleep', 'night sky']
  },

  // 4. Five Little Monkeys
  {
    id: 'v4',
    slug: 'five-little-monkeys',
    title: 'Five Little Monkeys Jumping On The Bed 🐒',
    channel: 'Little BoBo Nursery Rhymes',
    category: 'nursery-rhymes',
    youtubeId: 'b0NHrFNZWh0',
    thumbnail: 'https://img.youtube.com/vi/b0NHrFNZWh0/hqdefault.jpg',
    duration: '2:37',
    views: '320M',
    ageRange: '1-6',
    badge: '🍌 Fun Rhyme',
    description: 'Jump along with five playful little monkeys who cannot resist bouncing up and down on the mattress! But when one falls off and bumps his head, Mama calls the doctor and the doctor gives famous strict instructions: "No more monkeys jumping on the bed!" This classic counting-down song teaches basic safety rules in an entertaining, rhythmic format.',
    learningPoints: [
      'Teaches reverse counting from 5 down to zero (subtraction fundamentals)',
      'Reinforces home safety lessons regarding jumping on furniture and beds',
      'Teaches the role of doctors, parents, and following caring instructions'
    ],
    lyrics: `Five little monkeys jumping on the bed,\nOne fell off and bumped his head!\nMama called the doctor and the doctor said:\n"No more monkeys jumping on the bed!"\n\nFour little monkeys jumping on the bed...\nThree little monkeys jumping on the bed...\nTwo little monkeys jumping on the bed...\nOne little monkey jumping on the bed!\nNo little monkeys jumping on the bed!`,
    parentTips: 'Use your fingers to count down from 5 to 0 with your child to visually represent each monkey taking a rest.',
    tags: ['monkeys', 'counting', 'rhyme', 'subtraction', 'safety']
  },

  // 5. Johny Johny Yes Papa
  {
    id: 'v5',
    slug: 'johny-johny-yes-papa',
    title: 'Johny Johny Yes Papa 👶',
    channel: 'LooLoo Kids',
    category: 'nursery-rhymes',
    youtubeId: 'F4tHL8reNCs',
    thumbnail: 'https://img.youtube.com/vi/F4tHL8reNCs/hqdefault.jpg',
    duration: '3:04',
    views: '6.3B',
    ageRange: '1-5',
    badge: '⭐ Classic',
    description: 'The globally famous, playful nursery rhyme from LooLoo Kids featuring little Johny sneaking into the kitchen for sugar cubes! When Papa catches him, Johny cheekily denies eating sugar until Papa asks him to "Open your mouth!" — followed by contagious laughter: "Ha! Ha! Ha!".',
    learningPoints: [
      'Explores honesty, trust, and loving communication between parent and child',
      'Introduces dialogue exchange and call-and-response conversational flow',
      'Highlights the importance of healthy eating and limiting sugary snacks'
    ],
    lyrics: `Johny, Johny?\nYes, Papa?\nEating sugar?\nNo, Papa!\nTelling lies?\nNo, Papa!\nOpen your mouth!\nHa! Ha! Ha!`,
    parentTips: 'Act out the two roles with your child — you can play Papa and let your child play Johny for lots of giggles!',
    tags: ['johny johny', 'looloo kids', 'popular', 'toddler song']
  },

  // 6. Baa Baa Black Sheep
  {
    id: 'v6',
    slug: 'baa-baa-black-sheep',
    title: 'Baa Baa Black Sheep 🐑',
    channel: 'Cocomelon - Nursery Rhymes',
    category: 'nursery-rhymes',
    youtubeId: 'MR5XSOdjKMA',
    thumbnail: 'https://img.youtube.com/vi/MR5XSOdjKMA/hqdefault.jpg',
    duration: '2:27',
    views: '1.2B',
    ageRange: '0-5',
    badge: '🎵 Cute Song',
    description: 'Sing along with JJ and adorable farm animals in this vibrant rendition of Baa Baa Black Sheep. Learn about sharing wool, counting three bags full, and discovering how farm animals help provide cozy clothes for the master, the dame, and the little boy who lives down the lane.',
    learningPoints: [
      'Understands generosity, sharing, and trade in a traditional folk rhyme',
      'Introduces farm animals and animal coat textures (soft warm wool)',
      'Builds foundational vocabulary with rhyming pairs (full / wool, lane / dame)'
    ],
    lyrics: `Baa, baa, black sheep, have you any wool?\nYes, sir, yes, sir, three bags full!\nOne for the master, and one for the dame,\nAnd one for the little boy who lives down the lane!`,
    parentTips: 'Show your child a wool sweater or blanket after the song so they understand where real wool comes from!',
    tags: ['cocomelon', 'baa baa black sheep', 'farm animals', 'nursery rhymes']
  },

  // 7. Bath Song
  {
    id: 'v7',
    slug: 'the-bath-song-cocomelon',
    title: 'The Bath Song 🛁',
    channel: 'Cocomelon - Nursery Rhymes',
    category: 'nursery-rhymes',
    youtubeId: 'WRVsOCh907o',
    thumbnail: 'https://img.youtube.com/vi/WRVsOCh907o/hqdefault.jpg',
    duration: '2:49',
    views: '6.5B',
    ageRange: '0-5',
    badge: '🫧 Healthy Habit',
    description: 'Transform bath time into an exciting splashing adventure! Set to the familiar tune of Baby Shark and 1-2-3-4-5 Once I Caught a Fish Alive, JJ and his brother show kids how fun and comforting it is to wash their hair, clean their arms, scrub their toes, and play with bubble toys.',
    learningPoints: [
      'Eliminates fear of bath water and hair washing through positive association',
      'Teaches daily hygiene and independence in washing body parts',
      'Reinforces clean habits with cheerful musical cues'
    ],
    lyrics: `It's time to take a bath!\nWash your hair, wash your hair, wash your hair!\nScrub your arms, scrub your arms, scrub your arms!\nWash your face, wash your face, wash your face!\nAll squeaky clean, yay!`,
    parentTips: 'Play this song on your phone in the bathroom before bath time to get reluctant toddlers excited about jumping in the tub.',
    tags: ['cocomelon', 'bath song', 'hygiene', 'toddler routine', 'bubbles']
  },

  // 8. BINGO Dog Song
  {
    id: 'v8',
    slug: 'bingo-dog-song',
    title: 'B-I-N-G-O Dog Song 🐶',
    channel: 'Super Simple Songs',
    category: 'nursery-rhymes',
    youtubeId: '9mmF8zOlh_g',
    thumbnail: 'https://img.youtube.com/vi/9mmF8zOlh_g/hqdefault.jpg',
    duration: '2:46',
    views: '1.4B',
    ageRange: '1-6',
    badge: '🐕 Favorite',
    description: 'There was a farmer had a dog, and Bingo was his name-o! In this beloved spelling and clapping game by Super Simple Songs, children practice letter recognition as each letter of B-I-N-G-O is replaced one by one with a rhythmic hand clap, tap, or pat.',
    learningPoints: [
      'Letter spelling practice for foundational early literacy',
      'Auditory inhibition and timing control (replacing spoken letters with hand claps)',
      'Builds pattern recognition and memory recall'
    ],
    lyrics: `There was a farmer had a dog,\nAnd Bingo was his name-o.\nB-I-N-G-O, B-I-N-G-O, B-I-N-G-O,\nAnd Bingo was his name-o!\n\n(Clap)-I-N-G-O...\n(Clap)-(Clap)-N-G-O...\n(Clap)-(Clap)-(Clap)-G-O...\n(Clap)-(Clap)-(Clap)-(Clap)-O...\n(Clap)-(Clap)-(Clap)-(Clap)-(Clap)!`,
    parentTips: 'Clap together on the silent letters — this exercise is proven by child development experts to enhance focus and impulse control!',
    tags: ['bingo', 'spelling', 'dog', 'clapping game', 'super simple songs']
  },

  // 9. Let's Go To The Zoo
  {
    id: 'v9',
    slug: 'lets-go-to-the-zoo',
    title: "Let's Go To The Zoo 🦁",
    channel: 'Super Simple Songs',
    category: 'animals',
    youtubeId: 'OwRmivbNgQk',
    thumbnail: 'https://img.youtube.com/vi/OwRmivbNgQk/hqdefault.jpg',
    duration: '3:41',
    views: '450M',
    ageRange: '1-7',
    badge: '🐾 Movement',
    description: 'Stomp like elephants, jump like kangaroos, swing like monkeys, waddle like penguins, and slither like snakes! Let’s Go To The Zoo is an irresistible movement song that gets kids off the couch and acting out dynamic animal behaviors right in the living room.',
    learningPoints: [
      'Recognizes diverse animal species and their unique ways of moving',
      'Full body aerobic activity improving balance, coordination, and posture',
      'Action verbs in English: stomp, jump, swing, waddle, slither, swim'
    ],
    lyrics: `Stomp like elephants, stomp, stomp, stomp!\nJump like kangaroos, jump, jump, jump!\nSwing like monkeys, swing, swing, swing!\nWaddle like penguins, waddle, waddle, waddle!\nSlither like snakes, sss, sss, sss!\nSwim like polar bears, swim, swim, swim!`,
    parentTips: 'Clear some floor space and join your child doing each animal action. It is a fantastic energizer when kids are feeling restless indoors.',
    tags: ['zoo', 'animals', 'action song', 'gross motor', 'super simple songs']
  },

  // 10. Walking In The Jungle
  {
    id: 'v10',
    slug: 'walking-in-the-jungle',
    title: 'Walking In The Jungle 🌴',
    channel: 'Super Simple Songs',
    category: 'animals',
    youtubeId: 'GoSq-yZcJ-4',
    thumbnail: 'https://img.youtube.com/vi/GoSq-yZcJ-4/hqdefault.jpg',
    duration: '3:25',
    views: '620M',
    ageRange: '2-8',
    badge: '🌿 Safari',
    description: 'We are walking in the jungle, we are not afraid! Join curious explorers as they tiptoe through tall grass, listen closely to mysterious sounds, and encounter frogs, monkeys, toucans, and even a roaring tiger! An exciting suspenseful adventure with a friendly cheerful ending.',
    learningPoints: [
      'Teaches auditory discrimination: listening carefully to animal calls in the wild',
      'Movement words: walking, running, jumping, skipping',
      'Confronts mild suspense and courage in an imaginative, safe environment'
    ],
    lyrics: `Walking in the jungle. Walking in the jungle.\nWe're not afraid. We're not afraid.\nOne step, two steps, three steps forward.\nOne step, two steps, three steps back.\nStop. Listen. What's that? It's a frog!`,
    parentTips: 'Have your child close their eyes when the music says "Listen... what is that?" and guess what animal made that sound before looking.',
    tags: ['jungle', 'safari', 'animals', 'exploration', 'movement']
  },

  // 11. I Have A Pet
  {
    id: 'v11',
    slug: 'i-have-a-pet-animal-song',
    title: 'I Have A Pet - Animal Song 🐱',
    channel: 'Super Simple Songs',
    category: 'animals',
    youtubeId: 'pWepfJ-8XU0',
    thumbnail: 'https://img.youtube.com/vi/pWepfJ-8XU0/hqdefault.jpg',
    duration: '2:09',
    views: '380M',
    ageRange: '1-6',
    badge: '🐶 Pets',
    description: 'Do you have a pet? Meet a friendly companion animal lineup: dogs that go woof, cats that go meow, mice that squeak, birds that chirp, fish that go glub glub, and a surprisingly big lion pet that roars! A sweet and comical animal sounds song designed for early learners.',
    learningPoints: [
      'Introduces domestic pets and common household animal care concepts',
      'Sound mimicry and phonological awareness (woof, meow, squeak, tweet, glub)',
      'Sentence structure: "I have a pet, he is a dog, and he says..."'
    ],
    lyrics: `I have a pet.\nHe is a dog.\nAnd he says, "Woof, woof, woof, woof, woof!"\n\nI have a pet.\nShe is a cat.\nAnd she says, "Meow, meow, meow, meow, meow!"`,
    parentTips: 'Ask your child what their dream pet would be and what sound it makes!',
    tags: ['pets', 'animals', 'dog', 'cat', 'sounds']
  },

  // 12. The ABC Song
  {
    id: 'v12',
    slug: 'the-abc-alphabet-song',
    title: 'The ABC Song - Alphabet for Kids 🔤',
    channel: 'KidsTV123',
    category: 'learning',
    youtubeId: '75p-N9YKqNo',
    thumbnail: 'https://img.youtube.com/vi/75p-N9YKqNo/hqdefault.jpg',
    duration: '2:11',
    views: '720M',
    ageRange: '2-6',
    badge: '🎓 Essential',
    description: 'The golden standard of early English literacy! KidsTV123 delivers a crystal-clear, melodious phonetic alphabet song where each letter from A to Z is distinctly pronounced at a gentle tempo, allowing young children to absorb proper English pronunciation with zero rushing.',
    learningPoints: [
      'Mastery of all 26 uppercase and lowercase letters of the English alphabet',
      'Phonics foundation and distinct phonetic clarity without slurring L-M-N-O-P',
      'Memorization through classical rhyming melody'
    ],
    lyrics: `A B C D E F G\nH I J K L M N O P\nQ R S, T U V\nW X, Y and Z\nNow I know my ABCs,\nNext time won't you sing with me?`,
    parentTips: 'Pause after groups of letters and point to alphabet flashcards or letters around the house (on cereal boxes or picture books).',
    tags: ['abc', 'alphabet', 'reading', 'phonics', 'english learning']
  },

  // 13. Counting 1-10 Song
  {
    id: 'v13',
    slug: 'counting-numbers-1-to-10',
    title: 'Counting Numbers 1-10 Song 🔢',
    channel: 'The Singing Walrus',
    category: 'learning',
    youtubeId: 'DR-cfDsHCGA',
    thumbnail: 'https://img.youtube.com/vi/DR-cfDsHCGA/hqdefault.jpg',
    duration: '2:40',
    views: '290M',
    ageRange: '2-6',
    badge: '🧮 Math',
    description: 'Counting from 1 to 10 has never been so groovy! The Singing Walrus guides preschool and kindergarten children through counting forwards and backwards with vibrant numbers, bright graphics, and energetic funk-pop beats that make early math deeply enjoyable.',
    learningPoints: [
      'One-to-one numerical correspondence from 1 through 10',
      'Visual numeral recognition alongside audio spoken numbers',
      'Counting backwards (10 to 1) for early subtraction intuition'
    ],
    lyrics: `1, 2, 3!\n4, 5, 6!\n7, 8, 9, and 10!\nLet's count from 1 to 10 together!\n1, 2, 3, 4, 5, 6, 7, 8, 9, 10!`,
    parentTips: 'Have 10 small toy cars or building blocks ready and drop them into a box one by one in time with the song.',
    tags: ['numbers', 'counting', 'math', 'preschool', 'the singing walrus']
  },

  // 14. Shapes Song for Kids
  {
    id: 'v14',
    slug: 'shapes-song-for-kids',
    title: 'Shapes Song for Kids 🔷',
    channel: 'The Singing Walrus',
    category: 'learning',
    youtubeId: 'OEbRDtCAFdU',
    thumbnail: 'https://img.youtube.com/vi/OEbRDtCAFdU/hqdefault.jpg',
    duration: '4:11',
    views: '110M',
    ageRange: '2-7',
    badge: '📐 Geometry',
    description: 'Circles, squares, triangles, and rectangles come alive! Meet colorful shape characters as they show their sides, corners, and where you can spot them in everyday objects like clocks, windows, pizza slices, and doors throughout your home.',
    learningPoints: [
      'Geometry identification: circle, square, triangle, rectangle',
      'Understanding geometric attributes: count 3 sides and 3 corners on a triangle, 4 equal sides on a square',
      'Real-world spatial observation and environment mapping'
    ],
    lyrics: `A circle goes round and round!\nA square has four equal sides!\nA triangle has three sides and three corners!\nA rectangle has two long sides and two short sides!`,
    parentTips: 'Go on a "Shape Hunt" around your living room after watching to find three circles and three rectangles.',
    tags: ['shapes', 'geometry', 'early math', 'educational']
  },

  // 15. I See Something Blue
  {
    id: 'v15',
    slug: 'colors-song-i-see-something-blue',
    title: 'I See Something Blue - Colors Song 🌈',
    channel: 'Super Simple Songs',
    category: 'learning',
    youtubeId: 'jYAWf8Y91hA',
    thumbnail: 'https://img.youtube.com/vi/jYAWf8Y91hA/hqdefault.jpg',
    duration: '2:49',
    views: '410M',
    ageRange: '1-6',
    badge: '🎨 Colors',
    description: 'Blue, yellow, red, and purple! I See Something Blue is a wonderful musical game of "I Spy" that teaches kids to spot distinct colors in the environment. Sing the call, search the room, and point out objects sharing each beautiful hue.',
    learningPoints: [
      'Primary and secondary color recognition (blue, yellow, red, purple)',
      'Visual scanning and concentration skills',
      'English sentence frames: "I see something blue, find something blue!"'
    ],
    lyrics: `Blue! I see something blue.\nYellow! I see something yellow.\nRed! I see something red.\nPurple! I see something purple.\nLook around, do you see it too?`,
    parentTips: 'Give your child a yellow crayon or toy and challenge them to hold it up when that color verse begins!',
    tags: ['colors', 'super simple songs', 'preschool', 'visual skills']
  },

  // 16. Body Parts Song
  {
    id: 'v16',
    slug: 'body-parts-for-kids',
    title: 'My Body Parts - Head to Toes 🧠',
    channel: 'English Singsing',
    category: 'learning',
    youtubeId: 'SUt8q0EKbms',
    thumbnail: 'https://img.youtube.com/vi/SUt8q0EKbms/hqdefault.jpg',
    duration: '3:15',
    views: '85M',
    ageRange: '2-7',
    badge: '🖐️ Anatomy',
    description: 'Head, eyes, nose, mouth, ears, hands, fingers, and toes! English Singsing provides a joyful interactive vocabulary lesson teaching little ones what each part of their body is called and what amazing things our bodies can do every single day.',
    learningPoints: [
      'Body anatomy vocabulary in clear English',
      'Proprioception and spatial self-awareness',
      'Sensory organ function: eyes to see, ears to hear, nose to smell, mouth to taste'
    ],
    lyrics: `Touch your head! Touch your eyes!\nTouch your nose! Touch your ears!\nClap your hands! Wiggle your toes!\nThis is my body, from head to toes!`,
    parentTips: 'Play a game of "Simon Says" focusing on body parts (e.g., "Simon says touch your left knee!") right after.',
    tags: ['body parts', 'english singsing', 'anatomy', 'vocabulary']
  },

  // 17. The Three Little Pigs
  {
    id: 'v17',
    slug: 'the-three-little-pigs-story',
    title: 'The Three Little Pigs - Fairy Tale 🐷',
    channel: 'KiddoStories',
    category: 'stories',
    youtubeId: 'CtP83CWOMwc',
    thumbnail: 'https://img.youtube.com/vi/CtP83CWOMwc/hqdefault.jpg',
    duration: '8:42',
    views: '95M',
    ageRange: '3-9',
    badge: '📖 Classic Tale',
    description: 'The timeless fable of three brother pigs who set out to build houses of straw, sticks, and solid brick. When the Big Bad Wolf comes knocking with his mighty huff and puff, only hard work, dedication, and patience stand the test of danger. A beautifully animated moral bedtime story for all ages.',
    learningPoints: [
      'The value of hard work, perseverance, and thorough preparation',
      'Cause and effect in narrative structure',
      'Understanding building materials: straw vs. wood vs. brick durability'
    ],
    lyrics: `Little pig, little pig, let me come in!\nNot by the hair on my chinny-chin-chin!\nThen I'll huff, and I'll puff, and I'll blow your house in!`,
    parentTips: 'Talk with your child about why taking shortcuts (like building with straw) didn’t work out, and why taking your time is rewarding.',
    tags: ['three little pigs', 'fairy tale', 'bedtime story', 'moral tale']
  },

  // 18. The Lion and the Mouse
  {
    id: 'v18',
    slug: 'the-lion-and-the-mouse',
    title: 'The Lion and the Mouse 🐭',
    channel: 'HeyKids - Bedtime Stories',
    category: 'stories',
    youtubeId: 'xeBMOdQy2mM',
    thumbnail: 'https://img.youtube.com/vi/xeBMOdQy2mM/hqdefault.jpg',
    duration: '4:15',
    views: '60M',
    ageRange: '3-8',
    badge: '🦁 Moral Fable',
    description: 'Aesop’s legendary fable about kindness and empathy. A mighty lion spares a tiny mouse who accidentally awakens him. Later, when the lion is trapped in a hunter’s strong rope net, the little mouse returns and chews through the ropes to set the king of the jungle free! No act of kindness, no matter how small, is ever wasted.',
    learningPoints: [
      'Teaches that size does not determine value or ability to help others',
      'The importance of keeping promises and showing mercy',
      'Builds empathy, friendship across differences, and gratefulness'
    ],
    lyrics: `A little friend can be a great help!\nEven the smallest mouse can save the mighty lion!`,
    parentTips: 'Ask your child: "How can someone small, like you, help someone big like mommy or daddy?" Celebrate their answers!',
    tags: ['lion and mouse', 'aesop fable', 'moral story', 'kindness', 'heykids']
  },

  // 19. Mila and Morphle - Magic Letters
  {
    id: 'v19',
    slug: 'morphle-magic-letters',
    title: 'Mila and Morphle - Magic Letters 🎨',
    channel: 'Mila and Morphle',
    category: 'cartoons',
    youtubeId: 'JyWtQnXSFAA',
    thumbnail: 'https://img.youtube.com/vi/JyWtQnXSFAA/hqdefault.jpg',
    duration: '11:20',
    views: '140M',
    ageRange: '2-8',
    badge: '✨ Cartoon Fun',
    description: 'Mila has a magical red pet named Morphle who can morph into anything he wants! In this delightful animated episode, Morphle transforms into alphabet letters, helicopters, and playful creatures to solve everyday neighborhood puzzles with Mila.',
    learningPoints: [
      'Sparks imagination, creativity, and whimsical problem-solving',
      'Letter transformations and visual storytelling',
      'Teamwork and looking out for friends in the community'
    ],
    lyrics: `Morphle can morph into anything Mila dreams of!\nRed, round, and full of magic fun!`,
    parentTips: 'Ask your child: "If you had a pet like Morphle, what is the first thing you would ask him to morph into?"',
    tags: ['morphle', 'cartoon', 'magic pet', 'mila', 'animation']
  },

  // 20. Clean Up Song
  {
    id: 'v20',
    slug: 'clean-up-song-for-kids',
    title: 'Clean Up Song for Children 🧹',
    channel: 'ELF Learning',
    category: 'cartoons',
    youtubeId: 'oY-H2WGThc8',
    thumbnail: 'https://img.youtube.com/vi/oY-H2WGThc8/hqdefault.jpg',
    duration: '2:38',
    views: '210M',
    ageRange: '1-6',
    badge: '🌟 Good Habits',
    description: 'Clean up, clean up, everybody everywhere! Turn tidying up toys, blocks, and books from a chore into a high-energy group game. Animated friendly helpers demonstrate putting toys back in boxes, sweeping the floor, and keeping playroom spaces neat and organized.',
    learningPoints: [
      'Establishes responsibility and pride in maintaining clean living spaces',
      'Cooperative teamwork and following through to completion',
      'Positive reinforcement around household chores'
    ],
    lyrics: `Clean up, clean up, everybody let's clean up!\nPick up your toys, put them away!\nClean up, clean up, we can do it together!\nClean up, clean up, today!`,
    parentTips: 'Start playing this song as the 5-minute warning before dinner or bedtime and race together to put away 10 toys before the song ends!',
    tags: ['clean up', 'habits', 'chores', 'playroom', 'elf learning']
  },

  // 21. StoryBots - We Are The Planets
  {
    id: 'v21',
    slug: 'solar-system-storybots',
    title: 'We Are The Planets - Solar System 🚀',
    channel: 'Netflix Jr. StoryBots',
    category: 'science',
    youtubeId: 'ZHAqT4hXnMw',
    thumbnail: 'https://img.youtube.com/vi/ZHAqT4hXnMw/hqdefault.jpg',
    duration: '2:14',
    views: '180M',
    ageRange: '3-9',
    badge: '🪐 Science Hit',
    description: 'Blast off with the Emmy-winning StoryBots from Netflix Jr.! In this thrilling upbeat rock anthem, all eight planets of our solar system introduce themselves: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune! Packed with genuine astronomical facts rendered in spectacular kid-friendly style.',
    learningPoints: [
      'Memorizes the order and names of the 8 planets in our solar system',
      'Planetary characteristics: Mercury is closest to the sun, Jupiter is the biggest gas giant, Saturn has stunning rings',
      'Cultivates curiosity about space exploration and astronomy'
    ],
    lyrics: `We are the planets big and round!\nWatch us happily fly around!\nI'm Mercury, I'm closest to the sun!\nI'm Venus, the hottest one!\nI'm Earth, your home in space!\nI'm Mars, a red and rocky place!`,
    parentTips: 'Grab a basketball (Sun) and an apple (Earth) to demonstrate how the planets orbit around our central star in the night sky.',
    tags: ['solar system', 'storybots', 'netflix jr', 'planets', 'space science']
  },

  // 22. How Does A Seed Become A Plant?
  {
    id: 'v22',
    slug: 'how-plants-grow-seed-to-plant',
    title: 'How Does A Seed Become A Plant? 🌱',
    channel: 'SciShow Kids',
    category: 'science',
    youtubeId: 'tkFPyue5X3Q',
    thumbnail: 'https://img.youtube.com/vi/tkFPyue5X3Q/hqdefault.jpg',
    duration: '3:47',
    views: '12M',
    ageRange: '3-10',
    badge: '🌿 Botany',
    description: 'Join Jessi and her robot rat friend Squeaks from SciShow Kids to discover the secret life of seeds! How does a tiny hard seed buried underground know when to sprout, drink water through roots, and grow leaves that reach for warm sunshine? A fun, real-science introduction for budding botanists.',
    learningPoints: [
      'Explains germination: seed coat, embryo, roots, and sprout',
      'Plant essentials for survival: soil, water, air, and sunlight',
      'Scientific observation and the plant life cycle'
    ],
    lyrics: `Seeds need soil, water, and warm sunlight!\nRoots grow down, shoots grow up toward the sky!`,
    parentTips: 'Plant a bean seed inside a moist paper towel in a clear plastic cup so your child can watch the actual root burst out in 3-4 days!',
    tags: ['plants', 'scishow kids', 'biology', 'nature', 'science for kids']
  },

  // 23. Water Cycle for Kids
  {
    id: 'v23',
    slug: 'the-water-cycle-for-kids',
    title: 'The Water Cycle Explained 💧',
    channel: 'National Science Foundation News',
    category: 'science',
    youtubeId: 'al-do-HGuIk',
    thumbnail: 'https://img.youtube.com/vi/al-do-HGuIk/hqdefault.jpg',
    duration: '3:50',
    views: '18M',
    ageRange: '4-10',
    badge: '☁️ Earth Science',
    description: 'Where does rain come from, and where does river water go? Follow water drops through the fascinating never-ending journey of evaporation, condensation, precipitation, and collection. Clear scientific animation that turns complex earth science into intuitive wonder.',
    learningPoints: [
      'The three primary phases of the water cycle: evaporation, condensation, precipitation',
      'The water cycle powers weather, plants, rivers, and our drinking water',
      'Environmental stewardship and the importance of clean water'
    ],
    lyrics: `Evaporation goes up to the sky!\nCondensation forms clouds way up high!\nPrecipitation brings raindrops falling down!`,
    parentTips: 'On a rainy day, look out the window together and trace where the puddle water will go once the sun comes out.',
    tags: ['water cycle', 'rain', 'weather', 'earth science', 'nsf']
  },

  // 24. Head, Shoulders, Knees and Toes
  {
    id: 'v24',
    slug: 'head-shoulders-knees-and-toes',
    title: 'Head, Shoulders, Knees & Toes 💃',
    channel: 'Super Simple Songs',
    category: 'music',
    youtubeId: 'WX8HmogNyCY',
    thumbnail: 'https://img.youtube.com/vi/WX8HmogNyCY/hqdefault.jpg',
    duration: '2:14',
    views: '920M',
    ageRange: '1-6',
    badge: '⚡ Speed Up',
    description: 'Get ready to move and speed up! In this high-energy Super Simple Songs classic, kids touch their head, shoulders, knees, and toes along with eyes, ears, mouth, and nose. With each verse, the tempo increases faster and faster for non-stop laughter and exercise.',
    learningPoints: [
      'Rapid motor reaction time and cross-lateral physical coordination',
      'Body parts reinforcement under changing musical tempo',
      'Cardiovascular workout and energetic play'
    ],
    lyrics: `Head, shoulders, knees, and toes, knees and toes!\nHead, shoulders, knees, and toes, knees and toes!\nAnd eyes and ears and mouth and nose!\nHead, shoulders, knees, and toes, knees and toes!\n(Now let's do it faster!)`,
    parentTips: 'Challenge family members to see who can keep up with the fastest final round without making a silly mistake!',
    tags: ['head shoulders knees and toes', 'exercise', 'dance', 'super simple songs']
  },

  // 25. If You're Happy and You Know It
  {
    id: 'v25',
    slug: 'if-youre-happy-and-you-know-it',
    title: "If You're Happy and You Know It 😊",
    channel: 'Super Simple Songs',
    category: 'music',
    youtubeId: 'l4WNrvVjiTw',
    thumbnail: 'https://img.youtube.com/vi/l4WNrvVjiTw/hqdefault.jpg',
    duration: '2:01',
    views: '350M',
    ageRange: '0-6',
    badge: '👏 Happiness',
    description: 'If you’re happy and you know it, clap your hands! Stomp your feet! Shout hurray! Do all three! A cheerful interactive song that helps kids express and celebrate joyful emotions through whole-body movement and musical expressions.',
    learningPoints: [
      'Emotional awareness and healthy physical expressions of joy',
      'Sequential instructions: combining clapping, stomping, and shouting into one multi-step routine',
      'Positive social engagement'
    ],
    lyrics: `If you're happy and you know it, clap your hands! (Clap, clap)\nIf you're happy and you know it, clap your hands! (Clap, clap)\nIf you're happy and you know it, and you really want to show it,\nIf you're happy and you know it, clap your hands!\n\n(Stomp your feet! Shout hurray! Do all three!)`,
    parentTips: 'You can create custom verses together, such as "If you’re excited and you know it, do a spin!"',
    tags: ['if you are happy', 'emotions', 'clapping', 'sing along']
  },

  // 26. Do You Like Broccoli Ice Cream?
  {
    id: 'v26',
    slug: 'do-you-like-broccoli-ice-cream',
    title: 'Do You Like Broccoli Ice Cream? 🍦',
    channel: 'Super Simple Songs',
    category: 'music',
    youtubeId: 'frN3nvhIHUk',
    thumbnail: 'https://img.youtube.com/vi/frN3nvhIHUk/hqdefault.jpg',
    duration: '2:25',
    views: '890M',
    ageRange: '1-7',
    badge: '🥦 Silly Song',
    description: 'Do you like broccoli? Yes, I do! Do you like ice cream? Yes, I do! Do you like... broccoli ice cream?! YUCKY! Kids dissolve into hysterics as familiar foods are combined into wonderfully absurd pairs like popcorn pizza, donut juice, and banana soup!',
    learningPoints: [
      'Food vocabulary and tasting preferences (yummy vs. yucky)',
      'Grammar structure: asking and answering "Do you like... ? Yes, I do / No, I don’t"',
      'Humor development and creative association'
    ],
    lyrics: `Do you like broccoli? Yes, I do!\nDo you like ice cream? Yes, I do!\nDo you like broccoli ice cream? No, I don't! Yucky!\n\nDo you like donuts? Yes, I do!\nDo you like juice? Yes, I do!\nDo you like donut juice? No, I don't! Yucky!`,
    parentTips: 'Make funny food invention questions at lunch time — ask your child if they would like "spaghetti ice cream" or "apple soup"!',
    tags: ['silly song', 'food', 'super simple songs', 'yummy yucky']
  },

  // 27. Walking Walking
  {
    id: 'v27',
    slug: 'walking-walking-noodle-pals',
    title: 'Walking Walking 🚶',
    channel: 'Super Simple Songs',
    category: 'music',
    youtubeId: 'fPMjnlTEZwU',
    thumbnail: 'https://img.youtube.com/vi/fPMjnlTEZwU/hqdefault.jpg',
    duration: '1:44',
    views: '210M',
    ageRange: '1-5',
    badge: '⚡ Action',
    description: 'Hop, hop, hop, run, run, run, now let’s stop! An energetic, physical warmup movement song by Super Simple Songs featuring Noodle & Pals. Helps toddlers practice listening to audio cues and practicing dynamic gross motor actions.',
    learningPoints: [
      'Physical coordination and responding to stop-and-go musical cues',
      'Action vocabulary: walking, hopping, running, stopping',
      'Cardio energy release for active toddlers indoors'
    ],
    lyrics: `Walking walking. Walking walking.\nHop hop hop. Hop hop hop.\nRunning running running. Running running running.\nNow let's stop. Now let's stop.`,
    parentTips: 'Play a game of "Red Light, Green Light" in your hallway using the song lyrics to practice self-control!',
    tags: ['walking', 'movement', 'action song', 'gross motor']
  },

  // 28. Hello Song for Kids
  {
    id: 'v28',
    slug: 'hello-song-for-kids',
    title: 'Hello Song for Kids 👋',
    channel: 'The Singing Walrus',
    category: 'music',
    youtubeId: 'gghDRJVxFxU',
    thumbnail: 'https://img.youtube.com/vi/gghDRJVxFxU/hqdefault.jpg',
    duration: '2:14',
    views: '150M',
    ageRange: '1-6',
    badge: '☀️ Morning',
    description: 'Every day I go to school, I meet my friends and we all say hello! The Singing Walrus greets the day with cheerful tunes, bright smiles, and polite social greetings that brighten up every morning.',
    learningPoints: [
      'Social-emotional greeting etiquette and morning kindness',
      'Feeling check-ins: good, great, wonderful, tired, hungry',
      'Promotes school readiness and positive attitude'
    ],
    lyrics: `Hello, hello! How are you?\nI'm good! I'm great! I'm wonderful!\nHello, hello! How are you?\nI'm tired. I'm hungry. I'm not so good.`,
    parentTips: 'Ask your child how they feel this morning using the words from the song.',
    tags: ['hello', 'greetings', 'morning song', 'emotions']
  },

  // 29. Five Little Ducks
  {
    id: 'v29',
    slug: 'five-little-ducks',
    title: 'Five Little Ducks 🦆',
    channel: 'Super Simple Songs',
    category: 'nursery-rhymes',
    youtubeId: 'pZw9veQ76fo',
    thumbnail: 'https://img.youtube.com/vi/pZw9veQ76fo/hqdefault.jpg',
    duration: '2:44',
    views: '1.1B',
    ageRange: '0-5',
    badge: '🦆 Classic',
    description: 'Five little ducks went out one day, over the hill and far away! When Mother Duck said Quack, Quack, Quack, only four little ducks came back. A beloved subtraction countdown song that gently resolves with all five ducks returning safely home.',
    learningPoints: [
      'Number subtraction from 5 down to 0 and celebrating their reunion',
      'Mother duck caring bond and family loyalty',
      'Vocabulary: hill, far away, quack, sad, happy'
    ],
    lyrics: `Five little ducks went out one day,\nOver the hill and far away.\nMother duck said, "Quack, quack, quack, quack!"\nBut only four little ducks came back!`,
    parentTips: 'Count with yellow bath ducks or fingers holding up little duck bills.',
    tags: ['ducks', 'counting', 'nursery rhyme', 'animals']
  },

  // 30. Monkey Banana Dance
  {
    id: 'v30',
    slug: 'monkey-banana-dance',
    title: 'Monkey Banana Dance 🍌',
    channel: 'Pinkfong! Kids Songs & Stories',
    category: 'music',
    youtubeId: 'ubmiT8JKeRU',
    thumbnail: 'https://img.youtube.com/vi/ubmiT8JKeRU/hqdefault.jpg',
    duration: '1:45',
    views: '580M',
    ageRange: '1-6',
    badge: '🐒 Silly Dance',
    description: 'Bananas unite! Peel banana, chop banana, mash banana, eat banana! Go bananas with Pinkfong in this viral, hilarious monkey dance full of high-energy wiggle fun for the entire family.',
    learningPoints: [
      'Fruit identification and culinary verbs: peel, chop, mash, eat',
      'Rhythm mimicry and silly physical tension release',
      'Interactive family dance-off'
    ],
    lyrics: `Bananas unite!\nPeel banana, peel, peel banana!\nChop banana, chop, chop banana!\nMash banana, mash, mash banana!\nEat banana, eat, eat banana!\nGo bananas!`,
    parentTips: 'Make a real healthy banana smoothie together with your child after doing the dance!',
    tags: ['banana', 'pinkfong', 'dance', 'monkeys']
  },

  // 31. Brush Your Teeth Song
  {
    id: 'v31',
    slug: 'brush-your-teeth-song',
    title: 'Brush Your Teeth Song 🪥',
    channel: 'Super Simple Songs',
    category: 'learning',
    youtubeId: 'wCio_xVlgQ0',
    thumbnail: 'https://img.youtube.com/vi/wCio_xVlgQ0/hqdefault.jpg',
    duration: '2:11',
    views: '310M',
    ageRange: '1-6',
    badge: '🦷 Hygiene',
    description: 'Brush your teeth, up and down, round and round! Sparky the dog and friends show how easy and fun it is to keep our pearly whites shiny clean every morning and night.',
    learningPoints: [
      'Proper dental hygiene technique (front, back, circular motions)',
      'Building twice-a-day habit independence',
      'Overcoming toddler reluctance to brush teeth'
    ],
    lyrics: `Brush your teeth! Brush your teeth!\nUp and down, up and down!\nRound and round, round and round!\nBrush your teeth to keep them clean and bright!`,
    parentTips: 'Play this song on your phone in the bathroom to ensure children brush for the full 2 minutes.',
    tags: ['brush teeth', 'hygiene', 'habits', 'health']
  },

  // 32. Skidamarink I Love You
  {
    id: 'v32',
    slug: 'skidamarink-i-love-you',
    title: 'Skidamarink I Love You ❤️',
    channel: 'Super Simple Songs',
    category: 'music',
    youtubeId: 'ug1pI-Ephns',
    thumbnail: 'https://img.youtube.com/vi/ug1pI-Ephns/hqdefault.jpg',
    duration: '2:16',
    views: '490M',
    ageRange: '0-6',
    badge: '💖 Family',
    description: 'Skidamarink a dink a dink, skidamarink a doo, I love you! A sweet, heartwarming classic song teaching children to express affection for family morning, noon, and night.',
    learningPoints: [
      'Expressing love, empathy, and emotional warmth to parents and family',
      'Time of day concepts: morning, afternoon, evening, moon',
      'Gentle arm gestures and hugging motions'
    ],
    lyrics: `Skidamarink a dink a dink,\nSkidamarink a doo,\nI love you!\nI love you in the morning and in the afternoon,\nI love you in the evening and underneath the moon!`,
    parentTips: 'Give your little one a warm cuddle at the final verse of the song every time you listen.',
    tags: ['skidamarink', 'love', 'family', 'heartwarming']
  },

  // 33. This Is The Way
  {
    id: 'v33',
    slug: 'this-is-the-way',
    title: 'This Is The Way 🏫',
    channel: 'Super Simple Songs',
    category: 'learning',
    youtubeId: '4XLQpRI_wOQ',
    thumbnail: 'https://img.youtube.com/vi/4XLQpRI_wOQ/hqdefault.jpg',
    duration: '2:21',
    views: '280M',
    ageRange: '2-6',
    badge: '🎒 Routine',
    description: 'This is the way we wash our face, comb our hair, brush our teeth, and get dressed for school! Follow along with daily morning routines that encourage early independence.',
    learningPoints: [
      'Sequencing daily morning routines: wash, comb, dress, eat, go to school',
      'Building responsibility and self-care independence',
      'Rhythmic repetition helping toddlers memorize their daily steps'
    ],
    lyrics: `This is the way we wash our face, wash our face, wash our face.\nThis is the way we wash our face, so early in the morning!\nThis is the way we comb our hair...\nThis is the way we brush our teeth...`,
    parentTips: 'Create a visual morning chart with pictures matching each verse for smooth school mornings.',
    tags: ['morning routine', 'habits', 'school', 'self care']
  },

  // 34. Rock Scissors Paper
  {
    id: 'v34',
    slug: 'rock-scissors-paper',
    title: 'Rock Scissors Paper ✂️',
    channel: 'Super Simple Songs',
    category: 'learning',
    youtubeId: 'P65yE_EXLd8',
    thumbnail: 'https://img.youtube.com/vi/P65yE_EXLd8/hqdefault.jpg',
    duration: '1:45',
    views: '320M',
    ageRange: '2-7',
    badge: '🎨 Imagination',
    description: 'Rock, scissors, paper, 1, 2, 3! What can you make? Put your hands together to create an octopus, a snail, and a butterfly in this imaginative fingerplay favorite.',
    learningPoints: [
      'Fine motor dexterity and finger manipulation',
      'Creative symbolic thinking and shape transformation',
      'Animal identification through inventive hand gestures'
    ],
    lyrics: `Rock, scissors, paper. Rock, scissors, paper.\n1, 2, 3. Play with me!\nRight hand rock, left hand scissors.\nPut them together... it's an octopus!`,
    parentTips: 'Challenge your child to invent a new creature using two rocks or two scissors!',
    tags: ['fingerplay', 'imagination', 'games', 'motor skills']
  },

  // 35. Open Shut Them #2
  {
    id: 'v35',
    slug: 'open-shut-them-opposites',
    title: 'Open Shut Them #2 👐',
    channel: 'Rhymington Square',
    category: 'learning',
    youtubeId: 'a04XY2LEAbE',
    thumbnail: 'https://img.youtube.com/vi/a04XY2LEAbE/hqdefault.jpg',
    duration: '2:15',
    views: '95M',
    ageRange: '1-5',
    badge: '🖐️ Opposites',
    description: 'Open, shut them, open, shut them, give a little clap! Learn conceptual opposites: big and small, fast and slow, loud and quiet, peek-a-boo and clap clap clap.',
    learningPoints: [
      'Opposite concepts: open/shut, big/small, fast/slow, loud/quiet',
      'Hand-eye coordination and motor control',
      'Early language vocabulary pairs'
    ],
    lyrics: `Open, shut them. Open, shut them. Give a little clap, clap, clap.\nBig and small. Big and small. Big, big, big, small, small, small!\nFast and slow. Fast and slow. Fast, fast, fast, slow, slow, slow!`,
    parentTips: 'Exaggerate facial expressions and gestures when modeling big vs small and loud vs quiet.',
    tags: ['opposites', 'clapping', 'preschool', 'language']
  },

  // 36. Finny The Shark - Baby Shark
  {
    id: 'v36',
    slug: 'finny-the-shark-baby-shark',
    title: 'Finny The Shark - Baby Shark 🦈',
    channel: 'Finny The Shark',
    category: 'nursery-rhymes',
    youtubeId: '4yjpV33qHCo',
    thumbnail: 'https://img.youtube.com/vi/4yjpV33qHCo/hqdefault.jpg',
    duration: '2:05',
    views: '140M',
    ageRange: '0-5',
    badge: '🌊 Undersea',
    description: 'Meet Finny the little friendly shark and her undersea family! Explore warm ocean reefs and playful coral games with soft animated colors and soothing musical tempo.',
    learningPoints: [
      'Ocean reef wildlife and aquatic habitats',
      'Family togetherness and supportive play',
      'Gentle acoustic pacing safe for youngest viewers'
    ],
    lyrics: `Finny shark, doo doo doo doo doo doo!\nMommy shark, doo doo doo doo doo doo!\nDaddy shark, doo doo doo doo doo doo!\nSwimming in the sea so blue!`,
    parentTips: 'Talk about colors of coral reefs: yellow corals, blue sea, and pink starfish.',
    tags: ['finny', 'shark', 'ocean', 'toddler song']
  },

  // 37. Ten In The Bed
  {
    id: 'v37',
    slug: 'ten-in-the-bed',
    title: 'Ten In The Bed 🛌',
    channel: 'Super Simple Songs',
    category: 'nursery-rhymes',
    youtubeId: 'TdDypyS_5zE',
    thumbnail: 'https://img.youtube.com/vi/TdDypyS_5zE/hqdefault.jpg',
    duration: '2:31',
    views: '220M',
    ageRange: '1-6',
    badge: '🛏️ Counting',
    description: 'There were ten in the bed and the little one said: "Roll over! Roll over!" So they all rolled over and one fell out! A rhythmic bedtime countdown from 10 to 1.',
    learningPoints: [
      'Countdown math from 10 down to 1',
      'Cozy bedtime routine and laughter',
      'Understanding sequence and cause-and-effect'
    ],
    lyrics: `There were ten in the bed and the little one said,\n"Roll over! Roll over!"\nSo they all rolled over and one fell out!\nNine! There were nine in the bed...`,
    parentTips: 'Line up 10 stuffed animals on the bed and roll them off one by one as each verse plays.',
    tags: ['bedtime', 'counting', 'countdown', 'super simple songs']
  },

  // 38. Exercise, Rhyme and Freeze
  {
    id: 'v38',
    slug: 'exercise-rhyme-and-freeze',
    title: 'Exercise, Rhyme and Freeze 🧊',
    channel: 'Jack Hartmann Kids Music Channel',
    category: 'music',
    youtubeId: 'cSPmGPIyykU',
    thumbnail: 'https://img.youtube.com/vi/cSPmGPIyykU/hqdefault.jpg',
    duration: '3:20',
    views: '80M',
    ageRange: '2-7',
    badge: '🏃 Movement',
    description: 'Move and groove, then freeze when the music stops! Jack Hartmann combines rhyming word games with physical aerobic freezing games that boost attention span.',
    learningPoints: [
      'Auditory processing and executive function (freeze on cue)',
      'Phonics and rhyming words identification',
      'Cardio activity and balance training'
    ],
    lyrics: `Exercise, rhyme and freeze!\nJog, jog, jog... frog! Jog and frog rhyme!\nNow FREEZE!\nTwist, twist, twist... wrist! Twist and wrist rhyme!\nNow FREEZE!`,
    parentTips: 'See who can hold the funniest statue pose when the song calls out FREEZE!',
    tags: ['exercise', 'rhyming', 'freeze dance', 'jack hartmann']
  }
];

export const featuredVideos = videos.slice(0, 4);

export function getVideoTimestamp(video) {
  if (!video) return 0;
  if (video.updatedAt) {
    const t = new Date(video.updatedAt).getTime();
    if (!isNaN(t)) return t;
  }
  if (video.syncedAt) {
    const t = new Date(video.syncedAt).getTime();
    if (!isNaN(t)) return t;
  }
  if (video.publishedAt) {
    const t = new Date(video.publishedAt).getTime();
    if (!isNaN(t)) return t;
  }
  if (video.createdAt) {
    const t = new Date(video.createdAt).getTime();
    if (!isNaN(t)) return t;
  }
  if (typeof video.id === 'string' && video.id.startsWith('dyn_')) {
    const parts = video.id.split('_');
    const num = Number(parts[1]);
    if (!isNaN(num) && num > 0) return num;
  }
  return 0;
}

export function sortVideosByNewest(list) {
  if (!Array.isArray(list)) return [];
  return [...list].sort((a, b) => {
    const timeA = getVideoTimestamp(a);
    const timeB = getVideoTimestamp(b);
    if (timeA !== timeB) {
      return timeB - timeA;
    }
    return 0;
  });
}

export function getDynamicVideos() {
  if (Array.isArray(dynamicVideosJson)) {
    return dynamicVideosJson;
  }
  return [];
}

export function getAllVideos() {
  const dyn = getDynamicVideos();
  const dynamicMap = new Map();
  dyn.forEach((v) => {
    if (v.youtubeId) dynamicMap.set(v.youtubeId, v);
  });

  const remainingStatic = videos.filter((v) => !dynamicMap.has(v.youtubeId));
  const combined = [...dyn, ...remainingStatic];
  return sortVideosByNewest(combined);
}

export function getVideoBySlug(slug) {
  const all = getAllVideos();
  return all.find((v) => v.slug === slug || v.id === slug);
}

