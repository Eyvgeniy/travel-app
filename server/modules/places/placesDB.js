const places = [
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_1",
    localizations: [
      {
        lang: "ru",
        name: "Биг-Бен",
        description:
          "Мало что ассоциируется с Лондоном больше, чем эта огромная башня высотой в 97 метров, увенчанная гигантскими часами и звучным колоколом, который, собственно, и называется большим Беном.",
      },
      {
        lang: "en",
        name: "Big-Ben",
        description:
          "Few things are associated with London more than this enormous 97-meter-high tower topped with a giant clock and a sonorous bell, which is actually called Big Ben.",
      },
      {
        lang: "fr",
        name: "Big-Ben",
        description:
          "Peu de choses sont plus associées à Londres que cette immense tour de 97 mètres de haut surmontée d'une horloge géante et d'une cloche retentissante appelée Big Ben.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_2",
    localizations: [
      {
        lang: "ru",
        name: "Букингемский дворец",
        description:
          "Одним из немногих в современном мире действующих королевских дворцов является Букингемский дворец. Это официальная резиденция Ее Величества королевы в Лондоне.",
      },
      {
        lang: "en",
        name: "Buckingham Palace",
        description:
          "Buckingham Palace is one of the few operating royal palaces in the modern world. This is the official residence of Her Majesty the Queen in London.",
      },
      {
        lang: "fr",
        name: "Palais de Buckingham",
        description:
          "Le palais de Buckingham est l'un des rares palais royaux en activité dans le monde moderne. Il s'agit de la résidence officielle de Sa Majesté la Reine à Londres.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_3",
    localizations: [
      {
        lang: "ru",
        name: "Тауэрский мост",
        description:
          "Тауэрский мост – один из самых узнаваемых символов столицы Великобритании, который представляет собой одновременно разводной и висячий мост, расположен по соседству с Лондонским Тауэром.",
      },
      {
        lang: "en",
        name: "Tower Bridge",
        description:
          "Tower Bridge is one of the most recognizable symbols of the capital of Great Britain, which is both a drawbridge and a suspension bridge, located next to the Tower of London.",
      },
      {
        lang: "fr",
        name: "Tower Bridge",
        description:
          "Le Tower Bridge est l'un des symboles les plus reconnaissables de la capitale de la Grande-Bretagne, qui est à la fois un pont-levis et un pont suspendu, situé à côté de la tour de Londres.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_4",
    localizations: [
      {
        lang: "ru",
        name: "Трафальгарская площадь",
        description:
          "Знаменитая площадь в центральной части Лондона, любимый туристами символ города и место, где проходит британский «нулевой километр». Здесь устраиваются многочисленные праздники и фестивали.",
      },
      {
        lang: "en",
        name: "Trafalgar Square",
        description:
          "The famous square in central London, the beloved symbol of the city and the home of the British Kilometer Zero. Numerous holidays and festivals are held here.",
      },
      {
        lang: "fr",
        name: "Trafalgar Square",
        description:
          "La célèbre place du centre de Londres, le symbole bien-aimé de la ville et la maison du British Kilometer Zero. De nombreuses vacances et festivals y sont organisés.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_5",
    localizations: [
      {
        lang: "ru",
        name: "Вестминстерское Аббатство",
        description:
          "Главная церковь Великобритании, не только важный религиозный центр, но и место коронации и захоронения британских монархов. Аббатство открыто для туристов, здесь часто проходят концерты классической музыки и устраиваются выставки.",
      },
      {
        lang: "en",
        name: "Westminster Abbey",
        description:
          "The main church in Great Britain, not only an important religious center, but also the place of coronation and burial of British monarchs. The abbey is open to tourists and often hosts classical music concerts and exhibitions.",
      },
      {
        lang: "fr",
        name: "l'abbaye de Westminster",
        description:
          "L'église principale de Grande-Bretagne, non seulement un centre religieux important, mais aussi le lieu du couronnement et de l'enterrement des monarques britanniques. L'abbaye est ouverte aux touristes et accueille souvent des concerts de musique classique et des expositions.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539424",
    imageUrl: "/public/assets/images/country/brit_6",
    localizations: [
      {
        lang: "ru",
        name: "«Лондонский глаз»",
        description:
          "«Лондонский глаз» — колесо обозрения, построенное в столице Англии к празднованию миллениумаК моменту постройки «Лондонский глаз» был самым высоким колесом обозрения во всём мире. Его высота составляет 135 метров от основания.",
      },
      {
        lang: "en",
        name: "London Eye",
        description:
          "London Eye - a Ferris wheel built in the capital of England for the celebration of the millennium At the time of its construction, the London Eye was the tallest Ferris wheel in the world. Its height is 135 meters from the base.",
      },
      {
        lang: "fr",
        name: "London Eye",
        description:
          "London Eye - une grande roue construite dans la capitale de l'Angleterre pour la célébration du millénaire Au moment de sa construction, le London Eye était la plus haute grande roue du monde. Sa hauteur est de 135 mètres de la base.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_1",
    localizations: [
      {
        lang: "ru",
        name: "Музейный остров",
        description:
          "Общее название северной части острова Шпреинзель, где сосредоточены крупные берлинские музеи. К этому месту через реку Шпрее подходит мост Монбижу.",
      },
      {
        lang: "en",
        name: "Museum Island",
        description:
          "The general name for the northern part of the Spreinsel Island, where large Berlin museums are concentrated. The Monbijou Bridge approaches this place across the Spree River.",
      },
      {
        lang: "fr",
        name: "Île aux musées",
        description:
          "Le nom général de la partie nord de l'île de Spreinsel, où se concentrent les grands musées berlinois. Le pont Monbijou s'approche de cet endroit à travers la rivière Spree.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_2",
    localizations: [
      {
        lang: "ru",
        name: "Бранденбургские ворота",
        description:
          "Памятник в стиле классицизма и один из символов Берлина — монументальные (высотой 26 метров) и притом единственные сохранившиеся городские ворота, расположены на Парижской площади.",
      },
      {
        lang: "en",
        name: "Brandenburg Gate",
        description:
          "A monument in the style of classicism and one of the symbols of Berlin - the monumental (26 meters high) and, moreover, the only surviving city gate, is located on Paris Square.",
      },
      {
        lang: "fr",
        name: "Porte de Brandebourg",
        description:
          "Un monument dans le style du classicisme et l'un des symboles de Berlin - le monumental (26 mètres de haut) et, de plus, la seule porte de la ville qui subsiste, est situé sur la place de Paris.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_3",
    localizations: [
      {
        lang: "ru",
        name: "Берлинский кафедральный собор",
        description:
          "Крупнейший храм евангелической церкви в Германии построен в смешении пышных стилей неоренессанса и необарокко, возвышается на Музейном острове.",
      },
      {
        lang: "en",
        name: "Berlin Cathedral",
        description:
          "The largest evangelical church in Germany, built in a mixture of lush neo-Renaissance and neo-baroque styles, rises on the Museum Island.",
      },
      {
        lang: "fr",
        name: "Cathédrale de Berlin",
        description:
          "La plus grande église évangélique d'Allemagne, construite dans un mélange de styles néo-Renaissance et néo-baroque luxuriants, se dresse sur l'île aux musées.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_4",
    localizations: [
      {
        lang: "ru",
        name: "Жандарменмаркт",
        description:
          "Жандарменмаркт — площадь в центре Берлина, считается одной из самых красивых площадей столицы Германии. Лучшая, по оценке многих туристов и жителей, рождественская ярмарка проходит именно там.",
      },
      {
        lang: "en",
        name: "Gendarmenmarkt",
        description:
          "Gendarmenmarkt is a square in the center of Berlin, considered one of the most beautiful squares in the German capital. The best, according to many tourists and residents, the Christmas market is held there.",
      },
      {
        lang: "fr",
        name: "Gendarmenmarkt",
        description:
          "Gendarmenmarkt est une place du centre de Berlin, considérée comme l'une des plus belles places de la capitale allemande. Le meilleur, selon de nombreux touristes et résidents, c'est là que se tient le marché de Noël.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_5",
    localizations: [
      {
        lang: "ru",
        name: "Большой Тиргартен",
        description:
          "Самый большой парк Берлина, 210 га, находится в центре — сразу за Бранденбургскими воротами, на историческом месте бывших охотничьих угодий бранденбургских курфюрстов.",
      },
      {
        lang: "en",
        name: "Tiergarten",
        description:
          "Berlin's largest park, 210 hectares, is located in the center - just behind the Brandenburg Gate, on the historic site of the former hunting grounds of the Brandenburg Electors.",
      },
      {
        lang: "fr",
        name: "Tiergarten",
        description:
          "Le plus grand parc de Berlin, 210 hectares, est situé dans le centre - juste derrière la porte de Brandebourg, sur le site historique de l'ancien terrain de chasse des électeurs de Brandebourg.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539425",
    imageUrl: "/public/assets/images/country/ger_6",
    localizations: [
      {
        lang: "ru",
        name: "Дворец Бельвю",
        description:
          "Официальная резиденция федерального президента Германии, памятник архитектуры классицизма, расположенный на берегу реки Шпрее в северной части парка Тиргартен.",
      },
      {
        lang: "en",
        name: "Bellevue Palace",
        description:
          "The official residence of the Federal President of Germany, an architectural monument of classicism, located on the banks of the Spree River in the northern part of the Tiergarten park.",
      },
      {
        lang: "fr",
        name: "Château de Bellevue",
        description:
          "La résidence officielle du président fédéral de l'Allemagne, un monument architectural du classicisme, situé sur les rives de la rivière Spree dans la partie nord du parc Tiergarten.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_1",
    localizations: [
      {
        lang: "ru",
        name: "Площадь испании",
        description:
          "Площадь полукруглой формы находится в Севилье у парка Марии-Луизы. Окружает площадь архитектурный ансамбль из сооружений в неомавританском стиле. Украшает центр площади большой фонтан.",
      },
      {
        lang: "en",
        name: "Spain square",
        description:
          "The semicircular square is located in Seville near the Marie Louise Park. The square is surrounded by an architectural ensemble of buildings in the neo-Moorish style. The center of the square is decorated with a large fountain.",
      },
      {
        lang: "fr",
        name: "Place d'Espagne",
        description:
          "La place semi-circulaire est située à Séville près du parc Marie Louise. La place est entourée d'un ensemble architectural de bâtiments de style néo-mauresque. Le centre de la place est orné d'une grande fontaine.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_2",
    localizations: [
      {
        lang: "ru",
        name: "Королевский дворец",
        description:
          "Несмотря на то, что дворец официально является резиденцией королей Испании, он открыт для посещений туристами. Посмотреть можно 50 комнат из 2000.",
      },
      {
        lang: "en",
        name: "Royal Palace",
        description:
          "Despite the fact that the palace is officially the residence of the kings of Spain, it is open to tourists. You can see 50 rooms out of 2000.",
      },
      {
        lang: "fr",
        name: "Palais Royal",
        description:
          "Bien que le palais soit officiellement la résidence des rois d'Espagne, il est ouvert aux touristes. Vous pouvez voir 50 chambres sur 2000.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_3",
    localizations: [
      {
        lang: "ru",
        name: "Готический квартал",
        description:
          "Некогда самый центр Барселоны и средоточие всех её средневековых достопримечательностей. Несмотря на то, что множество зданий здесь датируется 14-15 веками, в Готическом квартале хватает и уютных ресторанчиков, и дорогих магазинов.",
      },
      {
        lang: "en",
        name: "Gothic Quarter",
        description:
          "Once the very center of Barcelona and the focus of all its medieval attractions. Despite the fact that many buildings here date from the 14-15th centuries, in the Gothic Quarter there are plenty of cozy restaurants and expensive shops.",
      },
      {
        lang: "fr",
        name: "Quartier gothique",
        description:
          "Autrefois le centre même de Barcelone et le centre de toutes ses attractions médiévales. Malgré le fait que de nombreux bâtiments datent des XIVe et XVe siècles, le quartier gothique regorge de restaurants chaleureux et de boutiques chères.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_4",
    localizations: [
      {
        lang: "ru",
        name: "Храм Святого Семейства",
        description:
          "Это самое известное сооружение великого Антонио Гауди. Примечательно тем, что строительство храма, начатое в 1882 году, не окончено до сих пор. Грандиозное здание является символом всей Барселоны и Каталонии.",
      },
      {
        lang: "en",
        name: "Sagrada Familia",
        description:
          "This is the most famous building of the great Antoni Gaudi. It is noteworthy that the construction of the temple, which began in 1882, has not yet been completed. The grandiose building is the symbol of the whole of Barcelona and Catalonia.",
      },
      {
        lang: "fr",
        name: "Sagrada Familia",
        description:
          "C'est le bâtiment le plus célèbre du grand Antoni Gaudi. Il est à noter que la construction du temple, qui a commencé en 1882, n'est pas encore terminée. Le bâtiment grandiose est le symbole de l'ensemble de Barcelone et de la Catalogne.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_5",
    localizations: [
      {
        lang: "ru",
        name: "Парк Гуэль",
        description:
          "Самой известной достопримечательностью парка является огромная извилистая скамейка, сделанная из осколков керамических изделий, битого стекла и другого строительного мусора. Парк также украшают сказочные домики и мозаичная Саламандра.",
      },
      {
        lang: "en",
        name: "Park Guell",
        description:
          "The most famous attraction in the park is a huge winding bench made from shards of pottery, broken glass and other construction debris. The park is also decorated with fabulous houses and a mosaic Salamander.",
      },
      {
        lang: "fr",
        name: "Parc Guell",
        description:
          "L'attraction la plus célèbre du parc est un immense banc sinueux fait d'éclats de poterie, de verre brisé et d'autres débris de construction. Le parc est également décoré de maisons fabuleuses et d'une salamandre en mosaïque.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539426",
    imageUrl: "/public/assets/images/country/spain_6",
    localizations: [
      {
        lang: "ru",
        name: "Город искусств и наук",
        description:
          "Архитектурный комплекс из пяти сооружений разного назначения в городе Валенсия. В современных зданиях расположены кинотеатр, планетарий, театр, оранжерея, научный музей, концертный зал, океанографический парк под открытым небом.",
      },
      {
        lang: "en",
        name: "City of Arts and Sciences",
        description:
          "An architectural complex of five buildings for various purposes in the city of Valencia. The modern buildings house a cinema, a planetarium, a theater, a greenhouse, a science museum, a concert hall, and an open-air oceanographic park.",
      },
      {
        lang: "fr",
        name: "Cité des Arts et des Sciences",
        description:
          "Un complexe architectural de cinq bâtiments à des fins diverses dans la ville de Valence. Les bâtiments modernes abritent un cinéma, un planétarium, un théâtre, une serre, un musée des sciences, une salle de concert et un parc océanographique en plein air.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_1",
    localizations: [
      {
        lang: "ru",
        name: "Колизей",
        description:
          "Колизей - Главная арена Древнего Рима, театр для гладиаторских боев, травли пленников дикими животными и других не менее кровавых представлений ежегодных Игр столицы Империи.",
      },
      {
        lang: "en",
        name: "Colosseum",
        description:
          "The Colosseum is the main arena of Ancient Rome, a theater for gladiatorial fights, persecution of captives by wild animals and other equally bloody performances of the annual Games of the capital of the Empire.",
      },
      {
        lang: "fr",
        name: "Colisée",
        description:
          "Le Colisée est l'arène principale de la Rome antique, un théâtre de combats de gladiateurs, de persécutions de captifs par des animaux sauvages et d'autres performances tout aussi sanglantes des Jeux annuels de la capitale de l'Empire.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_2",
    localizations: [
      {
        lang: "ru",
        name: "Пьяцца-Навона",
        description:
          "Пьяцца-Навона — таково полное название всемирно известной римской площади, на которой расположены знаменитый Фонтан четырёх рек, созданный Бернини, и церковь Святой Агнессы.",
      },
      {
        lang: "en",
        name: "Piazza Navona",
        description:
          "Piazza Navona is the full name of the world famous Roman square, which houses the famous Fountain of the Four Rivers, created by Bernini, and the Church of St. Agnes.",
      },
      {
        lang: "fr",
        name: "Piazza Navona",
        description:
          "Piazza Navona est le nom complet de la célèbre place romaine, qui abrite la célèbre fontaine des Quatre Fleuves, créée par le Bernin, et l'église de Sainte-Agnès.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_3",
    localizations: [
      {
        lang: "ru",
        name: "Собор Святого Петра",
        description:
          "Сердце Ватикана и всего католического мира, собор Святого Петра — одна из главных достопримечательностей Рима. Одна из четырёх патриарших базилик Рима и церемониальный центр Римско-католической церкви.",
      },
      {
        lang: "en",
        name: "St. Peter's Basilica",
        description:
          "The heart of the Vatican and the entire Catholic world, St. Peter's Basilica is one of the main attractions in Rome. One of the four patriarchal basilicas of Rome and the ceremonial center of the Roman Catholic Church.",
      },
      {
        lang: "fr",
        name: "Basilique Saint Pierre",
        description:
          "Au cœur du Vatican et de tout le monde catholique, la basilique Saint-Pierre est l'une des principales attractions de Rome. L'une des quatre basiliques patriarcales de Rome et le centre cérémoniel de l'Église catholique romaine.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_4",
    localizations: [
      {
        lang: "ru",
        name: "Древний исторический храм.",
        description:
          "Древний исторический храм. Это самое большое из античных купольных сооружений, сохранившееся до наших дней. Благодаря инженерным расчетам, купол не давит на посетителей своей массой, а торжественно возвышается, подобно небосводу.",
      },
      {
        lang: "en",
        name: "Ancient historical temple",
        description:
          "Ancient historical temple. This is the largest of the ancient domed structures that has survived to this day. Thanks to engineering calculations, the dome does not press on visitors with its mass, but solemnly rises, like the firmament.",
      },
      {
        lang: "fr",
        name: "Ancien temple historique",
        description:
          "Ancien temple historique. C'est la plus grande des anciennes structures en forme de dôme qui ait survécu à ce jour. Grâce à des calculs d'ingénierie, le dôme ne presse pas les visiteurs avec sa masse, mais s'élève solennellement, comme le firmament.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_5",
    localizations: [
      {
        lang: "ru",
        name: "Ватикан",
        description:
          "Город-государство Ватикан, которое является центром Земли для всех католиков. Ватикан прославился своими музеями, где собраны выдающиеся коллекции живописи, скульптуры и прикладного искусства.",
      },
      {
        lang: "en",
        name: "Vatican",
        description:
          "The Vatican city-state, which is the center of the Earth for all Catholics. The Vatican is renowned for its museums, which house outstanding collections of painting, sculpture and applied arts.",
      },
      {
        lang: "fr",
        name: "Vatican",
        description:
          "La cité-état du Vatican, qui est le centre de la Terre pour tous les catholiques. Le Vatican est réputé pour ses musées, qui abritent des collections exceptionnelles de peinture, de sculpture et d'arts appliqués.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942b",
    imageUrl: "/public/assets/images/country/italy_6",
    localizations: [
      {
        lang: "ru",
        name: "Испанская лестница",
        description:
          "Парадная лестница в центре Рима, спускающаяся с вершины холма Пинчо и расположенной там церкви Тринита-деи-Монти к Испанской площади (итал. Piazza di Spagna ). Одно из самых известных сооружений позднего римского барокко. Построена в 1721—1725 годах.",
      },
      {
        lang: "en",
        name: "Spanish Steps",
        description:
          "The main staircase in the center of Rome, descending from the top of the Pincio hill and the Trinita dei Monti church located there to the Spanish square (Italian: Piazza di Spagna). One of the most famous buildings of the late Roman baroque. Built in 1721-1725.",
      },
      {
        lang: "fr",
        name: "Marches espagnoles",
        description:
          "L'escalier principal dans le centre de Rome, descendant du sommet de la colline du Pincio et de l'église Trinita dei Monti qui s'y trouve jusqu'à la place d'Espagne (en italien: Piazza di Spagna). L'un des bâtiments les plus célèbres du baroque romain tardif. Construit en 1721-1725.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_1",
    localizations: [
      {
        lang: "ru",
        name: "Эйфелева Башня",
        description:
          "Одно из самых посещаемых туристами мест. Бесспорный символ Парижа и всей Франции наряду с сыром, вином и фуа-гра. Башня представляет собой металлическую конструкцию 324 метра в высоту с лифтами, смотровой площадкой, ресторанами и маяком на вершине.",
      },
      {
        lang: "en",
        name: "Eiffel Tower",
        description:
          "One of the most visited places by tourists. The undisputed symbol of Paris and all of France, along with cheese, wine and foie gras. The tower is a metal structure 324 meters high with elevators, an observation deck, restaurants and a lighthouse at the top.",
      },
      {
        lang: "fr",
        name: "Tour Eiffel",
        description:
          "L'un des endroits les plus visités par les touristes. Le symbole incontesté de Paris et de toute la France, avec le fromage, le vin et le foie gras. La tour est une structure métallique de 324 mètres de haut avec des ascenseurs, une terrasse d'observation, des restaurants et un phare au sommet.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_2",
    localizations: [
      {
        lang: "ru",
        name: "Лувр",
        description:
          "Самый посещаемый музей в мире — Лувр. Прежде резиденция французских монархов, сегодня огромное собрание предметов искусства с древних времен и практически до наших дней.",
      },
      {
        lang: "en",
        name: "Louvre",
        description:
          "The most visited museum in the world is the Louvre. Formerly the seat of French monarchs, today a huge collection of art objects from ancient times to almost the present day.",
      },
      {
        lang: "fr",
        name: "Louvre",
        description:
          "Le musée le plus visité au monde est le Louvre. Ancien siège des monarques français, aujourd'hui une immense collection d'objets d'art de l'Antiquité à presque nos jours.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_3",
    localizations: [
      {
        lang: "ru",
        name: "Парижский Диснейленд",
        description:
          "Парижский Диснейленд – один из самых больших и известных парков развлечений в мире. Диснейленд в Париже – это два огромных парка, где развлечения и аттракционы найдутся для всех.",
      },
      {
        lang: "en",
        name: "Disneyland Paris",
        description:
          "Disneyland Paris is one of the largest and most famous amusement parks in the world. Disneyland Paris is two huge parks with entertainment and attractions for everyone.",
      },
      {
        lang: "fr",
        name: "Disneyland Paris",
        description:
          "Disneyland Paris est l'un des parcs d'attractions les plus grands et les plus connus au monde. Disneyland Paris est deux immenses parcs avec des divertissements et des attractions pour tous.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_4",
    localizations: [
      {
        lang: "ru",
        name: "Триумфальная арка",
        description:
          "Триумфальная арка — монумент Парижа на площади Шарля де Голля. Наполеон строил ее в честь своих побед и записывал туда все покоренные города. Под Триумфальной аркой — могила неизвестного солдата.",
      },
      {
        lang: "en",
        name: "Triumphal Arch",
        description:
          "Arc de Triomphe - a monument in Paris on Charles de Gaulle square. Napoleon built it in honor of his victories and wrote down all the conquered cities there. Under the Arc de Triomphe is the tomb of the unknown soldier.",
      },
      {
        lang: "fr",
        name: "Arc de Triomphe",
        description:
          "Arc de Triomphe - un monument à Paris sur la place Charles de Gaulle. Napoléon l'a construit en l'honneur de ses victoires et y a écrit toutes les villes conquises. Sous l'Arc de Triomphe se trouve la tombe du soldat inconnu.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_5",
    localizations: [
      {
        lang: "ru",
        name: "Французское шоу варьете",
        description:
          "Знаменитое французское шоу варьете, арт-кафе и визитная карточка парижской ночной жизни. В шоу задействованы десятки артистов и сотни костюмов, сшитых известными дизайнерами.",
      },
      {
        lang: "en",
        name: "French variety show",
        description:
          "The famous French variety show, art café and the hallmark of Parisian nightlife. The show features dozens of artists and hundreds of costumes made by renowned designers.",
      },
      {
        lang: "fr",
        name: "Spectacle de variétés français",
        description:
          "Le célèbre spectacle de variétés français, café d'art et la marque de la vie nocturne parisienne. Le spectacle présente des dizaines d'artistes et des centaines de costumes réalisés par des designers renommés.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539427",
    imageUrl: "/public/assets/images/country/fran_6",
    localizations: [
      {
        lang: "ru",
        name: "Остров Сите",
        description:
          "Находится в самом центре столицы, посредине реки Сена. Несколько мостов соединяют остров с остальными частями города со всех сторон. Сите – это самое сердце Парижа.",
      },
      {
        lang: "en",
        name: "Cité island",
        description:
          "Located in the very center of the capital, in the middle of the Seine River. Several bridges connect the island to the rest of the city on all sides. Cité is the very heart of Paris.",
      },
      {
        lang: "fr",
        name: "Île de la Cité",
        description:
          "Situé en plein centre de la capitale, au milieu de la Seine. Plusieurs ponts relient l'île au reste de la ville de tous côtés. La Cité est le cœur même de Paris.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_1",
    localizations: [
      {
        lang: "ru",
        name: "Великая китайская стена",
        description:
          "Великая китайская стена — один из древнейших архитектурных памятников Китая и символ могущества китайской цивилизации. Она считается самым большим по протяжённости оборонительным сооружением в мире.",
      },
      {
        lang: "en",
        name: "The great Wall of China",
        description:
          "The Great Wall of China is one of the oldest architectural monuments in China and a symbol of the might of Chinese civilization. It is considered the longest defensive structure in the world.",
      },
      {
        lang: "fr",
        name: "La grande muraille de Chine",
        description:
          "La Grande Muraille de Chine est l'un des plus anciens monuments architecturaux de Chine et un symbole de la puissance de la civilisation chinoise. Elle est considérée comme la plus longue structure défensive du monde.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_2",
    localizations: [
      {
        lang: "ru",
        name: "Запретный город",
        description:
          "Запретный город находится в центре Пекина. Попасть туда не мог никто, слишком любопытных наказывали смертной казнью. Теперь запретный город открыт для туристов.",
      },
      {
        lang: "en",
        name: "Forbidden City",
        description:
          "The Forbidden City is located in the center of Beijing. No one could get there, those who were too curious were punished with the death penalty. The Forbidden City is now open to tourists.",
      },
      {
        lang: "fr",
        name: "Ville oubliée",
        description:
          "La Cité Interdite est située dans le centre de Pékin. Personne ne pouvait y arriver, ceux qui étaient trop curieux étaient punis de la peine de mort. La Cité Interdite est désormais ouverte aux touristes.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_3",
    localizations: [
      {
        lang: "ru",
        name: "Вайтань",
        description:
          "Изображение набережной Вайтань одно из самых узнаваемых в Шанхае. Это часть улицы Сунь Ятсена. На протяжении набережной располагаются 52 архитектурных зданий, построенных в разных стилях.",
      },
      {
        lang: "en",
        name: "Waitan",
        description:
          "The image of the Bund is one of the most recognizable in Shanghai. This is part of Sun Yat-sen Street. Along the embankment, there are 52 architectural buildings built in different styles.",
      },
      {
        lang: "fr",
        name: "Waitan",
        description:
          "L'image du Bund est l'une des plus reconnaissables de Shanghai. Cela fait partie de la rue Sun Yat-sen. Le long du remblai, il y a 52 bâtiments architecturaux construits dans des styles différents.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_4",
    localizations: [
      {
        lang: "ru",
        name: "Дворец Потала",
        description:
          "Дворец Потала — бесспорный символ Тибета. В этом  здании каждый элемент говорит об истории и культуре Тибета. Дворец знаменит своими скульптурами, настенной росписью и священными письменами.",
      },
      {
        lang: "en",
        name: "Potala Palace",
        description:
          "The Potala Palace is the undisputed symbol of Tibet. In this building, every element speaks of the history and culture of Tibet. The palace is famous for its sculptures, murals and sacred writings.",
      },
      {
        lang: "fr",
        name: "Palais du Potala",
        description:
          "Le Palais du Potala est le symbole incontesté du Tibet. Dans ce bâtiment, chaque élément parle de l'histoire et de la culture du Tibet. Le palais est célèbre pour ses sculptures, ses peintures murales et ses écrits sacrés.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_5",
    localizations: [
      {
        lang: "ru",
        name: "Парк Шилинь",
        description:
          "Парк называют каменным лесом из-за скал, высота которых достигает 40 метров. Шилинь разделили на 7 зон, на территории которых есть каменный сад, гроты, луга, пещеры, озера и водопады.",
      },
      {
        lang: "en",
        name: "Shilin Park",
        description:
          "The park is called a stone forest because of the rocks, the height of which reaches 40 meters. Shilin was divided into 7 zones, on the territory of which there is a stone garden, grottoes, meadows, caves, lakes and waterfalls.",
      },
      {
        lang: "fr",
        name: "Parc Shilin",
        description:
          "Le parc est appelé une forêt de pierre à cause des rochers, dont la hauteur atteint 40 mètres. Shilin a été divisé en 7 zones, sur le territoire desquelles se trouvent un jardin de pierre, des grottes, des prairies, des grottes, des lacs et des cascades.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539428",
    imageUrl: "/public/assets/images/country/chan_6",
    localizations: [
      {
        lang: "ru",
        name: "Река Ли",
        description:
          "Это одна из самых чистых рек Китая. Она тянется через холмы и скалы, окутанные дымкой. На ее берегах самые крупные и красивые отложения карстовых пород.",
      },
      {
        lang: "en",
        name: "Li River",
        description:
          "This is one of the cleanest rivers in China. It stretches over hills and cliffs shrouded in haze. On its shores the largest and most beautiful deposits of karst rocks.",
      },
      {
        lang: "fr",
        name: "Rivière Li",
        description:
          "C'est l'une des rivières les plus propres de Chine. Il s'étend sur des collines et des falaises enveloppées de brume. Sur ses rives les plus grands et les plus beaux gisements de roches karstiques.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_1",
    localizations: [
      {
        lang: "ru",
        name: "Тадж-Махал",
        description:
          "Самый известный и величественный мавзолей страны. Белоснежная огромная усыпальница шаха Джахана и его супруги. Постройка выполнена из редкого мрамора, инкрустированного полудрагоценными камнями.",
      },
      {
        lang: "en",
        name: "Taj Mahal",
        description:
          "The most famous and majestic mausoleum in the country. Snow-white huge tomb of Shah Jahan and his wife. The building is made of rare marble inlaid with semi-precious stones.",
      },
      {
        lang: "fr",
        name: "Taj Mahal",
        description:
          "Le mausolée le plus célèbre et le plus majestueux du pays. Immense tombe blanche comme neige de Shah Jahan et de sa femme. Le bâtiment est fait de marbre rare incrusté de pierres semi-précieuses.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_2",
    localizations: [
      {
        lang: "ru",
        name: "Город Варанаси",
        description:
          "Старейший город в Индии. Служит местом паломничества множества местных жителей и приезжих. Центр мира для индуистов, наиболее важное и почитаемое ими место. Обладает уникальной историей, архитектурой, бытом.",
      },
      {
        lang: "en",
        name: "Varanasi city",
        description:
          "The oldest city in India. Serves as a place of pilgrimage for many locals and visitors. The center of the world for Hindus, the most important and revered place. It has a unique history, architecture and way of life.",
      },
      {
        lang: "fr",
        name: "Ville de Varanasi",
        description:
          "La plus ancienne ville de l'Inde. Sert de lieu de pèlerinage pour de nombreux habitants et visiteurs. Le centre du monde pour les hindous, l'endroit le plus important et le plus vénéré. Il a une histoire, une architecture et un mode de vie uniques.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_3",
    localizations: [
      {
        lang: "ru",
        name: "Вокзал Чхатрапати Шиваджи",
        description:
          "Самое необычное здание в Мумбаи, его символ. Архитектура вокзала причудлива и очень декоративна, напоминает дворец магараджи. Построено британскими архитекторами, во времена колонизации.",
      },
      {
        lang: "en",
        name: "Chhatrapati Shivaji Station",
        description:
          "The most unusual building in Mumbai, its symbol. The architecture of the station is whimsical and very decorative, reminiscent of a maharajah palace. Built by British architects during colonization.",
      },
      {
        lang: "fr",
        name: "Gare de Chhatrapati Shivaji",
        description:
          "Le bâtiment le plus insolite de Mumbai, son symbole. L'architecture de la gare est fantaisiste et très décorative, rappelant un palais de maharajah. Construit par des architectes britanniques pendant la colonisation.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_4",
    localizations: [
      {
        lang: "ru",
        name: "Хампи",
        description:
          "Место древнего города, столицы Виджаянагарской империи. Сейчас там находятся остатки старинных строений и действующие индуистские храмы. В районе Хампи разместились 18 древних архитектурных и исторических памятников.",
      },
      {
        lang: "en",
        name: "Humpy",
        description:
          "The site of an ancient city, the capital of the Vijayanagar Empire. Now there are the remains of ancient buildings and operating Hindu temples. In the Hampi area there are 18 ancient architectural and historical monuments.",
      },
      {
        lang: "fr",
        name: "Bossue",
        description:
          "Le site d'une ancienne ville, la capitale de l'empire Vijayanagar. Maintenant, il y a les restes de bâtiments anciens et de temples hindous en activité. Dans la région de Hampi, il y a 18 monuments architecturaux et historiques anciens.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_5",
    localizations: [
      {
        lang: "ru",
        name: "Дворец Хава-Махал",
        description:
          "Находится в городе Джайпуре. Уникальное по архитектуре строение, все пронизанное окнами. Так как дворец возводился для гарема, то все окошки были закрыты мраморными решетками.",
      },
      {
        lang: "en",
        name: "Hawa Mahal Palace",
        description:
          "Located in Jaipur city. The building is unique in architecture, all permeated with windows. Since the palace was built for a harem, all the windows were covered with marble bars.",
      },
      {
        lang: "fr",
        name: "Palais Hawa Mahal",
        description:
          "Situé dans la ville de Jaipur. Le bâtiment est unique dans son architecture, le tout imprégné de fenêtres. Puisque le palais a été construit pour un harem, toutes les fenêtres étaient couvertes de barres de marbre.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc2896539429",
    imageUrl: "/public/assets/images/country/ind_6",
    localizations: [
      {
        lang: "ru",
        name: "Дворец озера Пикола",
        description:
          "Прямо в центре водоема был построен дворец местного правителя. На водной глади расположился белокаменный восточный замок, богато украшенный резьбой. В настоящее время он сдается туристам с множеством роскошных номеров.",
      },
      {
        lang: "en",
        name: "Lake Picola Palace",
        description:
          "The palace of the local ruler was built right in the center of the reservoir. On the water surface there is a white-stone oriental castle, richly decorated with carvings. It is currently rented to tourists with many luxurious rooms.",
      },
      {
        lang: "fr",
        name: "Palais du lac Picola",
        description:
          "Le palais du souverain local a été construit en plein centre du réservoir. Sur la surface de l'eau, il y a un château oriental en pierre blanche, richement décoré de sculptures. Il est actuellement loué aux touristes avec de nombreuses chambres luxueuses.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_1",
    localizations: [
      {
        lang: "ru",
        name: "Мост Золотые ворота",
        description:
          "В свое время этот висячий мост в Сан-Франциско был самым длинным в мире. Золотые ворота выглядят очень респектабельно и стройно, являясь признанной визитной карточкой города.",
      },
      {
        lang: "en",
        name: "Golden Gate Bridge",
        description:
          "At one time, this suspension bridge in San Francisco was the longest in the world. The Golden Gate looks very respectable and slender, being a recognized hallmark of the city.",
      },
      {
        lang: "fr",
        name: "Le pont du Golden Gate",
        description:
          "À une certaine époque, ce pont suspendu de San Francisco était le plus long du monde. Le Golden Gate a l'air très respectable et élancé, étant une caractéristique reconnue de la ville.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_2",
    localizations: [
      {
        lang: "ru",
        name: "Статуя Свободы",
        description:
          "Величественная скульптура женщины с факелом в руке стала олицетворением свободы Америки. Корона имеет семь лучей, что обозначает семь континентов и океанов. В руке она держит плиту с выбитой на ней датой принятия Декларации о независимости.",
      },
      {
        lang: "en",
        name: "The Statue of Liberty",
        description:
          "The majestic sculpture of a woman with a torch in her hand has become the personification of America's freedom. The crown has seven rays, representing seven continents and oceans. In her hand, she holds a plate with the date of the adoption of the Declaration of Independence, engraved on it.",
      },
      {
        lang: "fr",
        name: "",
        description: "La statue de la Liberté",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_3",
    localizations: [
      {
        lang: "ru",
        name: "Манхэттен",
        description:
          "Исторический центр Нью-Йорка, сердце и наиболее известный, дорогой, престижный, шумный район города. Манхэттен неоднократно становился «героем» голливудских фильмов, местом действия триллеров и романтических комедий.",
      },
      {
        lang: "en",
        name: "Manhattan",
        description:
          "The historic center of New York, the heart and the most famous, expensive, prestigious, bustling area of ​​the city. Manhattan has repeatedly become the 'hero' of Hollywood films, the scene of thrillers and romantic comedies.",
      },
      {
        lang: "fr",
        name: "Manhattan",
        description:
          "Le centre historique de New York, le cœur et le quartier le plus célèbre, le plus cher, le plus prestigieux et le plus animé de la ville. Manhattan est devenu à plusieurs reprises le «héros» des films hollywoodiens, le théâtre de thrillers et de comédies romantiques.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_4",
    localizations: [
      {
        lang: "ru",
        name: "Ниагарский водопад",
        description:
          "О красоте и мощи этого самого знаменитого водопада мира можно говорить долго, но само по себе зрелище не заменишь ничем. Это объединение нескольких водопадов на реке Ниагаре, которая протекает между штатом Нью-Йорк и Канадой.",
      },
      {
        lang: "en",
        name: "Niagara Falls",
        description:
          "One can talk for a long time about the beauty and power of this most famous waterfall in the world, but the spectacle itself cannot be replaced by anything. It is the amalgamation of several waterfalls on the Niagara River, which flows between New York State and Canada.",
      },
      {
        lang: "fr",
        name: "Chutes du Niagara",
        description:
          "On peut parler longtemps de la beauté et de la puissance de cette cascade la plus célèbre au monde, mais le spectacle lui-même ne peut être remplacé par rien. C'est la fusion de plusieurs chutes d'eau sur la rivière Niagara, qui coule entre l'État de New York et le Canada.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_5",
    localizations: [
      {
        lang: "ru",
        name: "Гранд-Каньон",
        description:
          "Гранд-Каньон (Большой каньон) считается самым глубоким каньоном в мире. Он располагается на территории одноименного национального парка в штате Аризона. В давние времена здесь проживали индейцы различных племен.",
      },
      {
        lang: "en",
        name: "Grand Canyon",
        description:
          "The Grand Canyon is considered the deepest canyon in the world. It is located in the national park of the same name in the state of Arizona. In ancient times, Indians of various tribes lived here.",
      },
      {
        lang: "fr",
        name: "Grand Canyon",
        description:
          "Le Grand Canyon est considéré comme le canyon le plus profond du monde. Il est situé dans le parc national du même nom dans l'état de l'Arizona. Dans les temps anciens, des Indiens de diverses tribus vivaient ici.",
      },
    ],
  },
  {
    countryId: "6048e0065c5cdc289653942a",
    imageUrl: "/public/assets/images/country/usa_6",
    localizations: [
      {
        lang: "ru",
        name: "Тюрьма Алькатрас",
        description:
          "Одна из самых мрачных тюрем мира, расположенная на острове в заливе Сан-Франциско. Cчитается, что сбежать из нее было невероятно сложно. Сегодня это место, показанное в фильмах, передачах и описанное в литературе, притягивает туристов мрачной историей.",
      },
      {
        lang: "en",
        name: "Alcatraz prison",
        description:
          "One of the darkest prisons in the world, located on an island in the San Francisco Bay. It is believed that it was incredibly difficult to escape from it. Today, this place, shown in films, programs and described in the literature, attracts tourists with a dark history.",
      },
      {
        lang: "fr",
        name: "Prison d'Alcatraz",
        description:
          "L'une des prisons les plus sombres du monde, située sur une île de la baie de San Francisco. On pense qu'il était incroyablement difficile d'y échapper. Aujourd'hui, ce lieu, montré dans des films, des programmes et décrit dans la littérature, attire des touristes à l'histoire sombre.",
      },
    ],
  },
];

module.exports = { places };
