import kibu330 from "../assets/Product_Images/KIBU_330.png";
import arna330 from "../assets/Product_Images/ARNA_CAN330.png";
import reboost from "../assets/Product_Images/Reboost.png";
import cocoCan from "../assets/Product_Images/COCO_Can.png";
import cocoBottle from "../assets/Product_Images/Coco_bottle.png";
import lychee from "../assets/Product_Images/Life_litchi.png";
import mango from "../assets/Product_Images/Mango-Bottle.png";
import nimboo from "../assets/Product_Images/Nimboo_Pani_250.png";
import nimboo2L from "../assets/Product_Images/Nimboo_Pani_2.25lit.png";

const sharedDetail = ({
  story,
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  tastingNotes,
  nutrition,
  highlights,
  secondaryTheme,
  historyTitle,
  historyDescription,
  historyBullets = [],
  packSizes = [],
  packImages = [],
}) => ({
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  story,
  tastingNotes,
  nutrition,
  highlights,
  secondaryTheme,
  historyTitle,
  historyDescription,
  historyBullets,
  packSizes,
  packImages,
});

export const energyProducts = [
  {
    id: "kibu330",
    title: "KIBU Energy",
    variant: "Original",
    description:
      "Balanced taurine + caffeine blend tailored for all-day focus and smooth lift.",
    image: kibu330,
    badge: "Best Seller",
    theme: {
      surface: "linear-gradient(135deg,#0f1c3f 0%,#1f375b 55%,#335c9b 100%)",
      accentBar: "linear-gradient(180deg,#6ea2ff 0%,rgba(255,255,255,0) 80%)",
      isDark: true,
    },
    detail: sharedDetail({
      heroEyebrow: "Flagship Energy",
      heroTitle: "Dense focus without the crash",
      heroSubtitle:
        "Micro-dosed electrolytes and slow-release caffeine carry you through six-hour deep work sprints.",
      story:
        "Formulated with Himalayan pink salt, Korean ginseng and a citrus terpene stack, KIBU lifts gradually then holds steady. A layered carbonation profile keeps the palate bright even after the last sip.",
      tastingNotes: [
        { label: "Aroma", value: "Calamansi zest, alpine herbs" },
        { label: "Texture", value: "Silky micro-carbonation" },
        { label: "Finish", value: "Cooling menthol snap" },
      ],
      nutrition: [
        { label: "Caffeine", value: "80 mg" },
        { label: "Sugars", value: "11 g" },
        { label: "B-Vitamins", value: "B3 • B5 • B6 • B12" },
      ],
      highlights: [
        "Adaptogenic ginseng + L-theanine pairing",
        "Electrolyte buffer controls spike + crash",
        "Nitro carbonation keeps the pour ultra smooth",
      ],
      secondaryTheme: {
        background: "linear-gradient(145deg,#050b1d,#0f1c3f 45%,#19356a)",
        card: "rgba(5,17,45,0.65)",
        text: "text-slate-100",
        badge: "bg-slate-100/10 text-slate-100",
        textColor: "#e2e8f0",
        mutedColor: "rgba(226,232,240,0.65)",
      },
      historyTitle: "Lab-built stamina",
      historyDescription:
        "Developed in a Bengaluru pilot lab to keep industrial designers awake during overnight builds, KIBU spent two years iterating carbonation density and caffeine ratios before launch.",
      historyBullets: [
        "Slow-release caffeine pairing tested across 42 cupping sessions",
        "Nitrogen-infused micro bubbles borrowed from craft stout rigs",
      ],
      packSizes: ["180ml", "250ml", "330ml"],
    }),
  },
  {
    id: "arna330",
    title: "ARNA Spark",
    variant: "Berry Rush",
    description: "Berry-forward fizz wrapped in cooling menthol finish.",
    image: arna330,
    theme: {
      surface: "linear-gradient(135deg,#fbfdff 0%,#c6f3ff 45%,#2dcbf5 100%)",
      accentBar: "linear-gradient(180deg,#ffffff 0%,#2dcbf5 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Ice-Bright Rush",
      heroTitle: "Hyper crisp berry lift",
      heroSubtitle:
        "Layered raspberry, acai and blue lotus give ARNA Spark a chilled, athletic finish perfect for courtside momentum.",
      story:
        "ARNA Spark pairs a tri-berry puree with crystal-filtered water and a frosted menthol edge. Designed with sprinters in mind, the carbohydrate profile leans lighter for quick release energy.",
      tastingNotes: [
        { label: "Aroma", value: "Wild berries, chilled mint" },
        { label: "Texture", value: "Tight effervescence" },
        { label: "Finish", value: "Frosted eucalyptus" },
      ],
      nutrition: [
        { label: "Caffeine", value: "75 mg" },
        { label: "Sugars", value: "9 g" },
        { label: "Electrolytes", value: "Mg • Na • K" },
      ],
      highlights: [
        "Blue lotus extract for calm focus",
        "Berry polyphenols support recovery",
        "Mentholated finish cools core temperature",
      ],
      secondaryTheme: {
        background: "linear-gradient(140deg,#f4feff,#c8f4ff 40%,#4bc0e5)",
        card: "rgba(255,255,255,0.75)",
        text: "text-slate-900",
        badge: "bg-cyan-100 text-cyan-900",
        textColor: "#0f172a",
        mutedColor: "rgba(15,23,42,0.6)",
      },
      historyTitle: "Track-side briefing",
      historyDescription:
        "ARNA Spark was commissioned by a sprinting crew that needed hydration plus focus between heats. The formula keeps sugars low so athletes could stack it with gels without crashing.",
      historyBullets: [
        "Tri-berry puree sourced from Mahabaleshwar farms",
        "Menthol finish inspired by Nordic cold-plunge rituals",
      ],
      packSizes: ["330ml"],
    }),
  },
  {
    id: "reboost",
    title: "REBOOST",
    variant: "Zero Sugar",
    description:
      "Hydration-first stamina drink with BCAA stack and crisp finish.",
    image: reboost,
    badge: "New",
    theme: {
      surface: "linear-gradient(135deg,#fff4e1 0%,#ffc46b 65%,#ffb347 100%)",
      accentBar: "linear-gradient(180deg,#ffe7bf 0%,#ff9c3f 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Zero Sugar Drive",
      heroTitle: "Clean burn endurance",
      heroSubtitle:
        "Electrolyte-smart hydration plus fermented BCAA keeps muscles awake through double sessions.",
      story:
        "REBOOST swaps cane sugar for monk-fruit microdrops, letting natural citrus oils carry the sweetness. A functional salt trio replaces sweat faster than standard isotonic drinks.",
      tastingNotes: [
        { label: "Aroma", value: "Seville orange, lemongrass" },
        { label: "Texture", value: "Feather-light spritz" },
        { label: "Finish", value: "Cedar + lime peel" },
      ],
      nutrition: [
        { label: "Caffeine", value: "65 mg" },
        { label: "Sugars", value: "0 g" },
        { label: "BCAAs", value: "1500 mg" },
      ],
      highlights: [
        "CoQ10 + BCAA recovery stack",
        "Zero sugar monk-fruit sweetening",
        "Electrolyte ratios tuned for humid workouts",
      ],
      secondaryTheme: {
        background: "linear-gradient(160deg,#fff9ef,#ffe2ba,#ffb347)",
        card: "rgba(255,255,255,0.82)",
        text: "text-amber-900",
        badge: "bg-white/80 text-amber-700",
        textColor: "#7c2d12",
        mutedColor: "rgba(124,45,18,0.65)",
      },
      historyTitle: "Hydration-first brief",
      historyDescription:
        "REBOOST was prototyped with coastal football academies who needed a sugar-free option that still delivered electrolytes and flavor. Monk fruit made the cut after blind tasting panels preferred its clean drop.",
      historyBullets: [
        "BCAA ratios tuned with a Chennai strength lab",
        "Electrolyte balance modeled on pro sweat diagnostics",
      ],
      packSizes: ["250ml"],
    }),
  },
];

export const juiceProducts = [
  {
    id: "life-lychee",
    title: "Life Sips",
    variant: "Lychee Burst",
    description:
      "Juicy lychee nectar with a hint of rosewater for a silky floral finish.",
    image: lychee,
    badge: "Best Seller",
    theme: {
      surface: "linear-gradient(135deg,#fff5fb 0%,#ffb5d3 55%,#ff81b2 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Blooming Nectar",
      heroTitle: "Lychee velvet pour",
      heroSubtitle:
        "Plush floral sweetness layered with chilled rose petals and a satin mouthfeel.",
      story:
        "Sun-ripe Muzaffarpur lychees are flash-pressed, then kissed with distilled rosewater. The nectar sits on lees for 24 hours to build body before bottling.",
      tastingNotes: [
        { label: "Aroma", value: "Rose + lychee" },
        { label: "Texture", value: "Satin nectar" },
        { label: "Finish", value: "Pink guava" },
      ],
      nutrition: [
        { label: "Vitamin C", value: "45% DV" },
        { label: "Sugars", value: "13 g" },
        { label: "Calories", value: "120 kcal" },
      ],
      highlights: [
        "Minimal cold-press handling",
        "No added color",
        "Gentle floral finish",
      ],
      secondaryTheme: {
        background: "linear-gradient(150deg,#fff0f7,#ffc4dd,#ff8fbf)",
        card: "rgba(255,255,255,0.78)",
        text: "text-rose-900",
        badge: "bg-rose-100 text-rose-900",
        textColor: "#881337",
        mutedColor: "rgba(136,19,55,0.55)",
      },
      historyTitle: "Muzaffarpur bloom",
      historyDescription:
        "Life Sips Lychee was inspired by a grandmother's sherbet passed down through three generations. The nectar rests overnight on lees to build body, then receives a single drop of rose distillate before bottling.",
      historyBullets: [
        "Fruit sourced during a two-week lychee bloom window",
        "Rosewater distilled in copper pots from Kannauj petals",
      ],
      packSizes: ["150ml"],
    }),
  },
  {
    id: "nimboo",
    title: "Fizz Street",
    variant: "Nimboo Pani",
    description:
      "Classic lemon shikanji with Himalayan salt and mint, charged with micro-bubbles.",
    image: [nimboo, nimboo2L],
    badge: "Street Classic",
    theme: {
      surface: "linear-gradient(135deg,#e8ffe0 0%,#b9f293 60%,#6dd96e 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Bazaar Cooler",
      heroTitle: "Minted nimboo fizz",
      heroSubtitle:
        "Street-cart nostalgia with clarified citrus, black salt and nano bubbles.",
      story:
        "Limes are clarified for a glass-clear tartness, then spun with roasted cumin, kala namak and hand-torn mint. The finish is bright, savory and cooling.",
      tastingNotes: [
        { label: "Aroma", value: "Lime leaf, mint" },
        { label: "Texture", value: "Snappy spritz" },
        { label: "Finish", value: "Cumin smoke" },
      ],
      nutrition: [
        { label: "Vitamin C", value: "35% DV" },
        { label: "Sugars", value: "10 g" },
        { label: "Calories", value: "90 kcal" },
      ],
      highlights: [
        "Kala namak + cumin spice mix",
        "Clarified lime juice",
        "Cooling mint finale",
      ],
      secondaryTheme: {
        background: "linear-gradient(150deg,#edffe5,#c4f5a8,#7fe17d)",
        card: "rgba(255,255,255,0.85)",
        text: "text-lime-900",
        badge: "bg-lime-100 text-lime-900",
        textColor: "#365314",
        mutedColor: "rgba(54,83,20,0.55)",
      },
      historyTitle: "Bazaar remix",
      historyDescription:
        "Fizz Street's nimboo pani was reverse-engineered from Old Delhi carts. Clarified lime juice keeps the color crystal clear while still pouring like the original clay cup coolers.",
      historyBullets: [
        "Roasted cumin ground daily in-house",
        "Mint steeped cold to avoid bitterness",
      ],
      packSizes: ["250ml", "2.25L"],
      packImages: [nimboo, nimboo2L],
    }),
  },
  {
    id: "coco-can",
    title: "Coco Wave",
    variant: "Sparkling Coconut",
    description:
      "Tender coconut water brightened with fine bubbles for instant island refresh.",
    image: cocoCan,
    badge: "Hydrate",
    theme: {
      surface: "linear-gradient(135deg,#e0fbff 0%,#8be0f5 55%,#30b4d9 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Islands in a Can",
      heroTitle: "Sparkling coconut rush",
      heroSubtitle:
        "Cascading bubbles lift soft coconut sweetness and finish with a saline breeze.",
      story:
        "Cold-pressed tender coconut water from Kerala meets champagne bubbles. A touch of pandan keeps the finish verdant, while Maldon sea salt resets electrolytes.",
      tastingNotes: [
        { label: "Aroma", value: "Fresh coconut flesh" },
        { label: "Texture", value: "Feather sparkle" },
        { label: "Finish", value: "Coastal sea salt" },
      ],
      nutrition: [
        { label: "Potassium", value: "470 mg" },
        { label: "Sugars", value: "7 g" },
        { label: "Calories", value: "60 kcal" },
      ],
      highlights: [
        "Single-origin coconuts",
        "Electrolyte-rich hydration",
        "Unpasteurized freshness",
      ],
      secondaryTheme: {
        background: "linear-gradient(150deg,#e5fdff,#aeefff,#58c6e9)",
        card: "rgba(255,255,255,0.8)",
        text: "text-slate-900",
        badge: "bg-cyan-200 text-cyan-900",
        textColor: "#0f172a",
        mutedColor: "rgba(15,23,42,0.55)",
      },
      historyTitle: "Islands in a tank",
      historyDescription:
        "Coco Wave Sparkling began as an experiment to carbonate tender coconut water without muting its softness. The team built a low-pressure carbonation rig that keeps terroir intact while adding effervescence.",
      historyBullets: [
        "Kerala farms contracted for under-30-day harvest cycles",
        "Pandan leaf maceration inspired by Singapore hawker coolers",
      ],
      packSizes: ["180ml"],
    }),
  },
  {
    id: "coco-bottle",
    title: "Coco Wave",
    variant: "Pure Coconut",
    description:
      "Single-origin coconut water, cold-filtered to preserve natural sweetness.",
    image: cocoBottle,
    badge: "Pure Press",
    theme: {
      surface: "linear-gradient(135deg,#f5fff8 0%,#c8f1d3 50%,#8ed4a6 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Raw Hydration",
      heroTitle: "Still coconut silk",
      heroSubtitle:
        "Velvety tropical sweetness balanced by grassy notes and gentle salinity.",
      story:
        "Hand-cracked tender coconuts are cold-filtered once, never heated. The result is a lush, almost creamy sip that mirrors the shell-to-glass experience.",
      tastingNotes: [
        { label: "Aroma", value: "Coconut cream" },
        { label: "Texture", value: "Soft, still" },
        { label: "Finish", value: "Lime leaf" },
      ],
      nutrition: [
        { label: "Potassium", value: "510 mg" },
        { label: "Sugars", value: "6 g" },
        { label: "Calories", value: "55 kcal" },
      ],
      highlights: [
        "Never from concentrate",
        "UV-protected bottle",
        "Source traceability",
      ],
      secondaryTheme: {
        background: "linear-gradient(160deg,#f6fff9,#c7f1d4,#8ed4a6)",
        card: "rgba(255,255,255,0.85)",
        text: "text-emerald-900",
        badge: "bg-emerald-100 text-emerald-900",
        textColor: "#064e3b",
        mutedColor: "rgba(6,78,59,0.55)",
      },
      historyTitle: "Shell-to-glass ritual",
      historyDescription:
        "The still Coco Wave bottle follows a zero-heat chain. Each coconut is cracked dockside, filtered once, then bottled in UV-guarded glass so chefs could plate it like wine.",
      historyBullets: [
        "Every batch logged with grove + tree coordinates",
        "Stainless cold line never climbs above 6°C",
      ],
      packSizes: ["250ml"],
    }),
  },
  {
    id: "mango-bottle",
    title: "Sunrise Press",
    variant: "Mango Splash",
    description:
      "Cold-pressed alphonso mango with calamansi zest for balanced sweetness.",
    image: mango,
    badge: "Tropical",
    theme: {
      surface: "linear-gradient(135deg,#ffdd99 0%,#ff9a44 55%,#ff5f6d 100%)",
      isDark: false,
    },
    detail: sharedDetail({
      heroEyebrow: "Sunset Pour",
      heroTitle: "Alphonso gold wave",
      heroSubtitle:
        "A plush mango body electrified with calamansi acid and a pinch of chilli salt.",
      story:
        "Double-ripened alphonso mangoes are pressed alongside calamansi to keep sweetness in check. A finishing dust of smoked chilli salt adds intrigue without heat.",
      tastingNotes: [
        { label: "Aroma", value: "Golden mango" },
        { label: "Texture", value: "Creamy nectar" },
        { label: "Finish", value: "Chilli salt flicker" },
      ],
      nutrition: [
        { label: "Vitamin A", value: "60% DV" },
        { label: "Sugars", value: "15 g" },
        { label: "Calories", value: "130 kcal" },
      ],
      highlights: [
        "Hand-picked alphonso",
        "Cold-pressed within 6 hrs",
        "Balance of sweet + acid",
      ],
      secondaryTheme: {
        background: "linear-gradient(150deg,#fff1d6,#ffd08a,#ff8f5f)",
        card: "rgba(255,255,255,0.82)",
        text: "text-orange-900",
        badge: "bg-orange-100 text-orange-900",
        textColor: "#7c2d12",
        mutedColor: "rgba(124,45,18,0.58)",
      },
      historyTitle: "Sunrise press",
      historyDescription:
        "Sunrise Press started as a pre-service ritual for a Goa brunch club. Calamansi keeps the plush alphonso sweetness in check, while a pinch of smoked chilli salt nods to Konkan beach snacks.",
      historyBullets: [
        "Alphonso mangoes pressed within six hours of harvest",
        "Calamansi sourced from a micro orchard in Ratnagiri",
      ],
      packSizes: ["250ml"],
    }),
  },
];

export const getProductById = (id) =>
  [...energyProducts, ...juiceProducts].find((item) => item.id === id);

export const allProducts = [...energyProducts, ...juiceProducts];
