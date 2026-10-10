import { l, type L } from "../types";

export const BRAND = {
  name: l("Ivorra Interiors", "إيفورا للتصميم الداخلي"),
  short: "IVORRA",
  tagline: l("Spaces designed beyond expectation.", "مساحات مصممة بما يتجاوز التوقعات."),
  email: "studio@ivorra.example",
  phone: "+966 11 555 0190",
  phoneHref: "tel:+966115550190",
  whatsapp: "+966 50 555 0190",
  whatsappHref: "https://wa.me/966505550190",
  address: l("King Fahd Road, Al Olaya, Riyadh 12214, Saudi Arabia", "طريق الملك فهد، العليا، الرياض ١٢٢١٤، المملكة العربية السعودية"),
  city: l("Riyadh", "الرياض"),
  hours: [
    { days: l("Sunday – Thursday", "الأحد – الخميس"), time: l("10:00 – 19:00", "١٠:٠٠ – ١٩:٠٠") },
    { days: l("Saturday", "السبت"), time: l("By appointment", "بموعد مسبق") },
    { days: l("Friday", "الجمعة"), time: l("Closed", "مغلق") },
  ],
  mapUrl: "https://www.google.com/maps/search/?api=1&query=King+Fahd+Road+Al+Olaya+Riyadh",
  est: "2026",
};

export const NAV: { href: string; label: L }[] = [
  { href: "/about", label: l("About", "عن إيفورا") },
  { href: "/collections", label: l("Collections", "المجموعات") },
  { href: "/projects", label: l("Projects", "المشاريع") },
  { href: "/studio", label: l("Studio", "الاستوديو") },
  { href: "/journal", label: l("Journal", "المجلة") },
  { href: "/contact", label: l("Contact", "تواصل") },
];

export const UI = {
  consultation: l("Private Consultation", "استشارة خاصة"),
  bookConsultation: l("Book a private consultation", "احجز استشارة خاصة"),
  requestConsultation: l("Request private consultation", "اطلب استشارة خاصة"),
  contactStudio: l("Contact studio", "تواصل مع الاستوديو"),
  explore: l("Explore", "اكتشف"),
  exploreCollections: l("Explore the collections", "اكتشف المجموعات"),
  exploreCollection: l("Explore collection", "اكتشف المجموعة"),
  viewProject: l("View project", "عرض المشروع"),
  allProjects: l("All projects", "كل المشاريع"),
  allCollections: l("All collections", "كل المجموعات"),
  visitStudio: l("Visit the studio", "زر الاستوديو"),
  readArticle: l("Read article", "اقرأ المقال"),
  allArticles: l("All articles", "كل المقالات"),
  minRead: l("min read", "دقائق قراءة"),
  menu: l("Menu", "القائمة"),
  close: l("Close", "إغلاق"),
  langSwitch: l("عربي", "EN"),
  langLabel: l("Switch to Arabic", "Switch to English"),
  skip: l("Skip to content", "انتقل إلى المحتوى"),
  home: l("Home", "الرئيسية"),
  location: l("Location", "الموقع"),
  year: l("Year", "السنة"),
  type: l("Type", "النوع"),
  area: l("Area", "المساحة"),
  collection: l("Collection", "المجموعة"),
  relatedProjects: l("Related projects", "مشاريع ذات صلة"),
  relatedArticles: l("Related articles", "مقالات ذات صلة"),
  moreProjects: l("More projects", "مشاريع أخرى"),
  materials: l("Materials", "المواد"),
  details: l("Details", "التفاصيل"),
  gallery: l("Gallery", "المعرض"),
  next: l("Next", "التالي"),
  prev: l("Previous", "السابق"),
  notFoundTitle: l("This room is still being designed.", "هذه الغرفة ما زالت قيد التصميم."),
  notFoundText: l("The page you are looking for does not exist or has moved.", "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."),
  backHome: l("Return home", "العودة إلى الرئيسية"),
  rights: l("© 2026 Ivorra Interiors. A MYFRIX concept project.", "© ٢٠٢٦ إيفورا للتصميم الداخلي. مشروع تصوري من MYFRIX."),
  newsletter: l("Receive our journal, a few times a year.", "استلم مجلتنا، بضع مرات في العام."),
  emailPlaceholder: l("Your email", "بريدك الإلكتروني"),
  subscribe: l("Subscribe", "اشترك"),
  subscribed: l("Thank you. You are on the list.", "شكراً لك. تمت إضافتك إلى القائمة."),
  footerStatement: l("Interior architecture and bespoke joinery for private residences.", "عمارة داخلية ونجارة مخصصة للمساكن الخاصة."),
  studioLabel: l("Studio", "الاستوديو"),
  visit: l("Visit", "زيارة"),
  write: l("Write", "راسلنا"),
  call: l("Call", "اتصل"),
  hoursLabel: l("Opening hours", "ساعات العمل"),
  directions: l("Get directions", "احصل على الاتجاهات"),
  whatsapp: l("WhatsApp", "واتساب"),
};

export const HOME = {
  heroLabel: l("Private design studio", "استوديو تصميم خاص"),
  heroTitle: l("Spaces Designed Beyond Expectation.", "مساحات مصممة بما يتجاوز التوقعات."),
  heroText: l(
    "Kitchens, dressing rooms, bathrooms and living spaces, composed in stone, timber and light for the homes of people who care about design.",
    "مطابخ وغرف ملابس وحمامات ومساحات معيشة، نصوغها بالحجر والخشب والضوء لبيوت من يهتمون بالتصميم."
  ),
  philosophyLabel: l("Our philosophy", "فلسفتنا"),
  philosophyTitle: l("Where architecture, material and craftsmanship become one.", "حيث تصبح العمارة والمادة والحرفة شيئاً واحداً."),
  philosophyText: l(
    "Ivorra designs interiors as architecture, not decoration. Every cabinet, surface and junction is drawn in relation to the room, the light and the way a family lives. The result is quieter than most luxury, and it lasts longer.",
    "تصمم إيفورا المساحات الداخلية كعمارة لا كديكور. نرسم كل خزانة وسطح وتفصيل بالنسبة إلى الغرفة والضوء وطريقة عيش العائلة. والنتيجة أهدأ من أغلب الفخامة، وتدوم أطول."
  ),
  collectionsLabel: l("Signature collections", "المجموعات المميزة"),
  collectionsTitle: l("Designed for Distinctive Living.", "مصممة لحياة مختلفة."),
  featuredLabel: l("Collection 01", "المجموعة ٠١"),
  craftLabel: l("Our craft", "حرفتنا"),
  craftTitle: l("Made slowly, by hand, to the millimetre.", "تُصنع على مهل، يدوياً، بدقة المليمتر."),
  craftText: l(
    "Our joinery is built in a single atelier by makers who have worked together for years. We select every slab and veneer leaf ourselves, and nothing leaves the workshop until it is right.",
    "تُنفَّذ نجارتنا في مشغل واحد على يد حرفيين يعملون معاً منذ سنوات. نختار بأنفسنا كل لوح حجري وكل ورقة قشرة خشب، ولا يغادر أي عمل المشغل حتى يكتمل كما يجب."
  ),
  principles: [
    { title: l("Material", "المادة"), text: l("Natural stone, solid timber and real metal, chosen for how they age.", "حجر طبيعي وخشب صلب ومعدن حقيقي، نختارها لطريقة تقدّمها في العمر.") },
    { title: l("Precision", "الدقة"), text: l("Shadow gaps, grain matching and alignments resolved before anything is cut.", "فواصل الظل وتطابق العروق والمحاذاة تُحسم قبل أي قص.") },
    { title: l("Craftsmanship", "الحرفة"), text: l("Hand-finished edges, dovetailed drawers and fittings made to measure.", "حواف مشطّبة يدوياً وأدراج معشّقة وتجهيزات مصنوعة على المقاس.") },
  ],
  featuredProjectLabel: l("Featured project", "مشروع مختار"),
  projectsLabel: l("Projects", "المشاريع"),
  projectsTitle: l("Spaces That Speak for Themselves.", "مساحات تتحدث عن نفسها."),
  processLabel: l("The design process", "مراحل التصميم"),
  processTitle: l("Four steps, one point of contact.", "أربع مراحل، ومحاور واحد."),
  studioLabel: l("Studio & showroom", "الاستوديو والمعرض"),
  studioTitle: l("Experience the Design in Person.", "عِش التصميم عن قرب."),
  studioText: l(
    "Our Riyadh showroom holds full-scale kitchens, dressing rooms and bathrooms, and a library of more than four hundred materials. Book a private appointment and we will prepare the room around your project.",
    "يضم معرضنا في الرياض مطابخ وغرف ملابس وحمامات بالحجم الحقيقي، ومكتبة تضم أكثر من أربعمئة مادة. احجز موعداً خاصاً وسنُعدّ المكان وفق مشروعك."
  ),
  studioPoints: [
    l("Private consultation", "استشارة خاصة"),
    l("Materials and finishes", "المواد والتشطيبات"),
    l("Samples to take home", "عينات تأخذها معك"),
    l("Design assistance", "مساعدة في التصميم"),
    l("A personal designer", "مصمم مخصص لك"),
  ],
  testimonialLabel: l("Client words", "كلمة عميل"),
  journalLabel: l("Journal", "المجلة"),
  journalTitle: l("Notes on Material and Light.", "ملاحظات عن المادة والضوء."),
  ctaTitle: l("Let's Create Something Exceptional.", "لنصنع معاً شيئاً استثنائياً."),
  ctaText: l(
    "Tell us about your home. A senior designer will call you within two working days to arrange a private consultation.",
    "حدثنا عن بيتك. سيتصل بك أحد كبار مصممينا خلال يومي عمل لترتيب استشارة خاصة."
  ),
};

export const PROCESS: { title: L; text: L }[] = [
  {
    title: l("Discover", "الاكتشاف"),
    text: l(
      "We visit the site, study the plans and listen. How you cook, dress, bathe and gather shapes everything that follows.",
      "نزور الموقع وندرس المخططات ونصغي. طريقتك في الطهي واللبس والاستحمام واجتماع العائلة تشكّل كل ما يأتي بعد ذلك."
    ),
  },
  {
    title: l("Design", "التصميم"),
    text: l(
      "Layouts, elevations and a material palette, presented in drawings, samples and realistic visuals.",
      "توزيعات وواجهات ولوحة مواد، نقدمها في رسومات وعينات وتصورات واقعية."
    ),
  },
  {
    title: l("Refine", "التنقيح"),
    text: l(
      "We resolve every detail together, from handle positions to stone vein direction, and fix a single price.",
      "نحسم معاً كل تفصيل، من موضع المقبض إلى اتجاه عروق الحجر، ونثبّت سعراً واحداً."
    ),
  },
  {
    title: l("Deliver", "التسليم"),
    text: l(
      "Our own team builds, installs and inspects, then returns after three months to check everything still works perfectly.",
      "يتولى فريقنا التصنيع والتركيب والفحص، ثم نعود بعد ثلاثة أشهر للتأكد من أن كل شيء ما زال يعمل بإتقان."
    ),
  },
];

export const ABOUT = {
  heroLabel: l("About Ivorra", "عن إيفورا"),
  heroTitle: l("A Studio for Considered Interiors.", "استوديو لمساحات داخلية مدروسة."),
  heroText: l("Interior architecture, bespoke joinery and material curation for private homes across the Gulf and Europe.", "عمارة داخلية ونجارة مخصصة واختيار للمواد لمساكن خاصة في الخليج وأوروبا."),
  storyLabel: l("Our story", "قصتنا"),
  storyTitle: l("Built on one simple idea: design the room first.", "قامت على فكرة بسيطة: صمّم الغرفة أولاً."),
  story: [
    l(
      "Ivorra began in Riyadh in 2026 with a small team of interior architects and cabinet makers who were tired of beautiful furniture placed in rooms that had never been designed.",
      "بدأت إيفورا في الرياض عام ٢٠٢٦ بفريق صغير من المعماريين الداخليين وصانعي الخزائن، سئموا رؤية أثاث جميل يوضع في غرف لم تُصمَّم أصلاً."
    ),
    l(
      "We work the other way round. We start with proportion, daylight and movement, and only then draw the kitchens, wardrobes and bathrooms that belong there.",
      "نحن نعمل بالعكس. نبدأ بالنِّسب وضوء النهار والحركة، ثم نرسم المطابخ والخزائن والحمامات التي تنتمي إلى المكان."
    ),
  ],
  philosophyLabel: l("Philosophy", "الفلسفة"),
  philosophyTitle: l("Quiet luxury is a matter of decisions, not decoration.", "الفخامة الهادئة مسألة قرارات، لا زخارف."),
  philosophyText: l(
    "We would rather remove a handle than add an ornament. Every line has a reason, and every material is used where it performs best.",
    "نفضّل أن نزيل مقبضاً على أن نضيف زخرفة. لكل خط سبب، وتُستخدم كل مادة حيث تؤدي أفضل أداء."
  ),
  craftLabel: l("Craftsmanship", "الحرفة"),
  craftTitle: l("One atelier, from first cut to final polish.", "مشغل واحد، من القصة الأولى حتى التلميع الأخير."),
  craftText: l(
    "Our joinery is made in our own workshop. Drawers are dovetailed, veneers are book-matched by hand, and every piece is dry-assembled before it travels to site.",
    "تُصنع نجارتنا في مشغلنا الخاص. الأدراج معشّقة، وأوراق القشرة تُطابَق يدوياً، وكل قطعة تُجمَّع تجريبياً قبل نقلها إلى الموقع."
  ),
  materialsLabel: l("Materials", "المواد"),
  materialsTitle: l("Chosen for how they age.", "نختارها لطريقة تقدّمها في العمر."),
  materialsText: l(
    "Travertine, marble, walnut, oak, bronze and lime plaster. We buy whole slabs and flitches so that grain and veining flow across a room.",
    "الترافرتين والرخام والجوز والبلوط والبرونز والجص الجيري. نشتري الألواح كاملة لتنساب العروق والأنماط عبر الغرفة."
  ),
  approachLabel: l("Design approach", "منهج التصميم"),
  approachTitle: l("Precision you feel rather than see.", "دقة تشعر بها أكثر مما تراها."),
  approachText: l(
    "A ten-millimetre shadow gap, a drawer that closes in silence, a light that grazes stone at exactly the right angle. These are the details that make a room feel calm.",
    "فاصل ظل بعشرة مليمترات، ودرج يُغلق بصمت، وضوء يلامس الحجر بالزاوية الصحيحة تماماً. هذه هي التفاصيل التي تجعل الغرفة هادئة."
  ),
  teamLabel: l("The team", "الفريق"),
  teamTitle: l("Architects, makers and one point of contact.", "معماريون وحرفيون ومحاور واحد."),
  teamText: l(
    "Every project is led by a senior designer who stays with you from the first visit to handover, supported by our drawing office and workshop.",
    "يقود كل مشروع مصمم أول يرافقك من الزيارة الأولى حتى التسليم، بدعم من مكتب الرسم والمشغل."
  ),
  stats: [
    { value: "400+", label: l("Materials in our library", "مادة في مكتبتنا") },
    { value: "1", label: l("Designer per project", "مصمم لكل مشروع") },
    { value: "10", label: l("Year joinery guarantee", "سنوات ضمان على النجارة") },
  ],
  studioLabel: l("The studio", "الاستوديو"),
  studioTitle: l("Come and see the materials in daylight.", "تعال وشاهد المواد في ضوء النهار."),
};

export const STUDIO = {
  heroLabel: l("Studio & showroom", "الاستوديو والمعرض"),
  heroTitle: l("Experience the Design in Person.", "عِش التصميم عن قرب."),
  heroText: l("A private showroom in Al Olaya, Riyadh, open by appointment.", "معرض خاص في العليا بالرياض، يستقبلك بموعد مسبق."),
  ourLabel: l("Our studio", "الاستوديو"),
  ourTitle: l("Full-scale rooms, not catalogues.", "غرف بالحجم الحقيقي، لا كتالوجات."),
  ourText: l(
    "Open a drawer, run your hand along the stone, see how walnut changes from morning to evening. Our showroom is designed to let you decide with confidence.",
    "افتح درجاً، ومرّر يدك على الحجر، وشاهد كيف يتغير لون الجوز من الصباح إلى المساء. صُمم معرضنا ليمنحك الثقة في قرارك."
  ),
  experienceLabel: l("The experience", "التجربة"),
  experience: [
    { title: l("A prepared room", "مكان مُعدّ لك"), text: l("Before you arrive we pull the materials and drawings that suit your project.", "قبل وصولك نجهّز المواد والرسومات التي تناسب مشروعك.") },
    { title: l("Unhurried time", "وقت بلا عجلة"), text: l("Appointments last around ninety minutes, with one designer and no other visitors.", "يستمر الموعد نحو تسعين دقيقة، مع مصمم واحد ومن دون زوار آخرين.") },
    { title: l("Samples to keep", "عينات تحتفظ بها"), text: l("Leave with a curated box of stone, timber and metal to live with at home.", "تغادر ومعك صندوق مختار من الحجر والخشب والمعدن لتعيش معه في البيت.") },
  ],
  materialsLabel: l("Materials", "المواد"),
  materialsTitle: l("A library of more than four hundred finishes.", "مكتبة تضم أكثر من أربعمئة تشطيب."),
  materialsText: l(
    "Stone, timber, metal, glass and textile, organised so that you can compare them side by side under natural light.",
    "حجر وخشب ومعدن وزجاج ونسيج، مرتبة لتقارن بينها جنباً إلى جنب تحت الضوء الطبيعي."
  ),
  consultLabel: l("Design consultation", "استشارة التصميم"),
  consultTitle: l("Bring your plans. Leave with a direction.", "أحضر مخططاتك، وغادر وأنت تعرف الاتجاه."),
  consultText: l(
    "In a private room our designer reviews your drawings, discusses budget and timing openly, and sketches first ideas with you at the table.",
    "في غرفة خاصة يراجع مصممنا مخططاتك، ويناقش الميزانية والمدة بوضوح، ويرسم معك الأفكار الأولى على الطاولة."
  ),
  galleryLabel: l("Gallery", "المعرض"),
  locationLabel: l("Location", "الموقع"),
  locationTitle: l("Find us in Al Olaya.", "تجدنا في العليا."),
  parking: l("Private parking is available at the entrance.", "يتوفر موقف سيارات خاص عند المدخل."),
};

export const CONTACT = {
  heroLabel: l("Contact", "تواصل"),
  heroTitle: l("Begin Your Next Chapter.", "ابدأ فصلك القادم."),
  heroText: l("Write, call or visit. We reply to every message within one working day.", "راسلنا أو اتصل بنا أو زرنا. نرد على كل رسالة خلال يوم عمل واحد."),
  formTitle: l("Send a message", "أرسل رسالة"),
  consultTitle: l("Planning a full project?", "تخطط لمشروع متكامل؟"),
  consultText: l("A private consultation is the best place to start.", "الاستشارة الخاصة هي أفضل نقطة بداية."),
};

export const CONSULT = {
  label: l("Private consultation", "استشارة خاصة"),
  title: l("Tell Us About Your Project.", "حدثنا عن مشروعك."),
  text: l(
    "The more we know, the better we can prepare. A senior designer will review your request and call you within two working days.",
    "كلما عرفنا أكثر، استعددنا بشكل أفضل. سيراجع أحد كبار مصممينا طلبك ويتصل بك خلال يومي عمل."
  ),
  steps: [
    l("We review your request", "نراجع طلبك"),
    l("A designer calls you", "يتصل بك أحد المصممين"),
    l("We meet at the studio or on site", "نلتقي في الاستوديو أو في الموقع"),
  ],
};

export const FORM = {
  name: l("Full name", "الاسم الكامل"),
  email: l("Email", "البريد الإلكتروني"),
  phone: l("Phone", "الهاتف"),
  subject: l("Subject", "الموضوع"),
  message: l("Message", "الرسالة"),
  projectType: l("Project type", "نوع المشروع"),
  location: l("Project location", "موقع المشروع"),
  size: l("Approximate size", "المساحة التقريبية"),
  contactMethod: l("Preferred contact method", "وسيلة التواصل المفضلة"),
  timeline: l("Desired timeline", "الجدول الزمني المطلوب"),
  files: l("Plans or inspiration (optional)", "مخططات أو صور ملهمة (اختياري)"),
  filesHint: l("PDF, JPG or PNG. Up to 3 files, 5 MB each.", "PDF أو JPG أو PNG. حتى ٣ ملفات، ٥ ميغابايت لكل ملف."),
  choose: l("Choose…", "اختر…"),
  send: l("Send message", "إرسال الرسالة"),
  sending: l("Sending…", "جارٍ الإرسال…"),
  thanksTitle: l("Thank you.", "شكراً لك."),
  thanksText: l("Your message has reached the studio. We will be in touch shortly.", "وصلت رسالتك إلى الاستوديو. سنتواصل معك قريباً."),
  consultThanks: l("Your request has reached the studio. A senior designer will call you within two working days.", "وصل طلبك إلى الاستوديو. سيتصل بك أحد كبار مصممينا خلال يومي عمل."),
  errRequired: l("Please complete this field.", "يرجى تعبئة هذا الحقل."),
  errEmail: l("Please enter a valid email address.", "يرجى إدخال بريد إلكتروني صحيح."),
  errPhone: l("Please enter a valid phone number.", "يرجى إدخال رقم هاتف صحيح."),
  errFiles: l("Up to 3 files, 5 MB each (PDF, JPG, PNG).", "حتى ٣ ملفات، ٥ ميغابايت لكل ملف (PDF، JPG، PNG)."),
  errGeneric: l("Something went wrong. Please try again or email us directly.", "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة."),
  privacy: l("We use your details only to reply to your enquiry.", "نستخدم بياناتك فقط للرد على طلبك."),
  subjects: [l("A new project", "مشروع جديد"), l("Visiting the showroom", "زيارة المعرض"), l("Press and partnerships", "الإعلام والشراكات"), l("Something else", "أمر آخر")],
  projectTypes: [l("Kitchen", "مطبخ"), l("Dressing room / wardrobes", "غرفة ملابس / خزائن"), l("Bathroom", "حمام"), l("Living and joinery", "معيشة ونجارة"), l("Whole home", "البيت كاملاً")],
  sizes: [l("Under 50 m²", "أقل من ٥٠ م²"), l("50 – 150 m²", "٥٠ – ١٥٠ م²"), l("150 – 400 m²", "١٥٠ – ٤٠٠ م²"), l("Over 400 m²", "أكثر من ٤٠٠ م²")],
  methods: [l("Phone call", "اتصال هاتفي"), l("WhatsApp", "واتساب"), l("Email", "البريد الإلكتروني")],
  timelines: [l("As soon as possible", "في أقرب وقت"), l("Within 3 months", "خلال ٣ أشهر"), l("3 – 6 months", "٣ – ٦ أشهر"), l("Just exploring", "أستكشف فقط")],
};
