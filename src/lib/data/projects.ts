import { l, type Project } from "../types";
import { img } from "./img";

export const PROJECTS: Project[] = [
  {
    slug: "palm-residence",
    name: l("The Palm Residence", "مسكن النخلة"),
    location: l("Dubai, UAE", "دبي، الإمارات"),
    type: l("Penthouse", "بنتهاوس"),
    year: "2026",
    area: "640 m²",
    summary: l(
      "A full-floor penthouse above the sea, finished in white marble, pale oak and smoked glass.",
      "بنتهاوس يشغل طابقاً كاملاً فوق البحر، بتشطيبات من الرخام الأبيض والبلوط الفاتح والزجاج المدخّن."
    ),
    story: [
      l(
        "The owners wanted a home that felt as calm as the view. We removed every unnecessary wall, laid continuous marble through the living floor and wrapped the core in pale oak panelling that hides storage, doors and services.",
        "أراد المالكون بيتاً بهدوء الإطلالة نفسها. أزلنا كل جدار غير ضروري، ومددنا الرخام دون انقطاع على أرضية المعيشة، وكسونا القلب بألواح من البلوط الفاتح تُخفي التخزين والأبواب والخدمات."
      ),
      l(
        "Light was the brief. By day the sea fills the room; at dusk concealed coves and alabaster pendants take over, so the interior glows against the darkening sky.",
        "كان الضوء هو المحور. في النهار يملأ البحر الغرفة، وعند الغروب تتولى الإضاءة المخفية ومصابيح المرمر المهمة، فيتوهج الداخل أمام السماء التي تزداد عتمة."
      ),
    ],
    conclusion: l(
      "The result is a penthouse that changes with every hour of the day, yet always feels quiet.",
      "والنتيجة بنتهاوس يتغير مع كل ساعة من النهار، لكنه يبقى هادئاً دائماً."
    ),
    facts: [
      { label: l("Scope", "نطاق العمل"), value: l("Interior architecture, kitchen, dressing rooms, four bathrooms, joinery", "عمارة داخلية، مطبخ، غرف ملابس، أربعة حمامات، نجارة") },
      { label: l("Duration", "المدة"), value: l("11 months", "١١ شهراً") },
      { label: l("Collections", "المجموعات"), value: l("Cucina, Guardaroba, Terme", "كوتشينا، غواردَروبا، تيرمي") },
    ],
    materials: [
      { name: l("Statuario marble", "رخام ستاتواريو"), text: l("Floors, island and bathroom walls, book-matched.", "الأرضيات والجزيرة وجدران الحمامات، بعروق متطابقة."), image: img("project-palm-residence-material-01", l("White marble with grey veining", "رخام أبيض بعروق رمادية")) },
      { name: l("Pale European oak", "بلوط أوروبي فاتح"), text: l("Wall panelling, joinery and study shelving.", "ألواح الجدران والنجارة ورفوف المكتب."), image: img("project-palm-residence-material-02", l("Pale oak veneer", "قشرة بلوط فاتح")) },
    ],
    hero: img("project-palm-residence-hero", l("Penthouse living room at dusk with floor-to-ceiling glass facing the sea", "غرفة معيشة في البنتهاوس عند الغروب بواجهات زجاجية تطل على البحر")),
    wide: [
      img("project-palm-residence-wide-01", l("Living room by day with a long ivory sofa and sea view", "غرفة المعيشة نهاراً مع أريكة عاجية طويلة وإطلالة بحرية")),
      img("project-palm-residence-wide-02", l("Marble kitchen island and round dining table", "جزيرة مطبخ رخامية وطاولة طعام دائرية")),
      img("project-palm-residence-wide-03", l("Terrace with teak lounge sofa at golden hour", "التراس مع أريكة من خشب الساج عند الغروب")),
    ],
    rooms: [
      img("project-palm-residence-room-01", l("Principal bedroom with oak headboard wall", "غرفة النوم الرئيسية بجدار سرير من البلوط")),
      img("project-palm-residence-room-02", l("Study with oak shelving and sea view", "المكتب برفوف من البلوط وإطلالة بحرية")),
      img("project-palm-residence-room-03", l("Marble bathroom with freestanding stone bath", "حمام رخامي بمغطس حجري قائم")),
    ],
    details: [
      img("project-palm-residence-detail-01", l("Marble waterfall edge meeting oak cabinetry", "حافة رخامية منسدلة تلتقي بخزائن البلوط")),
      img("project-palm-residence-detail-02", l("Smoked glass cabinet door with champagne frame", "باب خزانة من الزجاج المدخّن بإطار شمباني")),
      img("project-palm-residence-detail-03", l("Alabaster pendant against an oak ceiling", "مصباح مرمر معلّق على سقف من البلوط")),
    ],
    collections: ["cucina", "guardaroba", "terme"],
  },
  {
    slug: "villa-lago",
    name: l("Villa Lago", "فيلا لاغو"),
    location: l("Lake Como, Italy", "بحيرة كومو، إيطاليا"),
    type: l("Lakeside residence", "مسكن على البحيرة"),
    year: "2026",
    area: "520 m²",
    summary: l(
      "A nineteenth-century lakeside villa, reworked in terrazzo, ash and lime plaster.",
      "فيلا على البحيرة من القرن التاسع عشر، أُعيد تصميمها بالتيرازو وخشب الدردار والجص الجيري."
    ),
    story: [
      l(
        "Villa Lago had good bones and tired rooms. We kept the arched windows and high ceilings, stripped the walls back to lime plaster and laid new terrazzo made with stone from the surrounding hills.",
        "كانت فيلا لاغو متينة البنية لكن غرفها متعبة. احتفظنا بالنوافذ المقوسة والأسقف العالية، وأعدنا الجدران إلى الجص الجيري، وفرشنا تيرازو جديداً من حجر التلال المحيطة."
      ),
      l(
        "Ash joinery runs through the house, from the library wall to the long kitchen, keeping the palette light so the lake remains the focus of every room.",
        "تمتد نجارة الدردار في أرجاء البيت، من جدار المكتبة إلى المطبخ الطويل، فتبقى الألوان فاتحة وتظل البحيرة محور كل غرفة."
      ),
    ],
    conclusion: l(
      "Old and new now sit together so naturally that most guests assume the terrazzo has always been there.",
      "يجتمع القديم والجديد الآن بانسجام تام حتى يظن أغلب الزوار أن التيرازو كان هناك منذ البداية."
    ),
    facts: [
      { label: l("Scope", "نطاق العمل"), value: l("Restoration, kitchen, library, bathrooms", "ترميم، مطبخ، مكتبة، حمامات") },
      { label: l("Duration", "المدة"), value: l("14 months", "١٤ شهراً") },
      { label: l("Collections", "المجموعات"), value: l("Cucina, Salone", "كوتشينا، سالوني") },
    ],
    materials: [
      { name: l("Lime plaster", "جص جيري"), text: l("Hand-trowelled walls throughout, in warm ivory.", "جدران مطلية يدوياً في كل البيت، بلون عاجي دافئ."), image: img("project-villa-lago-material-01", l("Warm ivory lime plaster", "جص جيري عاجي دافئ")) },
    ],
    hero: img("project-villa-lago-hero", l("Lakeside villa at dusk with shuttered windows and stone terrace", "فيلا على البحيرة عند الغروب بنوافذ ذات مصاريع وتراس حجري")),
    wide: [
      img("project-villa-lago-wide-01", l("Living room with arched windows and ash library wall", "غرفة المعيشة بنوافذ مقوسة وجدار مكتبة من الدردار")),
      img("project-villa-lago-wide-02", l("Long kitchen with terrazzo island and oak dining table", "مطبخ طويل بجزيرة من التيرازو وطاولة طعام من البلوط")),
    ],
    rooms: [
      img("project-villa-lago-room-01", l("Bedroom with a view of the lake", "غرفة نوم تطل على البحيرة")),
      img("project-villa-lago-room-02", l("Terrazzo bathroom with stone bath and arched window", "حمام من التيرازو بمغطس حجري ونافذة مقوسة")),
    ],
    details: [img("project-villa-lago-detail-01", l("Terrazzo worktop edge meeting ash drawer front", "حافة سطح من التيرازو تلتقي بواجهة درج من الدردار"))],
    collections: ["cucina", "salone"],
  },
  {
    slug: "corniche-apartment",
    name: l("Corniche Apartment", "شقة الكورنيش"),
    location: l("Jeddah, Saudi Arabia", "جدة، المملكة العربية السعودية"),
    type: l("Apartment", "شقة"),
    year: "2026",
    area: "290 m²",
    summary: l(
      "A light-filled apartment on the Red Sea in bleached oak, pale stone and linen.",
      "شقة غامرة بالضوء على البحر الأحمر، من البلوط المبيّض والحجر الفاتح والكتان."
    ),
    story: [
      l(
        "Facing the Red Sea, this apartment receives intense light all day. We chose bleached oak and pale stone that soften the glare, and linen curtains that filter it into something gentle.",
        "تتلقى هذه الشقة المطلة على البحر الأحمر ضوءاً قوياً طوال اليوم. اخترنا البلوط المبيّض والحجر الفاتح لتلطيف الوهج، وستائر الكتان لتحويله إلى ضوء ناعم."
      ),
      l(
        "Joinery is kept low and continuous so the horizon reads uninterrupted from the kitchen, the living room and the principal bedroom.",
        "أبقينا النجارة منخفضة ومتصلة ليظهر الأفق دون انقطاع من المطبخ وغرفة المعيشة وغرفة النوم الرئيسية."
      ),
    ],
    conclusion: l(
      "A coastal home that feels fresh at noon and warm at sunset.",
      "بيت ساحلي منعش عند الظهيرة ودافئ عند الغروب."
    ),
    facts: [
      { label: l("Scope", "نطاق العمل"), value: l("Kitchen, joinery, two bathrooms", "مطبخ، نجارة، حمامان") },
      { label: l("Duration", "المدة"), value: l("7 months", "٧ أشهر") },
      { label: l("Collections", "المجموعات"), value: l("Cucina, Terme", "كوتشينا، تيرمي") },
    ],
    materials: [
      { name: l("Bleached oak", "بلوط مبيّض"), text: l("Floors and joinery in a matte natural finish.", "الأرضيات والنجارة بتشطيب طبيعي مطفأ."), image: img("project-corniche-apartment-material-01", l("Bleached oak veneer", "قشرة بلوط مبيّض")) },
    ],
    hero: img("project-corniche-apartment-hero", l("Living room with floor-to-ceiling windows facing the Red Sea", "غرفة معيشة بنوافذ ممتدة تطل على البحر الأحمر")),
    wide: [
      img("project-corniche-apartment-wide-01", l("Open living and dining area with oak media wall", "منطقة معيشة وطعام مفتوحة بجدار وسائط من البلوط")),
      img("project-corniche-apartment-wide-02", l("Pale oak kitchen with a sea view", "مطبخ من البلوط الفاتح بإطلالة بحرية")),
    ],
    rooms: [
      img("project-corniche-apartment-room-01", l("Bedroom with linen curtains and sea view", "غرفة نوم بستائر كتان وإطلالة بحرية")),
      img("project-corniche-apartment-room-02", l("Stone bathroom with floating oak vanity", "حمام حجري بوحدة مغسلة معلّقة من البلوط")),
    ],
    details: [img("project-corniche-apartment-detail-01", l("Oak shelf with a stone bowl and linen cloth", "رف من البلوط مع وعاء حجري وقطعة كتان"))],
    collections: ["cucina", "terme"],
  },
  {
    slug: "pearl-townhouse",
    name: l("Pearl Townhouse", "تاون هاوس اللؤلؤة"),
    location: l("Doha, Qatar", "الدوحة، قطر"),
    type: l("Townhouse", "تاون هاوس"),
    year: "2026",
    area: "410 m²",
    summary: l(
      "A graphic townhouse in grey travertine, blackened steel and ebony veneer.",
      "تاون هاوس بطابع جريء من الترافرتين الرمادي والفولاذ المسوّد وقشرة الأبنوس."
    ),
    story: [
      l(
        "Our client asked for something darker and more architectural than a typical Gulf home. We built the interior around a double-height living room with a blackened-steel stair and an ebony fireplace wall.",
        "طلب عميلنا شيئاً أكثر عتمة وطابعاً معمارياً من البيت الخليجي المعتاد. بنينا الداخل حول غرفة معيشة بارتفاع طابقين، مع درج من الفولاذ المسوّد وجدار مدفأة من الأبنوس."
      ),
      l(
        "Grey travertine runs from the entrance to the courtyard, tying the rooms together and keeping the darker timber from feeling heavy.",
        "يمتد الترافرتين الرمادي من المدخل حتى الفناء، فيربط الغرف ويمنع الخشب الداكن من أن يبدو ثقيلاً."
      ),
    ],
    conclusion: l(
      "Bold in character, yet as calm as any home we have designed.",
      "جريء في طابعه، لكنه هادئ كأي بيت صممناه."
    ),
    facts: [
      { label: l("Scope", "نطاق العمل"), value: l("Interior architecture, kitchen, study, dressing room", "عمارة داخلية، مطبخ، مكتب، غرفة ملابس") },
      { label: l("Duration", "المدة"), value: l("9 months", "٩ أشهر") },
      { label: l("Collections", "المجموعات"), value: l("Guardaroba, Salone", "غواردَروبا، سالوني") },
    ],
    materials: [
      { name: l("Grey travertine", "ترافرتين رمادي"), text: l("Floors, stair treads and the kitchen island.", "الأرضيات ودرجات السلم وجزيرة المطبخ."), image: img("project-pearl-townhouse-material-01", l("Grey travertine with horizontal banding", "ترافرتين رمادي بطبقات أفقية")) },
    ],
    hero: img("project-pearl-townhouse-hero", l("Townhouse entrance in grey travertine at dusk", "مدخل التاون هاوس من الترافرتين الرمادي عند الغروب")),
    wide: [
      img("project-pearl-townhouse-wide-01", l("Double-height living room with steel stair", "غرفة معيشة بارتفاع طابقين ودرج فولاذي")),
      img("project-pearl-townhouse-wide-02", l("Dark kitchen with travertine island and courtyard view", "مطبخ داكن بجزيرة من الترافرتين وإطلالة على الفناء")),
    ],
    rooms: [
      img("project-pearl-townhouse-room-01", l("Bedroom with ebony headboard wall", "غرفة نوم بجدار سرير من الأبنوس")),
      img("project-pearl-townhouse-room-02", l("Study with dark shelving and leather armchair", "مكتب برفوف داكنة وكرسي جلدي")),
    ],
    details: [img("project-pearl-townhouse-detail-01", l("Blackened steel post meeting a stone tread", "عمود فولاذي مسوّد يلتقي بدرجة حجرية"))],
    collections: ["guardaroba", "salone"],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
