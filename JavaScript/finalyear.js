const destinations = [
    { name: "Taj Mahal", price: 10500, rating: 4.9, reviews: 10234, image: "images/Tourism Pictures/taj-mahal.avif" },
    { name: "Jaipur City Palace", price: 2200, rating: 4.7, reviews: 8765, image: "images/Tourism Pictures/jaipur-city.jpg" },
    { name: "Goa Beaches", price: 3000, rating: 4.8, reviews: 9876, image: "images/Tourism Pictures/goa-beaches.jpg" },
    { name: "Varanasi Ghats", price: 5000, rating: 4.6, reviews: 7654, image: "images/Tourism Pictures/varanasi-gharts.jpg" },
    { name: "Kerala Backwaters", price: 4500, rating: 4.9, reviews: 8901, image: "images/Tourism Pictures/kerala-backwaters.jpg" },
    { name: "Amber Fort, Jaipur", price: 5600, rating: 4.5, reviews: 6789, image: "images/Tourism Pictures/amber-fort.jpg" },
    { name: "Mysore Palace", price: 2200, rating: 4.4, reviews: 5678, image: "images/Tourism Pictures/mysore-palace.jpg" },
    { name: "Ranthambore National Park", price: 7000, rating: 4.7, reviews: 4567, image: "images/Tourism Pictures/ranthambore-park.jpg" },
    { name: "Hampi Ruins", price: 1600, rating: 4.8, reviews: 3456, image: "images/Tourism Pictures/hampi-ruins.jpg" },
    { name: "Ladakh", price: 14000, rating: 4.9, reviews: 2345, image: "images/Tourism Pictures/ladakh.jpg" },
    { name: "Ellora Caves", price: 1700, rating: 4.6, reviews: 3210, image: "images/Tourism Pictures/ellora-caves.jpg" },
    { name: "Sundarbans", price: 2800, rating: 4.5, reviews: 2109, image: "images/Tourism Pictures/sundarbans.jpg" },
    { name: "Khajuraho Temples", price: 4000, rating: 4.7, reviews: 3567, image: "images/Tourism Pictures/Khajuraho Temples.jpg" },
    { name: "Darjeeling Tea Gardens", price: 11800, rating: 4.6, reviews: 4321, image: "images/Tourism Pictures/Darjeeling Tea Gardens.jpg" },
    { name: "Ajanta Caves", price: 3350, rating: 4.8, reviews: 2876, image: "images/Tourism Pictures/Ajanta caves.jpg" },
    { name: "Udaipur City Palace", price: 4200, rating: 4.7, reviews: 5432, image: "images/Tourism Pictures/udayput-city-palace.jpg" },
    { name: "Andaman Islands", price: 31500, rating: 4.9, reviews: 3210, image: "images/Tourism Pictures/Andaman Islands.jpg" },
    { name: "Golden Temple, Amritsar", price: 6500, rating: 4.9, reviews: 7890, image: "images/Tourism Pictures/golden-temple.jpg" },
    { name: "Kaziranga National Park", price: 5200, rating: 4.8, reviews: 2345, image: "images/Tourism Pictures/Kaziranga National Park.jpg" },
    { name: "Hebbe Falls", price: 1800, rating: 4.5, reviews: 6543, image: "images/Tourism Pictures/hebbefalls.jpg" }

];

const reviews = [
    { name: "Priya S.", rating: 5, text: "Incredible experience at the Taj Mahal! The guide was knowledgeable and the tour was well-organized." },
    { name: "Rahul M.", rating: 4, text: "Loved the beaches in Goa. The hotel recommendations were spot on." },
    { name: "Sarah L.", rating: 5, text: "The Jaipur City Palace tour was amazing. So much history and beauty!" },
    { name: "Amit K.", rating: 4, text: "Varanasi was a spiritual experience. The evening aarti ceremony was unforgettable." },
    { name: "Emma W.", rating: 5, text: "Kerala backwaters cruise was so peaceful and scenic. Highly recommend!" },
    { name: "Raj P.", rating: 4, text: "Ranthambore safari was exciting. We saw tigers and many other animals." },
    { name: "Lisa T.", rating: 5, text: "Hampi's ruins were breathtaking. It felt like stepping back in time." },
    { name: "Vikram S.", rating: 4, text: "Loved the food tour in Delhi. So many flavors and delicious dishes!" },
];

const galleryImages = [
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-2.jpg",
    "images/Tourism Pictures/gallery-3.jpg",
    "images/Tourism Pictures/gallery-4.jpg",
    "images/Tourism Pictures/gallery-5.jpg",
    "images/Tourism Pictures/gallery-5.jpg",
    "images/Tourism Pictures/gallery-4.jpg",
    "images/Tourism Pictures/gallery-3.jpg",
    "images/Tourism Pictures/gallery-2.jpg",
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-2.jpg",

];



const destinationInfo = {
            // ... (Taj Mahal information)
    "Taj Mahal": {
        history:"The Taj Mahal, an epitome of eternal ll̥ove and architectural brilliance, stands as one of the most iconic monuments in the world.Located in Agra, India, this stunning mausoleum was commissioned by the Mughal Emperor Shah Jahan in 1632 in memory of his beloved wife, Mumtaz Mahal. It took nearly 22 years and the collective effort of over 20,000 artisans to complete this masterpiece, blending Persian, Islamic, and Indian architectural styles seamlessly.The history of the Taj Mahal is deeply intertwined with a poignant love story. Mumtaz Mahal, the favorite wife of Shah Jahan, passed away in 1631 during childbirth. Her death devastated the emperor, who vowed to build a monument that would symbolize their undying love and her eternal memory. The name Taj Mahal is believed to have been derived from Mumtaz Mahal's name, signifying her unparalleled beauty and grace.The construction of the Taj Mahal began in 1632 on the southern bank of the Yamuna River. The primary material used was white marble sourced from Makrana in Rajasthan. Precious stones like jade, crystal, turquoise, and lapis lazuli were imported from distant regions such as China, Tibet, and Sri Lanka to adorn the intricate inlay work. Ustad Ahmad Lahauri, the chief architect, led a team of skilled artisans, calligraphers, and craftsmen from across the Mughal Empire and beyond.One of the most striking features of the Taj Mahal is its symmetry and proportion. The central dome, standing at a height of 73 meters, is flanked by four smaller domes and four slender minarets, each slightly tilted outward to protect the main structure in the event of an earthquake. The main mausoleum houses the cenotaphs of Shah Jahan and Mumtaz Mahal, although their actual graves lie in a crypt below. The calligraphy on the entrance gateway and other parts of the monument, crafted by Amanat Khan, features verses from the Quran, emphasizing themes of paradise and eternity.The Taj Mahal's charm is further enhanced by its surrounding elements. The lush Charbagh gardens, divided into four symmetrical sections by water channels, represent the Islamic concept of paradise. The reflection of the Taj Mahal in the central water tank creates a breathtaking visual effect, particularly during sunrise and sunset when the marble shifts hues.The monument's enduring legacy is its ability to evoke awe and admiration centuries after its completion. Recognized as a UNESCO World Heritage Site in 1983, the Taj Mahal is often regarded as the pinnacle of Mughal architecture. It attracts millions of visitors annually, serving as a symbol of India’s rich cultural heritage.What sets the Taj Mahal apart is not just its architectural brilliance but also the emotional depth it encapsulates. It is a testament to love that transcends time and space, immortalized in white marble. Even today, it stands as a beacon of beauty, resilience, and the human capacity to create wonders that touch the soul.",        
        hotels: [
            { name: "Hotel Deluxe Plaza", price: 1488, rating: 3 },
            { name: "Grand Tara Deluxe Hotel & Convention Centre", price: 1457, rating: 2 },
            { name: "ITC Tajview - IHCL SeleQtions", price: 4000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Jaipur City Palace information)
    "Jaipur City Palace": {
        history: "The City Palace, Jaipur is a royal residence and former administrative headquarters of the rulers of the Jaipur State in Jaipur, Rajasthan. Construction started soon after the establishment of the city of Jaipur under the reign of Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727.Jaipur remained the capital of the kingdom until 1949—when it became the capital of the present-day Indian state of Rajasthan—with the City Palace functioning as the ceremonial and administrative seat of the Maharaja of Jaipur.The City Palace of Jaipur, located in the heart of the Pink City, stands as a resplendent symbol of Rajasthan’s regal history and architectural brilliance. Built during the late 18th century, this iconic palace complex served as the residence and administrative seat of the Maharajas of Jaipur. The City Palace is not just an architectural marvel but also a repository of centuries-old traditions, art, and culture, making it one of India’s most celebrated heritage sites.The foundation of the City Palace was laid in 1727 by Maharaja Sawai Jai Singh II, the visionary ruler who also founded Jaipur. Sawai Jai Singh II moved his capital from Amber to Jaipur to accommodate the growing population and establish a more secure administrative base. The palace’s construction was completed over several years, with successive rulers adding to its grandeur.Designed under the guidance of Vidyadhar Bhattacharya, the chief architect, the palace reflects a harmonious blend of Mughal, Rajput, and European architectural styles. The unique layout was meticulously planned based on principles of Vastu Shastra and the Shilpa Shastra, ancient Indian treatises on architecture and design.The City Palace served as a center of power, where the Maharajas managed political and ceremonial affairs. Even today, a portion of the palace remains a private residence of the royal family, preserving its legacy as a symbol of Jaipur’s enduring royal heritage.Today, the City Palace serves as a vibrant cultural hub, hosting exhibitions, art shows, and traditional festivals. Its museums showcase royal artifacts, manuscripts, and weapons, offering a glimpse into Jaipur’s opulent past.The City Palace remains an enduring symbol of Rajasthan’s rich history, architectural innovation, and royal traditions, attracting visitors from around the world to witness its timeless splendor.",
        hotels: [
            { name: "The Leela Palace Jaipur", price: 3000, rating: 4.6 },
            { name: "Le Méridien Jaipur Resort & Spa", price: 4000, rating: 4 },
            { name: "Trident Jaipur", price: 4500, rating: 4.4 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
        // ... (Goa Beaches information)
    "Goa Beaches": {
        history: "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,two and a half times as high as the GDP per capita of the country as a whole.Goa's documented history begins around 3,000 years ago, though evidence of human habitation in the region dates back to the Stone Age. It was part of the Mauryan Empire during the 3rd century BCE under Emperor Ashoka, who promoted Buddhism in the region. Goa later became an integral part of the Satavahana dynasty, which ruled large parts of the Deccan Plateau, and subsequently fell under the sway of the Chalukyas of Badami in the 6th century CE. The Kadamba dynasty, which rose to power in the 10th century, is particularly significant in Goa's early history. The Kadambas established Goa as an important port and trade center, fostering connections with far-off lands such as Arabia and Africa.Goa was briefly ruled by the Delhi Sultanate in the 14th century before becoming part of the Vijayanagara Empire in the early 15th century. During this period, Goa thrived as a key port for trade in horses, spices, and other commodities. Its strategic location made it an attractive target for rival powers.The turning point in Goa's history came in 1510 when the Portuguese, led by Afonso de Albuquerque, defeated the Sultan of Bijapur and established their control over the region. Goa became the capital of Portuguese India and remained under Portuguese rule for over 450 years, making it one of the longest-held colonial possessions in history.The Portuguese brought profound changes to Goa’s culture, religion, and architecture. They introduced Christianity, building magnificent churches such as the Basilica of Bom Jesus, which houses the remains of Saint Francis Xavier. The colonial administration also left a lasting imprint through the introduction of the Portuguese language, cuisine, and a unique Indo-Portuguese culture. However, this period was also marked by the Inquisition and forced conversions, which left a darker legacy.Goa’s path to freedom was unique. Even after India gained independence in 1947, Goa remained under Portuguese control. It was only in 1961 that the Indian armed forces conducted Operation Vijay, liberating Goa and integrating it into India. Goa attained statehood in 1987, becoming the 25th state of the Indian Union.What makes Goa distinct is its seamless blend of Indian and Portuguese heritage. The state’s festivals, such as Carnival, are celebrated with exuberance, reflecting its diverse cultural roots. Goa’s architecture, from baroque churches to traditional Hindu temples, showcases its layered history. Its Konkani language and cuisine—marked by dishes like vindaloo and bebinca—are further testaments to its syncretic culture.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Varanasi Ghats information)
    "Varanasi Ghats": {
        history: "Ghats in Varanasi are riverfront steps leading to the banks of the Ganges river. The city has 84 ghats. Most of the ghats are bathing and puja ceremonial ghats, while two ghats, Manikarnika and Harishchandra, are used exclusively as cremation sites.Most of the ghats in Varanasi were rebuilt in the 18th century under the maratha patronage. The patrons of current ghats are Maharajas of Benares, Marathas, Shindes (Scindias), Holkars, Bhonsles and Peshwes (Peshwas). Many ghats are associated with legends or mythologies while other ghats have private histories and users. A morning boat ride on the Ganges along the ghats is a popular visitor attraction.Varanasi, often referred to as the spiritual capital of India, is famed for its ghats—a series of riverfront steps leading down to the holy Ganges River. These ghats hold profound historical, cultural, and religious significance, drawing pilgrims, scholars, and tourists from around the world. The ghats serve as centers for religious ceremonies, spiritual purification, and social gatherings, embodying the ancient traditions and ethos of the city.The history of Varanasi’s ghats dates back thousands of years, with roots in Hindu mythology and texts. The city, known as Kashi in ancient times, is believed to be one of the oldest continuously inhabited places in the world. The ghats have been integral to Varanasi’s identity since their inception, functioning as gateways for spiritual ascent and centers for religious practices.According to legend, Varanasi was founded by Lord Shiva, and the ghats were sanctified by his presence. The city's prominence as a religious hub grew during the Gupta period (4th to 6th century CE) when temple construction flourished. Many of the ghats we see today, however, were constructed or renovated during the Mughal and Maratha periods. For instance, the Manikarnika Ghat, considered the holiest for cremations, has origins rooted in myths of Vishnu and Shiva. The Marathas, particularly rulers like Ahilyabai Holkar of Indore, played a significant role in restoring several ghats during the 18th century.The ghats of Varanasi are distinct in their character and purpose. Each of the approximately 88 ghats has a unique history and function, ranging from religious rituals to mundane activities like bathing and washing clothes. Here are some of the most iconic ones The ghats of Varanasi are a vital part of the city's cultural, religious, and historical fabric, offering a glimpse into the centuries-old traditions of India. Varanasi, one of the oldest cities in the world, is considered the spiritual capital of India, and its ghats play an essential role in the city’s religious life. The ghats are a series of steps leading down to the river Ganges, where pilgrims perform rituals like bathing in the holy river, performing prayers, and cremating the deceased.The history of Varanasi’s ghats dates back to ancient times. It is believed that the first ghats were constructed as early as the 5th century BCE. The ghats evolved over the centuries, with significant contributions from various dynasties, including the Mauryas, Guptas, and the Mughals, who constructed and renovated several of the ghats. The Mughals, under the rule of Emperor Akbar, played a significant role in enhancing the infrastructure of Varanasi, particularly in terms of the ghats. Akbar’s reign marked a period of prosperity, and the Mughal rulers were keen on enhancing the city’s religious significance by improving the ghats for pilgrims and devotees.The ghats have always been a center for cultural and religious activities. They are particularly known for the Ganga Aarti, a daily ritual of worship performed in the evening, where devotees offer prayers to the river Ganges with lighted lamps, incense, and chanting. This mesmerizing ceremony attracts thousands of devotees and tourists every evening. Additionally, the ghats have been a gathering place for saints, scholars, poets, and philosophers, contributing to the intellectual and cultural heritage of the city. The ghats also serve as the backdrop for numerous festivals such as Diwali, Makar Sankranti, and Teej, which are celebrated with great devotion and enthusiasm.Among the most famous ghats in Varanasi are Dashashwamedh Ghat, Assi Ghat, Manikarnika Ghat, and Harishchandra Ghat. Dashashwamedh Ghat, perhaps the most iconic, is the site of the grand Ganga Aarti ceremony. Manikarnika Ghat is known as the main cremation ghat of Varanasi, where it is believed that being cremated here leads to liberation (moksha). Harishchandra Ghat, named after the legendary King Harishchandra, is another important cremation ghat. These ghats have significant spiritual importance, with many believing that they are places where one can attain salvation.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kerala Backwaters information)
            "Kerala Backwaters": {
        history: "The Kerala backwaters are a network of brackish lagoons and canals lying parallel to the Arabian Sea of the Malabar coast of Kerala state in south-western India. It also includes interconnected lakes, rivers, and inlets, a labyrinthine system formed by more than 900 km (560 mi) of waterways, and sometimes compared to bayous.[3] The network includes five large lakes linked by canals, both man made and natural, fed by 38 rivers, and extending virtually half the length of Kerala state. The backwaters were formed by the action of waves and shore currents creating low barrier islands across the mouths of the many rivers flowing down from the Western Ghats range.The Kerala Backwaters, a network of interconnected canals, lakes, rivers, and lagoons, have been an integral part of Kerala's history and culture for centuries. These backwaters stretch across the state’s southwestern coast, weaving a unique natural landscape that has shaped the lives of its people, their economy, and their way of life.Historically, the backwaters were central to Kerala's trade and transportation system. Long before modern roads and railways, these water routes were used for the movement of goods, primarily spices, coir, and agricultural produce. The region’s strategic location along the Arabian Sea made it a hub for trade, and the backwaters provided a natural, easy means of transport, linking the inland villages with the ports of Cochin and Quilon. Merchants from the Middle East, China, and Europe frequently used the backwaters to access Kerala’s abundant natural resources, cementing the region's place in international trade.In addition to their economic importance, the backwaters have also played a significant role in Kerala's social fabric. The traditional houseboats, or kettuvallams, which were once used to transport rice and other goods, are now symbolic of the backwaters’ transformation into a popular tourist destination. These boats, crafted from indigenous materials like wood and coir, reflect the state’s rich craftsmanship and sustainable living practices. Over time, the backwaters became synonymous with Kerala's rural charm and cultural heritage, attracting both local and international visitors.The ecological importance of the Kerala Backwaters is also noteworthy. These wetlands are home to a diverse range of flora and fauna, including several endemic species. The backwaters serve as critical breeding grounds for fish and migratory birds, making them a significant part of the region’s biodiversity. Over the years, conservation efforts have sought to preserve the delicate ecosystem, especially as urbanization and tourism have posed challenges to its natural balance.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kerala Backwaters information)
"Amber Fort, Jaipur": {
        history: "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres (1.5 sq mi)located 11 kilometres (6.8 mi) from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur. Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace.Amer Palace is great example of Rajput architecture. Some of its buildings and work have influence of Mughal architecture. Constructed of red sandstone and marble, the attractive, opulent palace is laid out on four levels, each with a courtyard.Amber Fort, located in the city of Jaipur in Rajasthan, India, is a magnificent example of Rajput architecture and a testament to the grandeur of the Mughal-Rajput era. The fort, also known as Amer Fort, was initially built in the 16th century by Maharaja Man Singh I, a trusted general in the Mughal army under Emperor Akbar. The construction was later expanded by his descendants, particularly Raja Jai Singh I, who was responsible for much of the fort's current structure. Amber Fort is perched on a hilltop, surrounded by the rugged Aravalli Range, and offers breathtaking views of the Maota Lake and the town of Amer, which was once the capital of the Kachwaha dynasty.The fort is renowned for its beautiful architecture, which blends Hindu, Mughal, and Rajput styles. The layout of the fort is divided into four main sections, each with its own courtyard. The first courtyard leads to the entrance gate, which is known as the Suraj Pol (Sun Gate). The second courtyard houses the Diwan-i-Aam (Hall of Public Audience), where the king would meet with his subjects. The third courtyard features the beautiful Sheesh Mahal (Mirror Palace), which is one of the most impressive parts of the fort, with intricate mirror work that creates a dazzling effect when illuminated by a single candle. The fourth courtyard is home to the zenana (women's quarters), which includes the Sukh Niwas (Pleasure Hall), where a cool breeze was created through a water system that flowed through the palace.The Amber Fort is also famous for its decorative elements, such as the exquisite frescoes, carvings, and inlaid marble work. The fort's architecture is a blend of strength and beauty, with its imposing walls and strategic location designed for defense, combined with ornate palaces and gardens that showcase the artistic and cultural richness of the time. One of the most striking features of the fort is its grand Ganesh Pol, a gate decorated with intricate frescoes of the Hindu god Ganesh, which was used as the entrance to the private area of the royal palace.In addition to its architectural beauty, Amber Fort has a rich history, having witnessed many important events, including battles, royal processions, and celebrations. The fort has also been a witness to the changing fortunes of the Kachwaha dynasty, with the eventual shift of the capital to Jaipur in the 18th century by Maharaja Jai Singh II, who founded the city. Despite this shift, Amber Fort continued to serve as a royal residence until the 19th century.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Mysore Palace information)
"Mysore Palace": {
        history: "Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort.The land on which the palace now stands was originally known as mysuru. The first palace inside the Old Fort was built in the 14th century, which was set ablaze and reconstructed multiple times. The Old Fort was built of wood and thus easily caught fire, while the current fort was built of stone, bricks and wood.Mysore Palace, located in the city of Mysore in Karnataka, India, is a stunning architectural marvel and one of the most iconic landmarks in the country. The history of this grand palace dates back to the 14th century when the Wadiyar dynasty first established their rule in the region. However, the present structure, which is a blend of Hindu, Muslim, Rajput, and Gothic architectural styles, was built in the early 20th century. The original palace, constructed in the 14th century, was destroyed by a fire in 1897, prompting the need for a new, more opulent structure.The construction of the new Mysore Palace began in 1897 and was completed in 1912 under the reign of Maharaja Krishnaraja Wadiyar IV. The palace was designed by the British architect Henry Irwin, and its design incorporates elements from Indo-Saracenic architecture, which was a fusion of Indian, Persian, Oriental, and European styles. The palace is spread over 3 acres and includes several stunning features, such as an array of intricately carved doors, arches, and windows, grand courtyards, and beautiful gardens. It is adorned with magnificent frescoes, stained glass windows, and gold leaf work that narrate the rich history of the Wadiyar family and their cultural heritage.One of the most striking aspects of the Mysore Palace is its royal Durbar Hall, which is used for formal ceremonies. The hall is known for its stunning wooden ceiling adorned with gold, as well as its splendid chandeliers. The palace also has a series of private and public rooms, including the royal bedrooms, the queen’s quarters, and an armory that displays weapons used by the royal family.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ranthambore National Park information)
"Ranthambore National Park": {
        history: "Ranthambore National Park covers a total area of 392 km2 (151 sq mi), including buffer zone. It harbours dry deciduous forests and open grassy meadow. The core area is about 275 km2 (106 sq mi). Ranthambore Tiger Reserve spreads over an area of 1,334 km2 (515 sq mi) at an elevation range of about 215–505 m (705–1,657 ft).Ranthambore Fort was built in the 10th century by Chauhan rulers at 210 m (700 ft) above the surrounding plain. Inside the fort are three red stone temples devoted to Ganesh, Shiva and Ramlalaji. There is a Digamber Jain temple of Sumatinatha and Sambhavanatha. The temples were constructed in the 12th and 13th centuries. Padam Talao is the largest of the many lakes in the park. A red sandstone Jogi Mahal is at the edge of the lake.Ranthambore National Park, located in the Sawai Madhopur district of Rajasthan, India, is one of the largest and most renowned national parks in the country. Established as a wildlife sanctuary in 1955 and later declared a national park in 1980, Ranthambore covers an area of approximately 1,334 square kilometers. The park is famous for its rich history, diverse wildlife, and its significance as one of the best places in India to spot the elusive Bengal tiger in its natural habitat.The history of Ranthambore dates back centuries, long before it became a wildlife sanctuary. The park's name is derived from the Ranthambore Fort, an ancient fort that is perched atop a hill within the park’s boundaries. This fort, which dates back to the 10th century, was a strategic military base during various periods of Rajasthan's history and has witnessed the rise and fall of several dynasties. The fort was part of the Rajput kingdom and later passed through the control of various rulers, including the Delhi Sultanate and the Mughal Empire.The area surrounding the fort, which was once a royal hunting ground for the Maharajas of Jaipur, was eventually designated as a protected area due to the decline in wildlife populations. In the mid-20th century, as wildlife conservation efforts gained momentum across India, the government recognized the importance of preserving the flora and fauna of this region, which led to the creation of the Ranthambore Wildlife Sanctuary in 1955. The sanctuary was established to protect the forest and its wildlife from poaching and deforestation, and it became a haven for tigers, leopards, and other species of animals and birds.In 1973, Ranthambore was included in Project Tiger, a government initiative aimed at conserving the rapidly declining tiger population across India. This brought national and international attention to the park, turning it into one of the premier tiger reserves in the world. Over time, the park's reputation as a sanctuary for tigers grew, and it became a popular destination for wildlife enthusiasts and photographers eager to witness these magnificent animals in the wild.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Hampi Ruins information)
"Hampi Ruins": {
        history: "Hampi also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi (City), Ballari district now Vijayanagara district, east-central Karnataka, India. Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra. Hampi continues as a religious centre, with the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city.Hampi was the capital of the Vijayanagara Empire from 1336 to 1565 (as Vijayanagara), when it was abandoned. It was a fortified city. Chronicles left by Persian and European travellers, particularly the Portuguese, say that Hampi was a prosperous, wealthy and grand city near the Tungabhadra River, with numerous temples, farms and trading markets.Hampi, a UNESCO World Heritage site located in the Indian state of Karnataka, is one of the most significant and remarkable historical sites in India. It was once the capital of the Vijayanagara Empire, which flourished between the 14th and 16th centuries. The ruins of Hampi, spread across a vast area, represent the grandeur and splendor of this ancient empire. The history of Hampi dates back to around the 3rd century BCE when it was known as Pampa-Kshetra named after the goddess Pampa, the daughter of the creator god Brahma. It was a pilgrimage site with temples dedicated to various Hindu deities, particularly Lord Shiva.The rise of Hampi as a prominent urban center began in the 14th century, during the reign of King Harihara I and his brother Bukka Raya I, who established the Vijayanagara Empire in 1336. Under their leadership and subsequent rulers, Hampi became a thriving metropolis, a hub for trade, culture, and art. The city grew to be one of the wealthiest and most advanced cities in the world, with bustling markets, spectacular temples, royal palaces, and impressive architecture.Hampi’s urban landscape was characterized by its remarkable architecture, which blended Dravidian styles with Indo-Islamic elements. Notable structures such as the Virupaksha Temple, dedicated to Lord Shiva, and the Vittala Temple, known for its iconic stone chariot and musical pillars, stand as testimonies to the artistic and architectural brilliance of the period. The ruins also include intricate step-wells, water tanks, and the Queen’s Bath, reflecting the advanced water management systems of the time.The city was strategically located on the banks of the Tungabhadra River, making it an ideal location for trade. It was a melting pot of cultures, with traders from Arabia, Persia, and Portugal frequenting its markets. The prosperity of Hampi is evidenced by its vast wealth, which was derived from agriculture, trade in spices, textiles, and precious metals, and its thriving administration.However, the grandeur of Hampi was brought to an end in 1565 when the city was sacked by an alliance of Deccan Sultanates in the Battle of Talikota. The invaders destroyed much of Hampi, including temples, markets, and palaces. This marked the decline of the Vijayanagara Empire and the city’s fall from its former glory. Over time, Hampi became a forgotten site, with only the ruins left to tell the story of its once-great civilization.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ladakh information)
"Ladakh": {
        history: "Ladakh is a region administered by India as a union territory and constitutes an eastern portion of the larger Kashmir region that has been the subject of a dispute between India and Pakistan since 1947 and India and China since 1959. Ladakh is bordered by the Tibet Autonomous Region to the east, the Indian state of Himachal Pradesh to the south, both the Indian-administered union territory of Jammu and Kashmir and the Pakistan-administered Gilgit-Baltistan to the west, and the southwest corner of Xinjiang across the Karakoram Pass in the far north. It extends from the Siachen Glacier in the Karakoram range to the north to the main Great Himalayas to the south.[11][12] The eastern end, consisting of the uninhabited Aksai Chin plains, is claimed by the Indian Government as part of Ladakh, but has been under Chinese control. is a region located in the northernmost part of India, bordered by the Himalayan range to the south and the Karakoram range to the north. Its unique culture, geography, and history have made it a fascinating region for both scholars and travelers. The history of Ladakh dates back to ancient times, with its roots deeply embedded in the Tibetan and Buddhist traditions. The earliest known inhabitants of Ladakh were the Dards, an Indo-Aryan people who settled in the region around the 2nd century BCE. They were later replaced by Tibetan-speaking people from the 7th century onwards, which had a significant impact on the region's culture, language, and religious practices.Ladakh’s strategic position as a trade route between Central Asia, Tibet, and India played a key role in its history. In the early centuries, it was a thriving center of trade, especially along the ancient Silk Route. The region's unique location also allowed it to become a melting pot of different cultures, with influences from Persia, Central Asia, and India. During the 9th and 10th centuries, Ladakh was ruled by various local kings, and by the 11th century, the region saw the rise of the Tibetan Buddhist kingdom. This period marked the establishment of Ladakh’s unique Buddhist culture, which continues to thrive today, with monasteries and stupas dotting the landscape.The 16th century saw the consolidation of power in Ladakh when King Jamyang Namgyal established a unified kingdom. He is credited with defending Ladakh from external invasions, particularly from the Mughal Empire and the neighboring Muslim states. Under Namgyal’s rule, Ladakh gained a degree of independence, although it faced frequent invasions and struggles for autonomy from regional powers. After his death, Ladakh’s importance began to decline, and it came under the influence of Kashmir in the 19th century, when the region was annexed by the Dogra rulers of Jammu and Kashmir. Ladakh was integrated into the princely state of Jammu and Kashmir, which became part of India after independence in 1947.In modern times, Ladakh became a focal point due to its strategic location, especially after the Sino-Indian War of 1962, which brought attention to the region's military significance. Ladakh’s proximity to the China border made it a critical area for India’s defense, and in 2019, the Indian government formally bifurcated the region into two Union Territories: Ladakh and Jammu and Kashmir. This move further solidified Ladakh's importance in India’s geopolitical strategy, especially in relation to its border disputes with China and Pakistan.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ellora Caves information)
"Ellora Caves": {
        history: "The Ellora Caves are a UNESCO World Heritage Site in Aurangabad district, Maharashtra, India. It is one of the largest rock-cut Hindu temple cave complexes in the world, with artwork dating from the period 600–1000 CE, also including several Buddhist and Jain.The complex is a leading example of Indian rock-cut architecture, and several are not strictly caves in they have no roof. Cave 16 features the largest single monolithic rock excavation in the world, the Kailash temple,chariot-shaped monument dedicated to the god Shiva. The Kailash temple excavation also features sculptures depicting various Hindu deities as well as relief panels summarizing the two major Hindu epics. There are over 100 caves at the site, all excavated from the basalt cliffs in the Charanandri Hills, 34 of which are open to public. These consist of 17 Hindu 12 Buddhist and 5 Jain caves,each group representing deities and mythologies prevalent in the 1st millennium CE, as well as monasteries of each respective religion.The Ellora Caves, located in the state of Maharashtra, India, are a remarkable group of 34 rock-cut temples and monasteries that showcase the extraordinary architectural and artistic skills of ancient Indian craftsmen. These caves, which date back to between the 5th and 10th centuries, represent one of the largest and most significant cave temple complexes in the world. The site is a unique blend of Buddhist, Hindu, and Jain temples, reflecting the religious harmony and cultural fusion that existed during the period.Ellora Caves are carved into the basalt cliffs of the Sahyadri Mountain range and stretch for about 2 kilometers. The caves are organized into three distinct groups based on their religious affiliation: the Buddhist caves, the Hindu caves, and the Jain caves. The Buddhist caves, which are the oldest, primarily consist of monasteries and prayer halls, adorned with intricate carvings of Buddha and scenes from his life. These caves served as places of meditation and reflection for Buddhist monks and were used between the 5th and 7th centuries.The Hindu caves at Ellora, which include some of the most grandiose and stunning sculptures, were carved during the Rashtrakuta dynasty between the 7th and 9th centuries. These caves are marked by intricate carvings and monumental sculptures depicting Hindu deities, mythological scenes, and stories from the epics. The most famous of these is the Kailasa Temple (Cave 16), a massive monolithic structure carved out of a single piece of rock. The temple, dedicated to Lord Shiva, is a marvel of engineering and design, with detailed carvings of various deities, animals, and mythological narratives.The Jain caves, the youngest of the three, were created between the 9th and 10th centuries and are distinguished by their elegance and intricate sculptures, which reflect the non-violent teachings of Jainism. The Jain caves are less crowded than the Buddhist and Hindu caves, but their beauty is equally impressive. The carvings in these caves often depict Tirthankaras, the revered spiritual leaders of Jainism.Ellora's significance lies not only in its diverse religious history but also in the masterful craftsmanship of the carvings and sculptures. The complex is an architectural feat, with the caves carved entirely out of solid rock using simple tools, yet demonstrating extraordinary precision and artistic expression. The elaborate temples, prayer halls, and sculptures reflect the religious and cultural values of the time, and they continue to be a source of inspiration for visitors from all over the world.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Sundarbans information)
"Sundarbans": {
        history: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Spread across parts of India and Bangladesh, this forest is the largest Mangrove forest in the world. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels. Sundarbans is home to the world's largest area of mangrove forests. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans West (Bangladesh), Sundarbans South (Bangladesh), Sundarbans East (Bangladesh) and Sundarbans National Park (India).The Sundarbans, located in the delta region of the Ganges, Brahmaputra, and Meghna rivers, is the largest mangrove forest in the world, covering parts of India and Bangladesh. It is a UNESCO World Heritage Site, known for its vast biodiversity and critical ecological importance. The history of the Sundarbans dates back to ancient times, with references to the region found in various texts from the past.referring to the sundari trees (Heritiera fomes) that dominate the region. Historically, the Sundarbans was a dense and untamed forest, home to various indigenous tribes and wildlife. The region’s early history can be traced to the period of the Gupta Empire (circa 3rd to 6th century CE), though it was not extensively settled. The dense mangroves, swamps, and tidal waterways made the area difficult to navigate, which kept it isolated for centuries.During the medieval period, the region came under the control of various dynasties, such as the Bengal Sultanate and the Mughal Empire. In the 16th and 17th centuries, the Mughals utilized the Sundarbans for its natural resources, especially timber and honey, and they also established forts along the coastline for defense purposes. However, the area remained largely undeveloped and sparsely populated due to the hostile environment and the challenges posed by the tides and floods.In the 19th century, British colonialists began to take a more active interest in the Sundarbans, viewing it as a potential resource for timber, salt, and other products. The British undertook large-scale deforestation and land reclamation to expand agricultural land, particularly for rice cultivation. This exploitation caused significant ecological changes, disrupting the natural balance of the ecosystem. The British also introduced plantations of non-native species, further altering the environment.The region's historical significance grew as a center of resistance during the British colonial period. In 1857, during the Indian Rebellion of 1857, the Sundarbans became a refuge for freedom fighters who used the dense mangrove forests to escape British forces. The freedom struggle in this region is often remembered for the bravery of local rebels.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Khajuraho Temples information)
"Khajuraho Temples": {
        history: "The Khajuraho Temples, located in the Chhatarpur district of Madhya Pradesh, India, are one of the most renowned architectural wonders of ancient India. Built between 950 and 1150 AD by the Chandela dynasty, these temples are a testament to the grandeur and craftsmanship of Indian temple architecture during the medieval period. The temples were initially part of a larger complex, comprising nearly 85 structures, though only 25 temples remain today. The site is famous for its intricate carvings, architectural precision, and a blend of religious and cultural symbolism.The temples were constructed primarily in sandstone, with ornate carvings and sculptures that reflect various themes, including Hindu deities, celestial beings, animals, and humans. The sculptures are famous for their detailed depictions of life in ancient India, with some portraying sensual themes, which have sparked much discussion over the centuries. These sculptures are thought to symbolize the celebration of life, love, and the universe's divine forces. The temples are a mixture of both Jain and Hindu influences, showcasing the coexistence of different religious practices during the Chandela rule.The temples are divided into three main groups: the Western, Eastern, and Southern groups. The Western group is the most famous and includes the largest and most impressive temples, such as the Kandariya Mahadev Temple, which is dedicated to Lord Shiva. This temple, with its towering spire, symbolizes Mount Meru, the mythical mountain that is considered the center of the universe in Hindu cosmology. Other significant temples in this group include the Lakshmana Temple and the Vishvanatha Temple, which feature magnificent sculptures and intricate architectural elements.The Eastern group consists of Jain temples, such as the Adinatha Temple, which highlights the importance of Jainism during the Chandela period. Jainism, with its emphasis on non-violence and spiritual liberation, was an integral part of the region's religious fabric. These temples are characterized by their simplicity and refined beauty, in contrast to the more flamboyant Hindu temples.Khajuraho’s architecture is unique because of the way it integrates with its natural surroundings, with temples positioned to capture the play of light and shadow throughout the day. The temples' design follows the principles of Vastu Shastra, an ancient Indian system of architecture that aims to harmonize human dwellings with nature. This makes the temples not only an architectural marvel but also a symbol of the spiritual and cosmic order.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Darjeeling Tea Gardens information)
"Darjeeling Tea Gardens": {
        history: "The Darjeeling Tea Gardens, located in the northeastern Indian state of West Bengal, have a rich and storied history that dates back to the 19th century. Known for producing some of the finest tea in the world, Darjeeling's tea gardens are a symbol of the region's cultural and economic significance. The region's favorable climate, with its cool temperatures, frequent rainfall, and misty hills, provides the ideal environment for growing high-quality tea, particularly the delicate and aromatic Darjeeling tea, often referred to as the.Tea cultivation in Darjeeling began in the early 1800s, during the British colonial period. The British East India Company had been seeking to break China's monopoly on tea production, and in their search for suitable regions, they found the cool, mist-covered hills of Darjeeling to be ideal for tea cultivation. The first tea plants were brought from China and Assam, and experimental tea gardens were established in the 1830s. However, it was in 1852 that the first commercial tea garden, the was founded by the British.The introduction of tea plantations in Darjeeling coincided with the British colonial interest in expanding their empire’s economic reach, and tea quickly became one of the most valuable exports from India. The tea estates were initially worked by laborers brought from regions like Bengal, Bihar, and the neighboring Himalayan areas. These workers, often from lower castes or tribal communities, played a crucial role in the growth of the Darjeeling tea industry. Over time, the labor force was supplemented by a community of Nepalese and Bhutanese immigrants, who brought their own skills and techniques to tea cultivation.By the late 19th century, Darjeeling's tea had gained international recognition for its unique flavor, which was influenced by the region's distinctive soil, altitude, and climate. The tea became a favorite among British and European tea drinkers and, later, tea lovers around the world. To preserve the distinct qualities of Darjeeling tea, the industry introduced strict regulations and certifications. In 2004, Darjeeling tea was granted a Geographical Indication (GI) status, which helped protect its authenticity and ensured that only tea grown in the Darjeeling region could be labeled as Darjeeling Tea. ",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ajanta Caves information)
"Ajanta Caves": {
        history: "The Ajanta Caves, located in the state of Maharashtra, India, are a group of rock-cut Buddhist cave complexes that date back to the 2nd century BCE and were used until the 6th century CE. Situated in a gorge along the Waghora River, the caves are renowned for their intricate paintings, sculptures, and their significance in Buddhist history. These caves were initially discovered in 1819 by a British hunting party, but they had been largely forgotten for centuries before that.The Ajanta Caves are carved into the sides of a rugged cliff and contain 30 caves, including monasteries (Viharas) and temples (Chaityas). The caves were created under the patronage of various dynasties, including the Satavahanas and Vakatakas. They served as a retreat for Buddhist monks, where they meditated, studied, and lived. The caves are divided into two phases: the early phase (2nd century BCE to 1st century CE) and the later phase (5th to 6th century CE). The first phase is characterized by the early Buddhist art and architecture, while the second phase reflects the rise of Mahayana Buddhism, with more elaborate sculptures and colorful frescoes.The paintings in the Ajanta Caves are considered masterpieces of ancient Indian art. The walls of the caves are adorned with detailed depictions of the life of the Buddha, scenes from Jataka tales (stories of the Buddha’s previous lives), and illustrations of the Buddha’s teachings. The murals in these caves are unique in their use of natural colors and the detailed portrayal of human emotions, landscapes, and daily life in ancient India. The style of painting evolved over time, with the later caves showing a much more sophisticated technique and a greater emphasis on vivid storytelling.In addition to the murals, the Ajanta Caves also contain several sculptures, primarily of the Buddha and Bodhisattvas, as well as motifs such as lotus flowers and other symbols of Buddhism. These sculptures are carved with great finesse and are a testament to the skilled craftsmanship of the artisans who created them. The architecture of the caves includes intricate columns, elaborate carvings, and vaulted ceilings, designed to enhance the spiritual experience of the visitors.The decline of the Ajanta Caves began around the 7th century CE, as the rise of Hinduism and the changing political landscape led to a shift in patronage. The caves were eventually abandoned and remained hidden for centuries until their rediscovery in the 19th century.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Udaipur City Palace information)
"Udaipur City Palace": {
        history: "Udaipur City Palace, an architectural marvel located in the city of Udaipur, Rajasthan, is one of the largest and most magnificent royal palaces in India. It stands as a testimony to the grandeur and opulence of the Mewar dynasty and its rulers. The construction of the palace began in 1559 under Maharana Udai Singh II, the founder of Udaipur, and was gradually expanded by his successors over several centuries. The palace is strategically located on the eastern banks of Lake Pichola, offering stunning views of the lake and the surrounding Aravalli Hills. Its construction was carefully planned, with several wings, courtyards, gardens, and halls being added over time, making it a sprawling complex.The City Palace is a blend of Rajasthani and Mughal architectural styles, featuring intricate carvings, stunning mirror work, beautiful frescoes, and grand courtyards. The palace's design is based on the traditional Rajput architectural style, with several smaller palaces built within its complex. One of the most significant features of the palace is its intricate courtyards, which serve as the heart of the structure, with delicate marble balconies and open-air spaces that create an air of serenity and elegance.The palace is renowned for its exquisite rooms, like the Zenana Mahal (women's quarters), the Sheesh Mahal (Hall of Mirrors), and the Krishna Vilas, which display a perfect amalgamation of traditional Indian architecture and Mughal influences. Each room in the palace is adorned with fine frescoes, decorative tiles, and elaborate wooden carvings, reflecting the rich cultural heritage of the region.The City Palace served as the royal residence of the Mewar rulers for centuries, and its strategic location made it an important military and political center. Throughout its history, the palace has been a symbol of power, wealth, and cultural prominence in Rajasthan. Over time, it was expanded with various additions like the Badi Mahal (Big Palace), the Bhim Vilas, and the Amar Vilas, which showcase the royal lifestyle and aesthetics of the period.In the 20th century, parts of the palace were converted into museums, attracting tourists from around the world. These museums house an impressive collection of artifacts, including paintings, weapons, and antique furniture that offer a glimpse into the royal life and the rich history of Udaipur and the Mewar dynasty. The palace is also home to several temples, including the Jagdish Temple, which is an example of Indo-Aryan architecture and a site of religious importance.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Andaman Islands information)
"Andaman Islands": {
        history: "The Andaman Islands, an archipelago located in the Bay of Bengal, have a rich and intriguing history that dates back thousands of years. These islands are known for their diverse cultures, natural beauty, and strategic location, which have shaped their past. The indigenous tribes of the Andaman Islands, such as the Great Andamanese, Onge, Jarwa, and Sentinelese, have lived on these islands for over 26,000 years. These tribes have remained largely isolated from the outside world, with the Sentinelese, in particular, maintaining a fiercely independent and uncontacted lifestyle. The archipelago was known to ancient sailors and was mapped in the 15th century by Portuguese navigators. However, the islands remained relatively unknown to the Western world for much longer.Historically, the islands were part of maritime trade routes, with ancient Indian and Southeast Asian traders navigating the waters around them. The British colonization of India significantly impacted the Andaman Islands. In 1857, following the Indian Rebellion, the British began using the Andaman Islands as a penal colony, most notably the Cellular Jail in Port Blair, which became infamous for housing political prisoners. The prison housed many freedom fighters and activists during the British colonial era. The brutal treatment of prisoners in this facility left a dark legacy, with the jail becoming a symbol of the Indian struggle for independence. The most notable among the prisoners was Vinayak Damodar Savarkar, who later played a significant role in the Indian freedom movement.The Andaman Islands served as a vital strategic location during World War II. The Japanese occupied the islands from 1942 to 1945, during the course of the war. This period brought significant changes to the islands, with Japanese forces establishing military control and infrastructure. However, their occupation was short-lived as the British reclaimed the islands after the war.Post-independence, the Andaman Islands became part of the Indian Union in 1950, and the islands began to see more development and infrastructure projects. Over time, the region became a popular tourist destination due to its pristine beaches, coral reefs, and unique wildlife. However, the Andaman Islands also face challenges in balancing development with the preservation of their unique indigenous cultures. The local tribes continue to live in isolation, and efforts have been made to ensure their protection and prevent outside interference in their traditional ways of life.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Golden Temple, Amritsar information)
"Golden Temple, Amritsar": {
        history: "The Golden Temple, also known as Harmandir Sahib, is one of the most revered and iconic religious sites in the world, located in Amritsar, Punjab, India. The history of this sacred temple traces back to the late 16th century, and it holds immense significance for Sikhs, as it represents the spiritual and cultural heart of Sikhism. The foundation stone of the Golden Temple was laid in 1581 by the fourth Sikh Guru, Guru Ram Das, and its construction was completed by his successor, Guru Arjan Dev, in 1589. The temple was built around a holy tank, known as the Amrit Sarovar, which is believed to possess purifying qualities and is considered a symbol of divine grace. The gold-plated dome and intricate marble work, combined with the stunning golden facade, make it an architectural masterpiece. The Golden Temple is surrounded by a large pool of water, where pilgrims take a dip to cleanse their sins and seek spiritual solace.Historically, the temple has witnessed numerous events, both peaceful and turbulent. In the 17th century, during the Mughal Empire, the temple was destroyed and rebuilt multiple times. In 1757, it was attacked by the Afghan invader Ahmad Shah Durrani, and later in the 19th century, it was restored under the leadership of Maharaja Ranjit Singh, the leader of the Sikh Empire, who adorned the temple with its current golden covering. The golden layers were added in the early 19th century, making it a unique and eye-catching religious monument.Throughout its history, the Golden Temple has served not only as a place of worship but also as a symbol of equality and community service. The temple houses the Guru Granth Sahib, the central religious scripture of Sikhism, and the recitation of the holy scripture can be heard continuously throughout the day. The Langar (community kitchen) at the Golden Temple serves free meals to thousands of visitors every day, irrespective of their caste, creed, or religion, reflecting the core Sikh values of selfless service and equality.The Golden Temple has also been a center of political and social movements, especially in the 20th century. One of the most significant and tragic events in its history occurred in 1984, during Operation Blue Star, when the Indian Army stormed the temple complex to remove armed militants who were hiding inside. The operation led to significant damage to the temple and the loss of many lives, which continues to be a painful chapter in the history of modern India.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kaziranga National Park information)
"Kaziranga National Park": {
        history: "Kaziranga National Park, located in the northeastern state of Assam, India, is one of the most renowned wildlife sanctuaries in the world, famous for its population of the Indian one-horned rhinoceros. The park, which spans over 1,000 square miles (2,600 square kilometers) of grassland, wetlands, and forest, was established in 1905 as a reserve forest under the protection of the British colonial government. Its primary aim was to protect the dwindling population of the one-horned rhinoceros, which had faced significant threats from hunting and habitat destruction. In 1974, Kaziranga was officially declared a national park and became a UNESCO World Heritage Site in 1985 due to its outstanding biodiversity and the critical role it plays in protecting the Indian rhinoceros, along with a variety of other endangered species.The history of Kaziranga is intertwined with the efforts to conserve the Indian rhinoceros, which once faced the threat of extinction. By the early 20th century, the rhinoceros population had drastically declined due to poaching for their horns, which were highly prized in traditional medicine. The park's establishment was a response to this decline, with early conservationists taking steps to protect the species and their habitat. The forest areas of Kaziranga provided a perfect sanctuary for the rhinoceros, with the region's dense grasslands, riverine habitats, and wetlands offering both food and shelter.In the mid-20th century, under the leadership of conservationists like Dr. Salim Ali and the efforts of the Assam state government, stricter anti-poaching laws were implemented, and wildlife management strategies were introduced. These efforts significantly boosted the population of the Indian rhinoceros. Over time, Kaziranga's role as a sanctuary expanded to include the protection of other endangered species, such as the Bengal tiger, wild buffalo, elephants, and various species of birds. The park's landscape of tall grasslands, floodplains of the Brahmaputra River, and wooded hills provides a rich habitat for a wide range of flora and fauna, making it an essential area for biodiversity conservation.In recent decades, Kaziranga has faced challenges, such as floods, poaching, and human-wildlife conflict. The annual floods caused by the Brahmaputra River often inundate large parts of the park, affecting both wildlife and human settlements. However, the park has continued to thrive, thanks to the combined efforts of the forest department, local communities, and conservation organizations. Modern conservation techniques, such as using advanced surveillance systems and anti-poaching squads, have helped maintain Kaziranga’s status as one of the best-managed protected areas in India.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Hebbe Falls information)
"Hebbe Falls": {
        history: "Hebbe Falls is a stunning waterfall located in the Chikmagalur district of Karnataka, India, nestled amidst the lush green hills of the Western Ghats. This picturesque waterfall is situated in the Hebbe village, which lies approximately 10 kilometers from the town of Kemmangundi, a popular hill station. Hebbe Falls is a hidden gem in the region, attracting tourists and nature enthusiasts who come to witness its serene beauty and tranquil surroundings.The waterfall itself is divided into two sections: the Doddakallur Falls, which is the upper part, and the Chikkakallur Falls, the lower section. The Doddakallur Falls has a height of about 168 meters, while the Chikkakallur Falls drops from a height of 10 meters. The water cascades down from the peaks of the Western Ghats, creating a mesmerizing sight as it plunges into a large pool below. The falls are fed by the rainwater collected in the surrounding mountains, making the sight even more majestic during the monsoon season.referring to the natural spring that feeds the falls. The waterfall is situated deep in the forest, making it somewhat challenging to reach, but this isolation adds to its untouched beauty. It is surrounded by dense forests and coffee plantations, which are characteristic of the region. The surrounding area is known for its rich biodiversity, with a variety of flora and fauna thriving in the area, making it an ideal spot for eco-tourism and nature walks.Hebbe Falls has historical significance as well. The area around Chikmagalur, including Kemmangundi, was once the home to the great Ruler of the Vijayanagara Empire, King Krishnadevaraya, who is said to have visited this region during his reign. The area was also known for its involvement in coffee cultivation, which has flourished in the region for centuries. Today, the coffee estates around Hebbe Falls are still a major contributor to the local economy.The falls remained relatively unknown to many until recent years, when increased interest in eco-tourism and the development of roads to the falls made it more accessible to visitors. Tourists can now reach Hebbe Falls through a scenic jeep ride or by trekking through the dense forests. Despite the rise in tourism, the falls have managed to maintain their natural charm and continue to be an ideal destination for adventure lovers and those seeking solace in nature.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
    // ... (other destination information)
};

// DOM elements
const destinationsContainer = document.getElementById('destinationsContainer');
const reviewsContainer = document.getElementById('reviewsContainer');
const galleryContainer = document.getElementById('galleryContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const modal = document.getElementById('bookingModal');
const hotelBookingModal = document.getElementById('hotelBookingModal');
const restaurantBookingModal = document.getElementById('restaurantBookingModal');
const cabBookingModal = document.getElementById('cabBookingModal');
const paymentModal = document.getElementById('paymentModal');

let displayedDestinations = 8;

// Create destination card
function createDestinationCard(destination, index) {
    const card = document.createElement('div');
    card.className = 'destination animate__animated animate__fadeIn';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <div class="destination-info">
            <h3>${destination.name}</h3>
            <span class="price">₹${destination.price}</span>
            <span class="rating">★ ${destination.rating} (${destination.reviews} reviews)</span>
            <button class="book-btn" onclick="openModal('${destination.name}')">Book Now</button>
        </div>
    `;
    return card;
}

// Create review card
function createReviewCard(review, index) {
    const card = document.createElement('div');
    card.className = 'review animate__animated animate__fadeIn';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <h4>${review.name} ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</h4>
        <p>${review.text}</p>
    `;
    return card;
}

// Create gallery item
function createGalleryItem(imageSrc, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item animate__animated animate__fadeIn';
    item.style.animationDelay = `${index * 0.1}s`;
    item.innerHTML = `<img src="${imageSrc}" alt="Gallery image ${index + 1}">`;
    return item;
}



// Display destinations
function displayDestinations() {
    destinationsContainer.innerHTML = '';
    for (let i = 0; i < displayedDestinations && i < destinations.length; i++) {
        destinationsContainer.appendChild(createDestinationCard(destinations[i], i));
    }
    showMoreBtn.style.display = displayedDestinations >= destinations.length ? 'none' : 'block';
}

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        reviewsContainer.appendChild(createReviewCard(review, index));
    });
}

function displayGallery() {
    galleryContainer.innerHTML = '';
    galleryImages.forEach((image, index) => {
        galleryContainer.appendChild(createGalleryItem(image, index));
    });
}

showMoreBtn.addEventListener('click', () => {
    displayedDestinations += 4;
    displayDestinations();
});

displayDestinations();
displayReviews();
displayGallery();





// Open booking modal
function openModal(destination) {
    const modalTitle = document.getElementById('modalTitle');
    const modalHistory = document.getElementById('modalHistory');
    const modalImage = document.getElementById('modalImage');
    
    modalTitle.textContent = destination;
    
    const info = destinationInfo[destination];
    if (info) {
        modalHistory.textContent = info.history;
        modalImage.src = destinations.find(d => d.name === destination).image;
        
        const hotelsList = document.getElementById('hotelsList');
        const restaurantsList = document.getElementById('restaurantsList');
        const cabsList = document.getElementById('cabsList');
        
        hotelsList.innerHTML = info.hotels.map(hotel => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${hotel.name}</h4>
                <p>₹${hotel.price} per night</p>
                <p>★ ${hotel.rating}</p>
                <button onclick="openHotelBookingModal('${destination}', '${hotel.name}', ${hotel.price})">Book Hotel</button>
            </div>
        `).join('');
        
        restaurantsList.innerHTML = info.restaurants.map(restaurant => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${restaurant.name}</h4>
                <p>Average cost: ₹${restaurant.price} for two</p>
                <p>★ ${restaurant.rating}</p>
                <button onclick="openRestaurantBookingModal('${destination}', '${restaurant.name}', ${restaurant.price})">Book Table</button>
            </div>
        `).join('');
        
        cabsList.innerHTML = info.cabs.map(cab => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${cab.name}</h4>
                <p>Estimated fare: ₹${cab.price}</p>
                <p>★ ${cab.rating}</p>
                <button onclick="openCabBookingModal('${destination}', '${cab.name}', ${cab.price})">Book Cab</button>
            </div>
        `).join('');
    } else {
        modalHistory.textContent = "Information for this destination is not available.";
        modalImage.src = "placeholder.jpg";
    }
    
    modal.style.display = 'block';
}

function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeModal(this.closest('.modal'));
    }
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    });
});



//Destination Booking
function openModal(destination) {
    const modalTitle = document.getElementById('modalTitle');
    const modalHistory = document.getElementById('modalHistory');
    const modalImage = document.getElementById('modalImage');
    const bookDestinationSection = document.getElementById('bookDestinationSection');
    
    modalTitle.textContent = destination;
    
    const info = destinationInfo[destination];
    if (info) {
        modalHistory.textContent = info.history;
        modalImage.src = destinations.find(d => d.name === destination).image;
        
        const hotelsList = document.getElementById('hotelsList');
        const restaurantsList = document.getElementById('restaurantsList');
        const cabsList = document.getElementById('cabsList');
        
        hotelsList.innerHTML = info.hotels.map(hotel => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${hotel.name}</h4>
                <p>₹${hotel.price} per night</p>
                <p>★ ${hotel.rating}</p>
                <button onclick="openHotelBookingModal('${destination}', '${hotel.name}', ${hotel.price})">Book Hotel</button>
            </div>
        `).join('');
        
        restaurantsList.innerHTML = info.restaurants.map(restaurant => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${restaurant.name}</h4>
                <p>Average cost: ₹${restaurant.price} for two</p>
                <p>★ ${restaurant.rating}</p>
                <button onclick="openRestaurantBookingModal('${destination}', '${restaurant.name}', ${restaurant.price})">Book Table</button>
            </div>
        `).join('');
        
        cabsList.innerHTML = info.cabs.map(cab => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${cab.name}</h4>
                <p>Estimated fare: ₹${cab.price}</p>
                <p>★ ${cab.rating}</p>
                <button onclick="openCabBookingModal('${destination}', '${cab.name}', ${cab.price})">Book Cab</button>
            </div>
        `).join('');


// Set up the Book Destination section
        const destinationPackagePrice = destinations.find(d => d.name === destination).price;
        document.getElementById('destinationPackagePrice').textContent = `₹${destinationPackagePrice}`;
        
        const bookDestinationBtn = document.getElementById('bookDestinationBtn');
        bookDestinationBtn.onclick = function() {
            bookDestinationPackage(destination, destinationPackagePrice);
        };

        bookDestinationSection.style.display = 'block';
    } else {
        modalHistory.textContent = "Information for this destination is not available.";
        modalImage.src = "placeholder.jpg";
        bookDestinationSection.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function bookDestinationPackage(destination, price) {
    alert(`You are booking the entire package for ${destination} at ₹${price}. This feature will be available soon!`);
}

function bookDestination(destinationName, price) {
    alert(`You are booking ${destinationName} for ₹${price}. This feature is coming soon!`);
} 




// Hotel Booking Modal Functionality
let currentDestination = '';
let currentHotelName = '';
let currentHotelPrice = 0;

function openHotelBookingModal(destination, hotelName, hotelPrice) {
    currentDestination = destination;
    currentHotelName = hotelName;
    currentHotelPrice = hotelPrice;
    document.getElementById('hotelName').textContent = hotelName;
    document.getElementById('hotelPrice').textContent = `₹${hotelPrice} per night`;
    hotelBookingModal.style.display = 'block';
    modal.style.display = 'none';
}

document.getElementById('hotelBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.hotelName = currentHotelName;
    bookingDetails.pricePerNight = currentHotelPrice;
    
    openPaymentModal(bookingDetails, 'hotel');
}



// Restaurant Booking Modal Functionality
function openRestaurantBookingModal(destination, restaurantName, restaurantPrice) {
    currentDestination = destination;
    currentRestaurantName = restaurantName;
    currentRestaurantPrice = restaurantPrice;
    document.getElementById('restaurantName').textContent = restaurantName;
    document.getElementById('restaurantPrice').textContent = `Average cost: ₹${restaurantPrice} for two`;
    restaurantBookingModal.style.display = 'block';
    modal.style.display = 'none';
  }
  
  document.getElementById('restaurantBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.restaurantName = currentRestaurantName;
    bookingDetails.averageCost = currentRestaurantPrice;
    
    console.log('Restaurant Booking Details:', bookingDetails);
    alert('Restaurant table booked successfully! Thank you for your reservation.');
    
    closeModal(restaurantBookingModal);
    this.reset();
  }
  

  /*Restaurant Payment Methods*/
const restaurantBookingForm = document.getElementById('restaurantBookingForm');
const restaurantPaymentModal = document.getElementById('restaurantPaymentModal');
const bookingConfirmationModal = document.getElementById('bookingConfirmationModal');
const restaurantPaymentSpan = restaurantPaymentModal.getElementsByClassName('close')[0];
restaurantBookingForm.onsubmit = function(e) {
  e.preventDefault();
  restaurantPaymentModal.style.display = "block";
}
restaurantPaymentSpan.onclick = function() {
  restaurantPaymentModal.style.display = "none";
}
const restaurantPaymentForm = document.getElementById('restaurantPaymentForm');
restaurantPaymentForm.onsubmit = function(e) {
  e.preventDefault();
  restaurantPaymentModal.style.display = "none";
  bookingConfirmationModal.style.display = "block";
}

const closeConfirmation = document.getElementById('closeConfirmation');
closeConfirmation.onclick = function() {
  bookingConfirmationModal.style.display = "none";
  restaurantBookingForm.reset();
  restaurantPaymentForm.reset();
}
window.onclick = function(event) {
  if (event.target == restaurantPaymentModal) {
    restaurantPaymentModal.style.display = "none";
  }
  if (event.target == bookingConfirmationModal) {
    bookingConfirmationModal.style.display = "none";
  }
}


// Cab Booking Modal Functionality
function openCabBookingModal(destination, cabName, cabPrice) {
    currentDestination = destination;
    currentCabName = cabName;
    currentCabPrice = cabPrice;
    document.getElementById('cabName').textContent = cabName;
    document.getElementById('cabPrice').textContent = `Estimated fare: ₹${cabPrice}`;
    cabBookingModal.style.display = 'block';
    modal.style.display = 'none';
  }
  
  document.getElementById('cabBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.cabName = currentCabName;
    bookingDetails.estimatedFare = currentCabPrice;
    
    console.log('Cab Booking Details:', bookingDetails);
    alert('Cab booked successfully! Your ride will arrive at the specified time and location.');
    
    closeModal(cabBookingModal);
    this.reset();
  }

/*Cab Booking Payment Methods*/
const cabBookingForm = document.getElementById('cabBookingForm');
const cabPaymentModal = document.getElementById('cabPaymentModal');
const cabBookingConfirmationModal = document.getElementById('cabBookingConfirmationModal');
const cabPaymentSpan = cabPaymentModal.getElementsByClassName('close')[0];
cabBookingForm.onsubmit = function(e) {
  e.preventDefault();
  cabPaymentModal.style.display = "block";
}
cabPaymentSpan.onclick = function() {
  cabPaymentModal.style.display = "none";
}

const cabPaymentForm = document.getElementById('cabPaymentForm');
cabPaymentForm.onsubmit = function(e) {
  e.preventDefault();
  cabPaymentModal.style.display = "none";
  cabBookingConfirmationModal.style.display = "block";
}

const closeCabConfirmation = document.getElementById('closeCabConfirmation');
closeCabConfirmation.onclick = function() {
  cabBookingConfirmationModal.style.display = "none";
  cabBookingForm.reset();
  cabPaymentForm.reset();
}
window.onclick = function(event) {
  if (event.target == cabPaymentModal) {
    cabPaymentModal.style.display = "none";
  }
  if (event.target == cabBookingConfirmationModal) {
    cabBookingConfirmationModal.style.display = "none";
  }
}


//PAYMENT CARD DETAILS
let currentBookingDetails = {};
let currentBookingType = '';

function openPaymentModal(bookingDetails, bookingType) {
    currentBookingDetails = bookingDetails;
    currentBookingType = bookingType;
    
    let title, amount;
    switch(bookingType) {
        case 'hotel':
            title = `Payment for ${bookingDetails.hotelName}`;
            amount = bookingDetails.pricePerNight * bookingDetails.nights;
            break;
        case 'restaurant':
            title = `Payment for ${bookingDetails.restaurantName}`;
            amount = bookingDetails.averageCost;
            break;
        case 'cab':
            title = `Payment for ${bookingDetails.cabName}`;
            amount = bookingDetails.estimatedFare;
            break;
        default:
            title = 'Payment';
            amount = 0;
    }
    
    document.getElementById('paymentModalTitle').textContent = title;
    document.getElementById('paymentAmount').textContent = `Total Amount: ₹${amount}`;
    
    document.getElementById('userDetailsForm').style.display = 'block';
    document.getElementById('paymentOptions').style.display = 'none';
    document.getElementById('cardPaymentForm').style.display = 'none';
    
    document.getElementById('paymentModal').style.display = 'block';
}

document.getElementById('paymentUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userDetails = Object.fromEntries(new FormData(e.target));
    currentBookingDetails = { ...currentBookingDetails, ...userDetails };
    
    document.getElementById('userDetailsForm').style.display = 'none';
    document.getElementById('paymentOptions').style.display = 'block';
});

document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        const paymentMethod = this.getAttribute('data-payment');
        if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
            document.getElementById('paymentOptions').style.display = 'none';
            document.getElementById('cardPaymentForm').style.display = 'block';
        } else {
            processPayment(paymentMethod);
        }
    });
});

document.getElementById('cardDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cardDetails = Object.fromEntries(new FormData(e.target));
    processPayment('card', cardDetails);
});



//FUNCTION TO PROCESS THE PAYMENT
function processPayment(paymentMethod, cardDetails = {}) {
    console.log('Payment details:', {
        ...currentBookingDetails,
        paymentMethod: paymentMethod,
        cardDetails: cardDetails,
        bookingType: currentBookingType
    });
    
    let message = `Payment successful via ${paymentMethod} for `;
    switch(currentBookingType) {
        case 'hotel':
            message += `${currentBookingDetails.hotelName} in ${currentBookingDetails.destination}!`;
            break;
        case 'restaurant':
            message += `${currentBookingDetails.restaurantName} in ${currentBookingDetails.destination}!`;
            break;
        case 'cab':
            message += `${currentBookingDetails.cabName} in ${currentBookingDetails.destination}!`;
            break;
        default:
            message += 'your booking!';
    }
    message += `\nThank you for your reservation, ${currentBookingDetails.paymentUserName}.`;
    message += `\nA confirmation email has been sent to ${currentBookingDetails.paymentUserEmail}.`;
    
    alert(message);
    
    closeModal(document.getElementById('paymentModal'));
    resetForms();
}

function resetForms() {
    document.getElementById('hotelBookingForm').reset();
    document.getElementById('restaurantBookingForm').reset();
    document.getElementById('cabBookingForm').reset();
    document.getElementById('paymentUserForm').reset();
    document.getElementById('cardDetailsForm').reset();
}

document.getElementById('hotelBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.hotelName = currentHotelName;
    bookingDetails.pricePerNight = currentHotelPrice;
    
    openPaymentModal(bookingDetails, 'hotel');
}

function closeModal(modalElement) {
    if (modalElement) {
        modalElement.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeModal(this.closest('.modal'));
    }
});

//BOOK DESTINATION PAYMENT CARD DETAILS

var destinationPackageModal = document.getElementById("destinationPackageModal");
var packageConfirmationModal = document.getElementById("packageConfirmationModal");
var packageSpan = destinationPackageModal.getElementsByClassName("close")[0];
packageSpan.onclick = function() {
  destinationPackageModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == destinationPackageModal) {
    destinationPackageModal.style.display = "none";
  }
}
function openDestinationPackageModal(destination, price) {
  document.getElementById("packageModalTitle").textContent = `Book ${destination} Package`;
  destinationPackageModal.style.display = "block";
}
document.querySelectorAll(".book-destination-btn").forEach(button => {
  button.addEventListener("click", function() {
    const destination = this.getAttribute("data-destination");
    const price = this.getAttribute("data-price");
    openDestinationPackageModal(destination, price);
  });
});
document.querySelectorAll('input[name="packagePaymentMethod"]').forEach(input => {
  input.addEventListener("change", function() {
    document.getElementById("packageCardDetails").style.display = this.value.includes("card") ? "block" : "none";
    document.getElementById("packageBankingDetails").style.display = this.value === "net-banking" ? "block" : "none";
    document.getElementById("packageUpiDetails").style.display = this.value === "upi" ? "block" : "none";
  });
});

document.getElementById("packagePaymentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("packageName").value;
  const destination = document.getElementById("packageModalTitle").textContent.replace("Book ", "").replace(" Package", "");
  
  setTimeout(() => {
    destinationPackageModal.style.display = "none";
    document.getElementById("packageConfirmationMessage").textContent = `Your ${destination} package has been successfully booked, ${name}!`;
    packageConfirmationModal.style.display = "block";
  }, 1500);
});

document.getElementById("closePackageConfirmation").addEventListener("click", function() {
  packageConfirmationModal.style.display = "none";
});




//SEARCH INPUT
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
function filterDestinations(query) {
    return destinations.filter(destination => 
        destination.name.toLowerCase().includes(query.toLowerCase())
    );
}
function displaySearchResults(results) {
    destinationsContainer.innerHTML = '';
    if (results.length === 0) {
        destinationsContainer.innerHTML = '<p class="no-results">No destination found</p>';
    } else {
        results.forEach((destination, index) => {
            destinationsContainer.appendChild(createDestinationCard(destination, index));
        });
    }
    showMoreBtn.style.display = 'none';
}

searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) {
        const searchResults = filterDestinations(query);
        displaySearchResults(searchResults);
    } else {
        displayDestinations();
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (query === '') {
        displayDestinations();
    }
});

function displayDestinations() {
    destinationsContainer.innerHTML = '';
    for (let i = 0; i < displayedDestinations && i < destinations.length; i++) {
        destinationsContainer.appendChild(createDestinationCard(destinations[i], i));
    }
    showMoreBtn.style.display = displayedDestinations >= destinations.length ? 'none' : 'block';
}
displayDestinations(); 
