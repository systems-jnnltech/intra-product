export interface BotanicalExtract {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  image: string;
  description: string;
  benefits: string[];
  traditionalUses: string[];
  partsUsed: string[];
}

export const botanicalsData: BotanicalExtract[] = [
  {
    id: "goji",
    name: "Goji",
    scientificName: "Lycium barbarum",
    family: "Solanaceae",
    image: "/23BotanicalExtracts/goji.jpg",
    description: "Goji is a deciduous shrub traditionally cultivated across temperate Asian valleys, celebrated for its nutrient-dense red berries often referred to as wolfberries.",
    benefits: [
      "Supplies carotenoid antioxidants, particularly zeaxanthin",
      "Provides natural polysaccharides associated with vitality",
      "Rich in essential vitamins, trace minerals, and bioflavonoids",
      "Traditionally consumed to support overall physiological vigor"
    ],
    traditionalUses: [
      "Traditional Asian herbal tonics and restorative decoctions",
      "Nutritious culinary teas, dried fruit blends, and wellness broths",
      "Nourishing herbal preparations for eye and kidney vitality"
    ],
    partsUsed: ["Fruit (Berries)"]
  },
  {
    id: "mangosteen",
    name: "Mangosteen",
    scientificName: "Garcinia mangostana",
    family: "Clusiaceae",
    image: "/23BotanicalExtracts/Mangosteen.jpg",
    description: "Known throughout tropical Southeast Asia as the 'Queen of Fruits', the mangosteen is prized both for its sweet, delicate arils and the concentrated phytonutrients housed within its thick purple pericarp.",
    benefits: [
      "Naturally abundant in xanthones, a unique class of polyphenolic antioxidants",
      "Helps protect cellular structures from oxidative free radical damage",
      "Contains bioactive compounds associated with natural anti-inflammatory support",
      "Supports normal immune function and overall vitality"
    ],
    traditionalUses: [
      "Traditional Southeast Asian tea preparations utilizing the dried rind",
      "Folk remedies for digestive comfort and intestinal harmony",
      "Natural topical and beverage applications for seasonal wellness"
    ],
    partsUsed: ["Pericarp (Fruit Rind)", "Fruit Pulp"]
  },
  {
    id: "noni",
    name: "Noni",
    scientificName: "Morinda citrifolia",
    family: "Rubiaceae",
    image: "/23BotanicalExtracts/Noni.jpg",
    description: "Noni is an evergreen shrub or small tree indigenous to the Pacific Islands, Australia, and Southeast Asia. Its resilient fruit has been a revered pillar of traditional Polynesian wellness systems for over two millennia.",
    benefits: [
      "Contains naturally occurring scopoletin, damnacanthal, and bioflavonoids",
      "Supplies plant-based precursors associated with cellular maintenance",
      "Provides natural antioxidant defense against daily oxidative stress",
      "Supports digestive motility and natural metabolic equilibrium"
    ],
    traditionalUses: [
      "Traditional Polynesian folk practices for physical endurance and vigor",
      "Fermented and freshly pressed herbal fruit tonics",
      "Traditional preparations to support joint and muscle comfort"
    ],
    partsUsed: ["Fruit", "Leaves"]
  },
  {
    id: "acai",
    name: "Acai",
    scientificName: "Euterpe oleracea",
    family: "Arecaceae",
    image: "/23BotanicalExtracts/Acai.jpg",
    description: "Harvested from the tops of slender palm trees growing in the fertile floodplains of the Amazon basin, the deep purple acai berry is celebrated globally as an antioxidant-dense botanical food.",
    benefits: [
      "Exceptional concentrations of dark anthocyanin polyphenols",
      "Provides monounsaturated fatty acids (oleic acid) and dietary fibre",
      "Assists in neutralizing reactive oxygen species in cellular pathways",
      "Promotes sustained physical energy and cardiovascular wellness"
    ],
    traditionalUses: [
      "Core staple energizing food for indigenous Amazonian communities",
      "Traditional revitalizing infusions and sustaining botanical blends",
      "Natural energy nourishment during prolonged physical labor"
    ],
    partsUsed: ["Fruit (Berry Pulp)"]
  },
  {
    id: "echinacea",
    name: "Echinacea",
    scientificName: "Echinacea purpurea",
    family: "Asteraceae",
    image: "/23BotanicalExtracts/Echinacea.jpg",
    description: "Also known as the purple coneflower, Echinacea is an herbaceous perennial native to North American grasslands, recognized by its prominent spiny central cone and vibrant petals.",
    benefits: [
      "Rich in bioactive alkylamides, caffeic acid derivatives, and polysaccharides",
      "Supports the body's natural frontline immune response",
      "Promotes respiratory tract comfort and seasonal resilience",
      "Contains compounds that assist the body's natural defense pathways"
    ],
    traditionalUses: [
      "Widely utilized by Native American tribes for seasonal wellness",
      "Early American Eclectic herbalism for throat and immune preparations",
      "Traditional hot teas and tinctures taken during seasonal transitions"
    ],
    partsUsed: ["Root", "Herb (Aerial Parts)"]
  },
  {
    id: "aloe-vera",
    name: "Aloe vera",
    scientificName: "Aloe barbadensis miller",
    family: "Asphodelaceae",
    image: "/23BotanicalExtracts/Aloe vera.jpg",
    description: "A perennial succulent originating in arid subtropical climates, Aloe vera produces fleshy, lanceolate leaves containing a transparent gel packed with polysaccharides and natural micronutrients.",
    benefits: [
      "Rich in acemannan and other mucilaginous polysaccharides",
      "Gently soothes and coats digestive tract mucous membranes",
      "Supports healthy intestinal motility and nutrient absorption",
      "Provides natural enzymes, amino acids, and antioxidant vitamins"
    ],
    traditionalUses: [
      "Documented in Egyptian, Greek, and Ayurvedic texts dating back 4,000 years",
      "Traditional internal decoctions for gastrointestinal soothing and regularity",
      "Restorative wellness tonics designed for cellular hydration"
    ],
    partsUsed: ["Inner Leaf Gel", "Leaf Extract"]
  },
  {
    id: "siberian-ginseng",
    name: "Siberian ginseng",
    scientificName: "Eleutherococcus senticosus",
    family: "Araliaceae",
    image: "/23BotanicalExtracts/Siberian ginseng.jpg",
    description: "Also widely termed Eleuthero, Siberian ginseng is a hardy thorny shrub native to the taiga forests of northeastern Asia, classified in herbalism as a classic foundational botanical adaptogen.",
    benefits: [
      "Supplies unique eleutherosides (B and E) that support stress adaptation",
      "Assists the body in managing temporary mental and physical fatigue",
      "Promotes sustained natural stamina without caffeine-like jitteriness",
      "Supports adrenal resilience and overall vitality"
    ],
    traditionalUses: [
      "Traditional Russian and northern Asian folk practices for winter endurance",
      "Adaptogenic herbal teas used to fortify resilience against environmental stress",
      "Long-term wellness regimens to sustain work capacity and vigor"
    ],
    partsUsed: ["Root", "Rhizome"]
  },
  {
    id: "licorice-root",
    name: "Licorice root",
    scientificName: "Glycyrrhiza glabra",
    family: "Fabaceae",
    image: "/23BotanicalExtracts/Licorice root.jpg",
    description: "A perennial legume native to southern Europe and parts of Asia, Licorice is famous for its sweet-tasting root, containing glycyrrhizin—a natural compound roughly 50 times sweeter than sucrose.",
    benefits: [
      "Provides natural demulcent properties that soothe the digestive lining",
      "Supports upper respiratory comfort and throat soothing",
      "Acts as a synergistic harmonizer among complementary botanical extracts",
      "Contains flavonoids that provide antioxidant protection"
    ],
    traditionalUses: [
      "Foundational harmonizing ingredient in traditional Asian herbal formulas",
      "Traditional European syrups and decoctions for digestive harmony",
      "Herbal lozenges and warm infusions for throat comfort"
    ],
    partsUsed: ["Root", "Stolons"]
  },
  {
    id: "chinese-pearl-barley",
    name: "Chinese pearl barley",
    scientificName: "Coix lacryma-jobi",
    family: "Poaceae",
    image: "/23BotanicalExtracts/Chinese pearl barley.jpg",
    description: "Commonly known as Job's tears or Coix seed, Chinese pearl barley is a tall, grain-bearing tropical plant cultivated throughout East Asia, valued both as a restorative food and an herbal staple.",
    benefits: [
      "Contains coixenolide, essential amino acids, and dietary fibre",
      "Assists in maintaining balanced bodily fluid distribution",
      "Supports healthy digestive motility and metabolic transit",
      "Provides nourishing polysaccharides that bolster natural wellness"
    ],
    traditionalUses: [
      "Traditional Chinese dietary therapy (pinyin: Yi Yi Ren) for water balance",
      "Simmered into medicinal grain broths and seasonal wellness porridges",
      "Herbal teas designed to promote skin clarity and lightness"
    ],
    partsUsed: ["Seed (Coix Seed)"]
  },
  {
    id: "dandelion",
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    family: "Asteraceae",
    image: "/23BotanicalExtracts/Dandelion.jpg",
    description: "Recognized by its bright yellow blossom, the dandelion is an exceptionally hardy perennial botanical whose taproot and green leaves have been harvested across temperate continents for centuries.",
    benefits: [
      "Supplies bitter sesquiterpene lactones that stimulate healthy digestion",
      "Rich in prebiotic inulin fibre, supporting beneficial gut flora",
      "Supports the liver and gallbladder's natural filtration processes",
      "Provides natural potassium, vitamins, and minerals"
    ],
    traditionalUses: [
      "Traditional European and Arabian spring tonics and herbal bitters",
      "Roasted root decoctions utilized for liver and digestive comfort",
      "Traditional Native American teas for seasonal cleansing"
    ],
    partsUsed: ["Root", "Leaves"]
  },
  {
    id: "german-chamomile",
    name: "German chamomile",
    scientificName: "Matricaria chamomilla",
    family: "Asteraceae",
    image: "/23BotanicalExtracts/German chamomile.jpg",
    description: "An aromatic annual plant featuring small, daisy-like blossoms with a hollow conical receptacle, German chamomile is celebrated globally for its gentle floral aroma and relaxing nature.",
    benefits: [
      "Abundant in calming apigenin flavonoids and volatile chamazulene",
      "Gently eases temporary tension and supports relaxed nervous tone",
      "Soothes mild gastrointestinal spasms and occasional digestive fullness",
      "Supplies natural antioxidant compounds that support tissue comfort"
    ],
    traditionalUses: [
      "One of the oldest documented European folk herbs for evening relaxation",
      "Warm floral teas for gentle stomach settling across all age groups",
      "Aromatic botanical infusions to soothe nervous tension"
    ],
    partsUsed: ["Flower heads"]
  },
  {
    id: "ginger",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
    image: "/23BotanicalExtracts/Ginger.jpg",
    description: "A tropical flowering perennial cultivated in warm climates, ginger is esteemed worldwide for its pungent, aromatic underground rhizome, an irreplaceable staple of both herbalism and gastronomy.",
    benefits: [
      "Concentrated in warming gingerols, shogaols, and zingiberene",
      "Promotes smooth gastric motility and eases occasional motion discomfort",
      "Stimulates circulatory warmth and peripheral blood flow",
      "Provides natural antioxidant and tissue-soothing support"
    ],
    traditionalUses: [
      "Cornerstone of Ayurvedic, Chinese, and Greco-Roman traditional herbalism",
      "Traditional warming decoctions for seasonal chills and respiratory ease",
      "Post-meal infusions to kindle digestive fire and soothe the stomach"
    ],
    partsUsed: ["Rhizome"]
  },
  {
    id: "reishi-mushroom",
    name: "Reishi mushroom",
    scientificName: "Ganoderma lucidum",
    family: "Ganodermataceae",
    image: "/23BotanicalExtracts/Reishi mushroom.jpg",
    description: "Revered in East Asian herbal lore as Lingzhi or the 'Mushroom of Immortality', Reishi is a woody polypore mushroom that grows on decaying deciduous trees, featuring a varnished reddish-brown cap.",
    benefits: [
      "Packed with immune-modulating beta-glucan polysaccharides",
      "Rich in ganoderic acid triterpenes associated with cellular resilience",
      "Functions as a calming adaptogen to support emotional tranquility and deep sleep",
      "Supports liver function and cardiovascular equilibrium"
    ],
    traditionalUses: [
      "Ranked as a superior herb in the ancient Chinese Divine Farmer's Materia Medica",
      "Long-simmered herbal decoctions taken to cultivate vital qi and longevity",
      "Traditional Taoist wellness formulas to foster calm meditation and spirit (Shen)"
    ],
    partsUsed: ["Fruiting Body", "Mycelium"]
  },
  {
    id: "schisandra-berry",
    name: "Schisandra berry",
    scientificName: "Schisandra chinensis",
    family: "Schisandraceae",
    image: "/23BotanicalExtracts/Schisandra berry.jpg",
    description: "Known in traditional Chinese medicine as Wu Wei Zi ('Five Flavor Berry'), Schisandra is a deciduous woody vine whose scarlet berries uniquely embody sweet, sour, salty, bitter, and pungent taste profiles.",
    benefits: [
      "Supplies specialized dibenzocyclooctadiene lignans (schisandrins)",
      "Supports the liver's phase I and phase II natural detoxification pathways",
      "Assists in sustaining cognitive focus and mental stamina under pressure",
      "Promotes respiratory and cellular balance as an adaptogen"
    ],
    traditionalUses: [
      "Traditional Chinese tonics formulated to harmonize all five elemental meridians",
      "Restorative teas consumed by hunters and travelers for prolonged stamina",
      "Herbal blends designed to lock in youthful vitality and moisture"
    ],
    partsUsed: ["Fruit (Berries)"]
  },
  {
    id: "juniper-berries",
    name: "Juniper berries",
    scientificName: "Juniperus communis",
    family: "Cupressaceae",
    image: "/23BotanicalExtracts/Juniper berries.jpg",
    description: "An evergreen coniferous shrub native to cool temperate regions across the Northern Hemisphere, Juniper produces dark bluish-black aromatic female seed cones commonly called berries.",
    benefits: [
      "Contains aromatic essential oils rich in alpha-pinene and terpinen-4-ol",
      "Supports normal kidney function and healthy urinary fluid balance",
      "Provides natural flavonoid antioxidants and bitter compounds",
      "Assists in smooth digestive transit and easing temporary bloating"
    ],
    traditionalUses: [
      "Ancient Greek, Roman, and Native American urinary health preparations",
      "Aromatic steam infusions for seasonal upper respiratory clarity",
      "Traditional digestive cordials and cleansing herbal teas"
    ],
    partsUsed: ["Berries (Seed Cones)"]
  },
  {
    id: "sarsaparilla",
    name: "Sarsaparilla",
    scientificName: "Smilax ornata",
    family: "Smilacaceae",
    image: "/23BotanicalExtracts/Sarsaparilla.jpeg",
    description: "A perennial climbing vine armed with sharp prickles, native to Central and South America, Sarsaparilla develops lengthy underground fibrous roots prized in traditional folk medicine.",
    benefits: [
      "Abundant in steroidal saponins, including sarsasapogenin and smilagenin",
      "Supports the body's natural waste elimination and systemic purification",
      "Promotes joint ease and healthy skin clarity from within",
      "Aids in enhancing the bioavailability of complementary botanical compounds"
    ],
    traditionalUses: [
      "Traditional indigenous Mesoamerican preparations for vitality and joint comfort",
      "Famous spring-tonic herbal decoctions and vintage root beverages",
      "Traditional European pharmacopeia remedies for skin and blood balance"
    ],
    partsUsed: ["Root", "Rhizome"]
  },
  {
    id: "capsicum-fruit",
    name: "Capsicum fruit",
    scientificName: "Capsicum annuum",
    family: "Solanaceae",
    image: "/23BotanicalExtracts/Capsicum fruit.jpg",
    description: "A species in the nightshade family native to the tropical Americas, Capsicum produces fiery chili peppers rich in capsaicinoid compounds that impart stimulating botanical heat.",
    benefits: [
      "Contains bioactive capsaicin, a natural circulatory and metabolic activator",
      "Encourages peripheral microcirculation and arterial elasticity",
      "Stimulates gastric secretions to assist complete digestion",
      "Rich in Vitamin C, carotenoids, and protective antioxidant pigments"
    ],
    traditionalUses: [
      "Traditional heating herb used by Mesoamerican cultures for thousands of years",
      "Herbal formulas designed to catalyze and circulate accompanying herbs throughout the body",
      "Warming winter infusions to support circulation in cold climates"
    ],
    partsUsed: ["Fruit (Cayenne)"]
  },
  {
    id: "hawthorn",
    name: "Hawthorn",
    scientificName: "Crataegus monogyna",
    family: "Rosaceae",
    image: "/23BotanicalExtracts/Hawthorn.jpg",
    description: "A thorny deciduous tree belonging to the rose family, Hawthorn dots European hedgerows with white spring blossoms followed in autumn by clusters of crimson berries (haws).",
    benefits: [
      "Renowned source of oligomeric proanthocyanidins (OPCs), vitexin, and hyperoside",
      "Provides targeted nutritional and antioxidant support for the cardiovascular system",
      "Helps maintain healthy arterial tone and smooth blood flow",
      "Promotes cellular energy production within cardiac muscle tissues"
    ],
    traditionalUses: [
      "Revered in European herbalism for over five centuries as the premier heart tonic",
      "Simmered berry syrups and brandies taken for general circulatory vitality",
      "Traditional calming evening herbal blends to soothe a fluttering heart"
    ],
    partsUsed: ["Berries", "Leaves", "Flowers"]
  },
  {
    id: "astragalus",
    name: "Astragalus",
    scientificName: "Astragalus membranaceus",
    family: "Fabaceae",
    image: "/23BotanicalExtracts/Astragalus.jpg",
    description: "A perennial flowering legume native to northern China, Astragalus produces sweet, fibrous yellow roots known as Huang Qi, meaning 'Yellow Leader' in recognition of its venerated status in herbalism.",
    benefits: [
      "Abundant in unique astragalosides, polysaccharides, and isoflavones",
      "Strengthens deep defensive reserves and supports cellular longevity",
      "Promotes robust immune surveillance during seasonal fluctuations",
      "Supports kidney vitality, fluid balance, and cardiovascular endurance"
    ],
    traditionalUses: [
      "Ancient Chinese medical cornerstone to tone Wei Qi (defensive protective energy)",
      "Simmered into restorative chicken broths and medicinal longevity soups",
      "Classical tonic formulas for recovering from physical exhaustion"
    ],
    partsUsed: ["Root"]
  },
  {
    id: "fenugreek-seed",
    name: "Fenugreek seed",
    scientificName: "Trigonella foenum-graecum",
    family: "Fabaceae",
    image: "/23BotanicalExtracts/Fenugreek seed.jpg",
    description: "An annual aromatic herb indigenous to the Mediterranean and western Asia, Fenugreek bears pods filled with small, angular golden-brown seeds emitting a pleasant maple aroma.",
    benefits: [
      "Rich in soluble galactomannan fibre, slowing glucose transit in the gut",
      "Contains 4-hydroxyisoleucine, supporting healthy post-meal carbohydrate balance",
      "Provides natural saponins that promote healthy lipid and cholesterol profiles",
      "Gently coats and soothes gastric mucosal linings"
    ],
    traditionalUses: [
      "Prominently utilized in Ayurvedic medicine (Methi) for metabolic and digestive balance",
      "Ancient Egyptian and Greek preparations for gastrointestinal comfort",
      "Traditional dietary seasoning to promote lactation and vitality"
    ],
    partsUsed: ["Seeds"]
  },
  {
    id: "prickly-pear",
    name: "Prickly pear",
    scientificName: "Opuntia ficus-indica",
    family: "Cactaceae",
    image: "/23BotanicalExtracts/Prickly pear.jpg",
    description: "A resilient cactus native to the arid landscapes of Mexico and the Americas, the Prickly Pear develops fleshy paddle-like cladodes (nopales) crowned with sweet, spinulose magenta fruits (tunas).",
    benefits: [
      "Supplies rare betalain antioxidants (indicaxanthin and betanin)",
      "High in pectin and soluble fibres that moderate nutrient absorption",
      "Supports normal cellular hydration, electrolytes, and liver metabolism",
      "Provides natural defense against environmental oxidative stress"
    ],
    traditionalUses: [
      "Staple nutritional and medicinal plant in traditional Mexican ethnobotany",
      "Traditional preparations consumed to sustain energy across hot desert journeys",
      "Herbal juices prepared to soothe digestive warmth and support recovery"
    ],
    partsUsed: ["Cladode (Pad)", "Fruit"]
  },
  {
    id: "celery-seed",
    name: "Celery seed",
    scientificName: "Apium graveolens",
    family: "Apiaceae",
    image: "/23BotanicalExtracts/Celery seed.jpeg",
    description: "The dried fruit of wild celery (smallage), Celery seed yields tiny, aromatic brown kernels with a potent earthy flavor, long respected as an herbal cleansing agent.",
    benefits: [
      "Contains bioactive phthalides, particularly 3-n-butylphthalide (3nB) and sedanenolide",
      "Assists in maintaining balanced vascular smooth muscle relaxation",
      "Promotes joint comfort by supporting healthy uric acid elimination",
      "Provides gentle natural diuretic support for fluid homeostasis"
    ],
    traditionalUses: [
      "Documented in ancient Ayurvedic texts for joint ease and fluid balance",
      "Traditional European herbal infusions for urinary tract and renal support",
      "Aromatic digestive bitters taken to stimulate gastric motility"
    ],
    partsUsed: ["Seeds"]
  },
  {
    id: "rose-hips",
    name: "Rose hips",
    scientificName: "Rosa canina",
    family: "Rosaceae",
    image: "/23BotanicalExtracts/Rose hips.jpg",
    description: "The bulbous red accessory fruits that ripen on wild dog rose bushes in late autumn following petal fall, Rose hips are celebrated as one of the richest botanical reservoirs of natural Vitamin C.",
    benefits: [
      "Extraordinary natural concentration of bioavailable Vitamin C and bioflavonoids",
      "Contains lycopene, carotenoids, and polyphenolic ellagitannins",
      "Supports collagen formation, connective tissue resilience, and joint comfort",
      "Bolsters immune defense and neutralizes oxidative cellular strain"
    ],
    traditionalUses: [
      "Traditional European syrups and rose hip teas prepared for winter wellness",
      "Vital nutritional source relied on across Britain and Europe during wartime rationing",
      "Traditional folk decoctions for soothing joints and brightening general vitality"
    ],
    partsUsed: ["Fruit (Pseudo-fruits / Hips)"]
  }
];
