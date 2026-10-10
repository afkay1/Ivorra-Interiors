import { l, type Testimonial } from "../types";
import { img } from "./img";

export const TESTIMONIAL: Testimonial = {
  quote: l(
    "They listened more than they talked, and every decision felt considered. Months after moving in, the house still feels as calm as the first day.",
    "أصغوا أكثر مما تحدثوا، وكان كل قرار مدروساً. وبعد أشهر من انتقالنا ما زال البيت هادئاً كما كان في اليوم الأول."
  ),
  name: l("Layla & Omar H.", "ليلى وعمر ح."),
  project: l("The Palm Residence", "مسكن النخلة"),
  location: l("Dubai", "دبي"),
  image: img("home-testimonial", l("Quiet living room corner with a cream armchair", "زاوية هادئة في غرفة معيشة مع كرسي بلون الكريم")),
};
