import { l, type Article } from "../types";
import { img } from "./img";

export const ARTICLES: Article[] = [
  {
    slug: "a-kitchen-you-never-want-to-leave",
    category: l("Kitchens", "المطابخ"),
    title: l("Designing a Kitchen You Never Want to Leave", "كيف تصمم مطبخاً لا ترغب في مغادرته"),
    date: "2026-10-02",
    readTime: 5,
    excerpt: l(
      "The best kitchens are not the most equipped. They are the ones where light, storage and stone are resolved so well that the room simply feels good.",
      "أفضل المطابخ ليست الأكثر تجهيزاً، بل تلك التي حُسم فيها الضوء والتخزين والحجر بإتقان، فتشعر فيها بالراحة ببساطة."
    ),
    image: img("journal-featured", l("Styled travertine kitchen island with a walnut board and lemons", "جزيرة مطبخ من الترافرتين مع لوح جوز وليمون")),
    sections: [
      {
        paragraphs: [
          l(
            "Most of the kitchens we are asked to replace are not badly made. They are badly planned. Storage is in the wrong place, the island blocks the light, and the room has been designed around appliances rather than people.",
            "أغلب المطابخ التي يُطلب منا استبدالها ليست سيئة الصنع، بل سيئة التخطيط. التخزين في غير مكانه، والجزيرة تحجب الضوء، والغرفة صُممت حول الأجهزة لا حول الناس."
          ),
        ],
      },
      {
        heading: l("Start with the light", "ابدأ بالضوء"),
        paragraphs: [
          l(
            "We always position the main worktop where morning light falls. The island then becomes a place to gather rather than a barrier, and tall storage moves to the darker walls where it belongs.",
            "نضع دائماً سطح العمل الرئيسي حيث يسقط ضوء الصباح. فتصبح الجزيرة مكاناً للاجتماع لا حاجزاً، وتنتقل الخزائن الطويلة إلى الجدران الأقل إضاءة حيث يجب أن تكون."
          ),
        ],
        image: img("collection-cucina-environment-01", l("Open kitchen at golden hour", "مطبخ مفتوح عند الغروب")),
      },
      {
        heading: l("Measure what you own", "قِس ما تملكه"),
        paragraphs: [
          l(
            "Before drawing a single drawer, we list the pots, plates and appliances you use. A walk-in pantry often removes half the wall cabinets and gives the kitchen room to breathe.",
            "قبل رسم أي درج، نُعدّ قائمة بالقدور والأطباق والأجهزة التي تستخدمها. وغالباً ما يُغني مخزن المؤن عن نصف الخزائن العلوية، فيتنفس المطبخ."
          ),
        ],
        image: img("collection-cucina-environment-02", l("Walk-in pantry in walnut", "مخزن مؤن من الجوز")),
      },
      {
        heading: l("Choose one hero material", "اختر مادة بطلة واحدة"),
        paragraphs: [
          l(
            "A single slab of travertine or marble, used generously, is more striking than three competing surfaces. Let everything else support it.",
            "لوح واحد من الترافرتين أو الرخام، يُستخدم بسخاء، أكثر حضوراً من ثلاثة أسطح متنافسة. اجعل كل ما عداه داعماً له."
          ),
        ],
      },
    ],
  },
  {
    slug: "stone-that-ages-beautifully",
    category: l("Materials", "المواد"),
    title: l("Material Honesty: Stone That Ages Beautifully", "صدق المادة: حجر يزداد جمالاً مع الزمن"),
    date: "2026-09-24",
    readTime: 4,
    excerpt: l("Why we prefer honed travertine and marble that patinate over surfaces that pretend to be perfect.", "لماذا نفضّل الترافرتين والرخام المصقولين اللذين يكتسبان عمقاً مع الزمن على الأسطح التي تدّعي الكمال."),
    image: img("journal-01-thumb", l("Edge of a honed travertine slab with a glass of water", "حافة لوح ترافرتين مصقول مع كأس ماء")),
    sections: [
      {
        paragraphs: [
          l(
            "Natural stone changes. It softens at the edges, darkens slightly where hands rest and develops a quiet sheen. We see this as a quality, not a flaw.",
            "يتغير الحجر الطبيعي. تلين حوافه، ويغمق قليلاً حيث تستقر الأيدي، ويكتسب لمعاناً هادئاً. نرى ذلك ميزة لا عيباً."
          ),
        ],
      },
      {
        heading: l("Honed, not polished", "مصقول لا لامع"),
        paragraphs: [
          l(
            "A honed finish hides small marks and feels warm to the touch. Polished stone shows every fingerprint and every scratch from the first day.",
            "يُخفي التشطيب المصقول العلامات الصغيرة ويبدو دافئاً عند اللمس، بينما يُظهر الحجر اللامع كل بصمة وكل خدش منذ اليوم الأول."
          ),
        ],
        image: img("collection-cucina-detail-02", l("Waterfall travertine edge", "حافة ترافرتين منسدلة")),
      },
      {
        heading: l("Living with it", "العيش معه"),
        paragraphs: [
          l(
            "We seal every surface before handover and give each client a simple care guide. Twice a year is usually all the maintenance stone needs.",
            "نعالج كل سطح قبل التسليم ونقدم لكل عميل دليلاً بسيطاً للعناية. وغالباً ما يكفي الحجرَ أن يُعتنى به مرتين في السنة."
          ),
        ],
      },
    ],
  },
  {
    slug: "planning-a-dressing-room",
    category: l("Dressing rooms", "غرف الملابس"),
    title: l("How to Plan a Dressing Room That Works", "كيف تخطط غرفة ملابس عملية"),
    date: "2026-09-15",
    readTime: 4,
    excerpt: l("Hanging lengths, drawer depths and light: the practical decisions that make a dressing room a pleasure.", "أطوال التعليق وأعماق الأدراج والإضاءة: القرارات العملية التي تجعل غرفة الملابس متعة."),
    image: img("journal-02-thumb", l("Open walnut wardrobe with folded knitwear", "خزانة جوز مفتوحة مع ملابس صوفية مطوية")),
    sections: [
      {
        paragraphs: [
          l(
            "A beautiful dressing room starts with an inventory. Count long and short garments, folded items, shoes and accessories, then add a fifth for the future.",
            "تبدأ غرفة الملابس الجميلة بالجرد. احسب الملابس الطويلة والقصيرة والقطع المطوية والأحذية والإكسسوارات، ثم أضف خُمساً للمستقبل."
          ),
        ],
      },
      {
        heading: l("Light every shelf", "أضئ كل رف"),
        paragraphs: [
          l(
            "Colour-accurate LED lines under shelves and above rails make it possible to choose navy from black at six in the morning.",
            "تتيح خطوط الإضاءة الدقيقة الألوان تحت الرفوف وفوق العلّاقات التمييز بين الكحلي والأسود في السادسة صباحاً."
          ),
        ],
        image: img("collection-guardaroba-detail-03", l("Lit shoe shelf", "رف أحذية مضاء")),
      },
      {
        heading: l("Give the centre a purpose", "امنح الوسط وظيفة"),
        paragraphs: [
          l(
            "An island with shallow drawers for jewellery and watches turns a corridor of cupboards into a room.",
            "جزيرة بأدراج ضحلة للمجوهرات والساعات تحوّل ممراً من الخزائن إلى غرفة حقيقية."
          ),
        ],
        image: img("collection-guardaroba-environment-02", l("Dressing room island with jewellery drawer", "جزيرة غرفة الملابس مع درج المجوهرات")),
      },
    ],
  },
  {
    slug: "the-bathroom-as-a-daily-ritual",
    category: l("Bathrooms", "الحمامات"),
    title: l("The Bathroom as a Daily Ritual", "الحمام طقس يومي"),
    date: "2026-09-04",
    readTime: 3,
    excerpt: l("Designing a bathroom for the ten quiet minutes that start and end every day.", "تصميم الحمام للدقائق العشر الهادئة التي يبدأ بها كل يوم وينتهي."),
    image: img("journal-03-thumb", l("Carved stone bath with a folded linen towel", "مغطس حجري منحوت مع منشفة كتان مطوية")),
    sections: [
      {
        paragraphs: [
          l(
            "We treat the bathroom as a room for slowing down. That means daylight, warm materials and nothing on display that does not need to be there.",
            "نتعامل مع الحمام كغرفة للتمهّل. وهذا يعني ضوء النهار والمواد الدافئة، وألا يُعرض فيه شيء لا داعي لوجوده."
          ),
        ],
      },
      {
        heading: l("Stone underfoot", "حجر تحت القدمين"),
        paragraphs: [
          l(
            "Honed stone and underfloor heating make the first step of the day a good one. A floating vanity keeps the floor continuous and the room feeling larger.",
            "الحجر المصقول مع التدفئة الأرضية يجعلان الخطوة الأولى في اليوم خطوة جميلة، والوحدة المعلّقة تُبقي الأرض متصلة والغرفة أوسع."
          ),
        ],
        image: img("collection-terme-environment-01", l("Double vanity in stone and walnut", "وحدة مغسلتين من الحجر والجوز")),
      },
    ],
  },
  {
    slug: "lighting-in-layers",
    category: l("Light", "الإضاءة"),
    title: l("Lighting a Home: Layers, Not Fixtures", "إضاءة البيت: طبقات لا وحدات"),
    date: "2026-08-27",
    readTime: 4,
    excerpt: l("How concealed light, wall washing and a few good lamps create rooms that feel calm after dark.", "كيف تصنع الإضاءة المخفية وإضاءة الجدران وبضعة مصابيح جيدة غرفاً هادئة بعد حلول الظلام."),
    image: img("journal-04-thumb", l("Floor lamp and wall washer lighting a plaster wall at dusk", "مصباح أرضي وإضاءة جدارية على جدار جصي عند الغروب")),
    sections: [
      {
        paragraphs: [
          l(
            "A single ceiling light flattens a room. We design light in three layers: a soft wash on walls, focused light where you work, and lamps at eye level for warmth.",
            "مصباح سقف واحد يُسطّح الغرفة. لذلك نصمم الإضاءة في ثلاث طبقات: إضاءة ناعمة على الجدران، وإضاءة مركّزة حيث تعمل، ومصابيح بمستوى النظر لتمنح الدفء."
          ),
        ],
      },
      {
        heading: l("Hide the source", "أخفِ المصدر"),
        paragraphs: [
          l(
            "Coves, shelf edges and joinery recesses hold most of our light. You see the glow, not the fitting.",
            "تحمل التجاويف وحواف الرفوف وفراغات النجارة أغلب إضاءتنا. ترى التوهج، لا الوحدة نفسها."
          ),
        ],
        image: img("collection-salone-detail-02", l("Lit bookshelf with soft edge lighting", "رف كتب بإضاءة ناعمة على الحافة")),
      },
    ],
  },
  {
    slug: "choosing-timber",
    category: l("Materials", "المواد"),
    title: l("Choosing Timber: Oak, Walnut or Ash", "اختيار الخشب: بلوط أم جوز أم دردار"),
    date: "2026-08-18",
    readTime: 4,
    excerpt: l("Three woods, three characters. A short guide to choosing the right timber for each room.", "ثلاثة أخشاب وثلاث شخصيات. دليل مختصر لاختيار الخشب المناسب لكل غرفة."),
    image: img("journal-05-thumb", l("Oak, walnut and ash samples on stone", "عينات بلوط وجوز ودردار على الحجر")),
    sections: [
      {
        heading: l("Oak", "البلوط"),
        paragraphs: [l("Calm and versatile. Rift-cut oak suits large panelled walls and bright coastal homes.", "هادئ ومتعدد الاستخدامات. يناسب البلوط المقطوع شعاعياً الجدران الكبيرة والبيوت الساحلية المضيئة.")],
      },
      {
        heading: l("Walnut", "الجوز"),
        paragraphs: [l("Rich and enveloping. We use it in dressing rooms, studies and evening spaces.", "غني ومحتضن. نستخدمه في غرف الملابس والمكاتب ومساحات المساء.")],
        image: img("collection-cucina-material-02", l("Ribbed walnut", "جوز مضلّع")),
      },
      {
        heading: l("Ash", "الدردار"),
        paragraphs: [l("Pale with a lively grain, ideal for kitchens that need to feel light and fresh.", "فاتح بعروق حيوية، مثالي للمطابخ التي تحتاج إلى خفة وانتعاش.")],
      },
    ],
  },
  {
    slug: "inside-our-atelier",
    category: l("Studio", "الاستوديو"),
    title: l("Inside Our Atelier: Where It All Begins", "داخل مشغلنا: حيث تبدأ الحكاية"),
    date: "2026-08-06",
    readTime: 3,
    excerpt: l("Sketches, models and a lot of conversation. A look at the first weeks of an Ivorra project.", "رسومات ونماذج وكثير من الحوار. نظرة على الأسابيع الأولى من مشروع لإيفورا."),
    image: img("journal-06-thumb", l("Atelier workbench with sketches and a cardboard model", "طاولة المشغل مع رسومات ونموذج من الكرتون")),
    sections: [
      {
        paragraphs: [
          l(
            "Every project starts on paper. We sketch by hand in the first meetings because it keeps the conversation open and invites the client to draw with us.",
            "يبدأ كل مشروع على الورق. نرسم باليد في الاجتماعات الأولى لأن ذلك يُبقي الحوار مفتوحاً ويدعو العميل إلى الرسم معنا."
          ),
        ],
      },
      {
        heading: l("Models before visuals", "النماذج قبل التصورات"),
        paragraphs: [
          l(
            "Simple cardboard models help everyone understand scale and light long before a rendering is made.",
            "تساعد النماذج الكرتونية البسيطة الجميع على فهم المقياس والضوء قبل إعداد أي تصور رقمي بوقت طويل."
          ),
        ],
        image: img("about-workspace", l("Designer desk with drawings and samples", "مكتب المصمم مع الرسومات والعينات")),
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
