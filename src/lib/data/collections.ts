import { l, type Collection } from "../types";
import { img } from "./img";

export const COLLECTIONS: Collection[] = [
  {
    slug: "cucina",
    number: "01",
    name: l("Cucina", "كوتشينا"),
    category: l("Kitchens", "المطابخ"),
    tagline: l("The kitchen as the quiet centre of the home.", "المطبخ قلب البيت الهادئ."),
    intro: l(
      "Cucina brings together matte lacquer, honed travertine and ribbed walnut in kitchens designed to be lived in every day and admired every evening.",
      "تجمع كوتشينا بين اللّك المطفأ والترافرتين المصقول والجوز المضلّع في مطابخ صُممت لتُستخدم كل يوم وتُستمتع بها كل مساء."
    ),
    philosophyTitle: l("Everything has a place, and every place is considered.", "لكل شيء مكانه، وكل مكان مدروس."),
    philosophy: l(
      "We plan a kitchen around how you cook, not around standard modules. Appliances disappear, storage is measured to what you own, and the island becomes the room's quiet sculpture.",
      "نخطط المطبخ حول طريقتك في الطهي لا حول الوحدات القياسية. تختفي الأجهزة، وتُقاس مساحات التخزين على ما تملكه، وتصبح الجزيرة منحوتة الغرفة الهادئة."
    ),
    features: [
      { title: l("Handleless fronts", "واجهات بلا مقابض"), text: l("Integrated brass recesses and push-to-open doors keep every line uninterrupted.", "تجاويف نحاسية مدمجة وأبواب تُفتح باللمس تحافظ على انسياب كل خط.") },
      { title: l("Waterfall stone", "حجر منسدل"), text: l("Islands cut from a single slab, with the vein continuing down to the floor.", "جزر مقطوعة من لوح واحد، تستمر عروقه حتى الأرض.") },
      { title: l("Walk-in pantry", "مخزن مؤن"), text: l("A second working kitchen behind the scenes, in solid walnut and stone.", "مطبخ عمل ثانٍ خلف الكواليس، من الجوز الصلب والحجر.") },
      { title: l("Integrated light", "إضاءة مدمجة"), text: l("Concealed LED lines inside cabinets and beneath shelves, dimmable in zones.", "خطوط إضاءة مخفية داخل الخزائن وتحت الرفوف، قابلة للتعتيم حسب المنطقة.") },
    ],
    materials: [
      { name: l("Honed travertine", "ترافرتين مصقول"), text: l("Warm, porous and calm. Sealed to resist everyday use.", "دافئ ومسامي وهادئ. معالج ليقاوم الاستخدام اليومي."), image: img("collection-cucina-material-01", l("Honed travertine texture", "ملمس الترافرتين المصقول")) },
      { name: l("Ribbed walnut", "جوز مضلّع"), text: l("Solid walnut fluting that catches light along every rib.", "تضليع من الجوز الصلب يلتقط الضوء على طول كل ضلع."), image: img("collection-cucina-material-02", l("Ribbed walnut veneer", "قشرة جوز مضلّعة")) },
    ],
    application: l(
      "From compact city apartments to villas with a separate show kitchen and scullery, Cucina adapts to the way each household cooks and entertains.",
      "من شقق المدينة الصغيرة إلى الفلل ذات مطبخ العرض والمطبخ الخلفي المنفصل، تتكيف كوتشينا مع طريقة كل أسرة في الطهي والضيافة."
    ),
    hero: img("collection-cucina-hero", l("Kitchen island in espresso lacquer with travertine top and walnut tall units", "جزيرة مطبخ بلون الإسبريسو مع سطح ترافرتين ووحدات طويلة من الجوز")),
    environment: [
      img("collection-cucina-environment-01", l("Open kitchen leading to a dining table and terrace at golden hour", "مطبخ مفتوح على طاولة طعام وتراس عند الغروب")),
      img("collection-cucina-environment-02", l("Walk-in pantry with walnut shelves and stone worktop", "مخزن مؤن بأرفف من الجوز وسطح حجري")),
    ],
    details: [
      img("collection-cucina-detail-01", l("Handleless drawers with a brass inset line", "أدراج بلا مقابض بخط نحاسي مدمج")),
      img("collection-cucina-detail-02", l("Waterfall edge of a travertine island", "الحافة المنسدلة لجزيرة من الترافرتين")),
      img("collection-cucina-detail-03", l("Fluted glass cabinet lit from within", "خزانة بزجاج مضلّع مضاءة من الداخل")),
    ],
    relatedProjects: ["palm-residence", "villa-lago"],
  },
  {
    slug: "guardaroba",
    number: "02",
    name: l("Guardaroba", "غواردَروبا"),
    category: l("Dressing rooms", "غرف الملابس"),
    tagline: l("A private room for the ritual of dressing.", "غرفة خاصة لطقس ارتداء الملابس."),
    intro: l(
      "Guardaroba turns storage into architecture: floor-to-ceiling walnut, smoked glass, leather-lined drawers and light that shows every colour truthfully.",
      "تحوّل غواردَروبا التخزين إلى عمارة: جوز من الأرض حتى السقف، وزجاج مدخّن، وأدراج مبطنة بالجلد، وضوء يُظهر كل لون على حقيقته."
    ),
    philosophyTitle: l("Designed around what you own.", "مصممة حول ما تملكه."),
    philosophy: l(
      "We inventory your wardrobe before we draw a single line, so every rail, shelf and drawer has a purpose and nothing is left on a chair.",
      "نُحصي محتويات خزانتك قبل أن نرسم خطاً واحداً، ليكون لكل علّاقة ورف ودرج غرض، ولا يبقى شيء على كرسي."
    ),
    features: [
      { title: l("Smoked glass doors", "أبواب زجاج مدخّن"), text: l("Bronze-framed glass protects garments while keeping them in view.", "زجاج بإطار برونزي يحمي الملابس ويُبقيها ظاهرة.") },
      { title: l("Jewellery island", "جزيرة المجوهرات"), text: l("Shallow velvet-lined drawers for watches, jewellery and accessories.", "أدراج ضحلة مبطنة بالمخمل للساعات والمجوهرات والإكسسوارات.") },
      { title: l("Lit shelving", "رفوف مضاءة"), text: l("Warm, colour-accurate LED lines under every shelf and above every rail.", "خطوط إضاءة دافئة ودقيقة الألوان تحت كل رف وفوق كل علّاقة.") },
      { title: l("Leather interiors", "تبطين جلدي"), text: l("Hand-stitched leather linings in drawers and trays.", "تبطين جلدي مخيط يدوياً في الأدراج والصواني.") },
    ],
    materials: [
      { name: l("Leather and suede", "جلد وشامواه"), text: l("Taupe, ivory and espresso hides, chosen with the walnut.", "جلود بألوان الرمادي الدافئ والعاجي والإسبريسو، تُختار مع الجوز."), image: img("collection-guardaroba-material-01", l("Leather and suede swatches", "عينات جلد وشامواه")) },
      { name: l("Bronzed mirror", "مرآة برونزية"), text: l("A softer reflection that warms the whole room.", "انعكاس أنعم يمنح الغرفة كلها دفئاً."), image: img("collection-guardaroba-material-02", l("Bronzed mirror glass surface", "سطح مرآة برونزية")) },
    ],
    application: l(
      "Walk-in dressing suites, his-and-hers rooms or a single wardrobe wall in a guest bedroom, each built to the exact garments it will hold.",
      "أجنحة ملابس متكاملة، أو غرف منفصلة للزوجين، أو جدار خزائن واحد في غرفة الضيوف، يُصنع كل منها على مقاس الملابس التي سيحملها."
    ),
    hero: img("collection-guardaroba-hero", l("Walk-in dressing room with walnut wardrobes, smoked glass and a central ottoman", "غرفة ملابس بخزائن من الجوز وزجاج مدخّن ومقعد في الوسط")),
    environment: [
      img("collection-guardaroba-environment-01", l("Dressing suite opening into a bedroom", "جناح ملابس ينفتح على غرفة النوم")),
      img("collection-guardaroba-environment-02", l("Central island with an open jewellery drawer", "جزيرة وسطية مع درج مجوهرات مفتوح")),
    ],
    details: [
      img("collection-guardaroba-detail-01", l("Leather-lined drawer with brass divider", "درج مبطن بالجلد بفاصل نحاسي")),
      img("collection-guardaroba-detail-02", l("Bronze hanging rail with neutral garments", "علّاقة برونزية مع ملابس بألوان هادئة")),
      img("collection-guardaroba-detail-03", l("Illuminated shoe shelf", "رف أحذية مضاء")),
    ],
    relatedProjects: ["palm-residence", "pearl-townhouse"],
  },
  {
    slug: "terme",
    number: "03",
    name: l("Terme", "تيرمي"),
    category: l("Bathrooms", "الحمامات"),
    tagline: l("The bathroom as a daily retreat.", "الحمام ملاذ يومي."),
    intro: l(
      "Terme draws on the calm of historic bath houses: carved stone, honed marble, warm timber and water that falls exactly where it should.",
      "تستلهم تيرمي هدوء الحمامات التاريخية: حجر منحوت ورخام مصقول وخشب دافئ وماء ينساب حيث يجب تماماً."
    ),
    philosophyTitle: l("Stone, water and silence.", "حجر وماء وسكون."),
    philosophy: l(
      "We design bathrooms as rooms, with daylight, proportion and acoustics considered as carefully as the fittings.",
      "نصمم الحمامات كغرف متكاملة، نهتم فيها بضوء النهار والنِّسب والصوت بقدر اهتمامنا بالتجهيزات."
    ),
    features: [
      { title: l("Carved stone basins", "أحواض حجرية منحوتة"), text: l("Solid stone basins and baths, each one cut and finished by hand.", "أحواض ومغاطس من الحجر الصلب، يُقطع كل منها ويُشطّب يدوياً.") },
      { title: l("Floating vanities", "وحدات معلّقة"), text: l("Walnut cabinetry that keeps the floor clear and the room light.", "خزائن من الجوز تُبقي الأرض خالية والغرفة خفيفة.") },
      { title: l("Walk-in showers", "دُش مفتوح"), text: l("Level thresholds, stone benches and lit niches.", "عتبات مستوية ومقاعد حجرية وتجاويف مضاءة.") },
      { title: l("Brushed metal fittings", "تجهيزات معدنية مصقولة"), text: l("Bronze and brass taps in finishes that soften over time.", "صنابير من البرونز والنحاس بتشطيبات تزداد نعومة مع الوقت.") },
    ],
    materials: [
      { name: l("Honed marble", "رخام مصقول"), text: l("Soft veining with a silky, non-slip finish.", "عروق ناعمة مع تشطيب حريري مقاوم للانزلاق."), image: img("collection-terme-material-01", l("Honed marble texture", "ملمس الرخام المصقول")) },
      { name: l("Microcement", "مايكروسمنت"), text: l("Seamless and warm, ideal for walls and showers.", "سطح متصل ودافئ، مثالي للجدران والدُش."), image: img("collection-terme-material-02", l("Microcement surface with trowel marks", "سطح مايكروسمنت بآثار المالج")) },
    ],
    application: l(
      "Principal en-suites, guest bathrooms and private spa rooms, each planned around light, privacy and the way you like to unwind.",
      "حمامات رئيسية وحمامات للضيوف وغرف سبا خاصة، يُخطَّط كل منها حول الضوء والخصوصية وطريقتك المفضلة في الاسترخاء."
    ),
    hero: img("collection-terme-hero", l("Freestanding stone bath beneath a tall window", "مغطس حجري قائم تحت نافذة طويلة")),
    environment: [
      img("collection-terme-environment-01", l("Long double vanity with stone basins and bronze mirror", "وحدة مغسلتين طويلة بأحواض حجرية ومرآة برونزية")),
      img("collection-terme-environment-02", l("Walk-in shower with stone bench and lit niche", "دُش مفتوح بمقعد حجري وتجويف مضاء")),
    ],
    details: [
      img("collection-terme-detail-01", l("Brass spout above a carved stone basin", "صنبور نحاسي فوق حوض حجري منحوت")),
      img("collection-terme-detail-02", l("Stone basin and folded towel on walnut", "حوض حجري ومنشفة مطوية على الجوز")),
      img("collection-terme-detail-03", l("Bronze towel rail against honed marble", "علّاقة مناشف برونزية على رخام مصقول")),
    ],
    relatedProjects: ["palm-residence", "corniche-apartment"],
  },
  {
    slug: "salone",
    number: "04",
    name: l("Salone", "سالوني"),
    category: l("Living & joinery", "المعيشة والنجارة"),
    tagline: l("Joinery that gives a room its character.", "نجارة تمنح الغرفة شخصيتها."),
    intro: l(
      "Salone covers libraries, media walls, entrance halls and staircases: the architectural joinery that turns a house into a home.",
      "تشمل سالوني المكتبات وجدران الوسائط والمداخل والسلالم: النجارة المعمارية التي تحوّل المنزل إلى بيت."
    ),
    philosophyTitle: l("Built-in, never added on.", "مدمجة، لا مضافة."),
    philosophy: l(
      "Our living joinery is drawn with the architecture, so shelves, panels and doors align with windows, ceilings and the people who use them.",
      "نرسم نجارة المعيشة مع العمارة نفسها، فتتوافق الرفوف والألواح والأبواب مع النوافذ والأسقف ومع من يستخدمها."
    ),
    features: [
      { title: l("Fluted panelling", "ألواح مضلّعة"), text: l("Solid oak fluting with concealed doors that open without handles.", "تضليع من البلوط الصلب مع أبواب مخفية تُفتح بلا مقابض.") },
      { title: l("Library walls", "جدران المكتبات"), text: l("Lit shelving sized for books, objects and art.", "رفوف مضاءة بمقاسات تناسب الكتب والقطع الفنية.") },
      { title: l("Media walls", "جدران الوسائط"), text: l("Screens, speakers and cables hidden behind timber.", "الشاشات والسماعات والأسلاك مخفية خلف الخشب.") },
      { title: l("Stairs and balustrades", "سلالم ودرابزين"), text: l("Slim bronze rods and solid treads, made in our atelier.", "قضبان برونزية رفيعة ودرجات صلبة، تُصنع في مشغلنا.") },
    ],
    materials: [
      { name: l("Rift-cut oak", "بلوط مقطوع شعاعياً"), text: l("A straight, quiet grain that suits large surfaces.", "عروق مستقيمة هادئة تناسب الأسطح الكبيرة."), image: img("collection-salone-material-01", l("Rift-cut oak veneer", "قشرة بلوط مقطوع شعاعياً")) },
      { name: l("Lime plaster", "جص جيري"), text: l("Breathable walls with a soft, cloudy depth.", "جدران تتنفس بعمق ناعم متدرج."), image: img("collection-salone-material-02", l("Lime-washed plaster wall", "جدار مطلي بالجص الجيري")) },
    ],
    application: l(
      "Living rooms, studies, entrance halls and stairwells, in villas, apartments and private offices.",
      "غرف المعيشة والمكاتب والمداخل وبيوت الدرج، في الفلل والشقق والمكاتب الخاصة."
    ),
    hero: img("collection-salone-hero", l("Fluted oak library wall with a stone fireplace and leather lounge chair", "جدار مكتبة من البلوط المضلّع مع مدفأة حجرية وكرسي جلدي")),
    environment: [
      img("collection-salone-environment-01", l("Living room with a built-in media and storage wall", "غرفة معيشة بجدار وسائط وتخزين مدمج")),
      img("collection-salone-environment-02", l("Entrance hall with a floating walnut console and round mirror", "مدخل بطاولة جوز معلّقة ومرآة دائرية")),
    ],
    details: [
      img("collection-salone-detail-01", l("Fluted oak panel with a hidden door", "لوح بلوط مضلّع مع باب مخفي")),
      img("collection-salone-detail-02", l("Lit bookshelf with books and a ceramic jug", "رف كتب مضاء مع كتب وإبريق خزفي")),
      img("collection-salone-detail-03", l("Bronze rod balustrade rising beside a stair", "درابزين من قضبان برونزية بجانب الدرج")),
    ],
    relatedProjects: ["villa-lago", "pearl-townhouse"],
  },
];

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);
