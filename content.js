/* =====================================================================
   RIFTWARDEN WEBSITE — CONTENT
   This is the only file you need to edit. Change the text between the
   quotes, save, and upload. Keep the commas and brackets as they are.

   In text you can use <b>bold</b>, <i>italic</i> and <br> for a new line.
   ===================================================================== */

window.SITE = {

  /* ---------- Name and browser tab ---------- */
  name: "Riftwarden",
  tabTitle: "Riftwarden — dark roguelite with Soulslike combat",

  /* ---------- Top of the page ---------- */
  hero: {
    logo: "",                                   // optional image instead of the text title, e.g. "assets/logo.png"
    eyebrow: "In development for PC",
    title: "Riftwarden",
    subtitle: "A dark roguelite with Soulslike combat",
    description: "Read the fight, break their posture, and carry what you earn back through the rift. Every run, won or lost, leaves you stronger for the next.",
    facts: ["Top-down action", "PC", "Solo-developed in Unity"]
  },

  /* ---------- Links and buttons (buttons appear only when filled in) ---------- */
  links: {
    steam: "",                                  // Steam store page -> "Wishlist on Steam" button
    build: "",                                  // itch.io page of a playable build -> "Play the pre-alpha build" link
    email: "askgeogames@gmail.com"              // shown as the press and business contact
  },

  /* ---------- Email signup (Kit) ----------
     provider: "kit", "brevo" or "none" (none = preview mode, nothing is sent)
     actionUrl: the action="..." address from your Kit form's HTML embed code */
  signup: {
    provider: "",
    actionUrl: ""
  },

  /* ---------- Socials: paste your profile links. "" hides one. ---------- */
  socials: [
    { name: "YouTube",   url: "", icon: "youtube" },
    { name: "Discord",   url: "", icon: "discord" },
    { name: "X",         url: "", icon: "x" },
    { name: "TikTok",    url: "", icon: "tiktok" },
    { name: "Instagram", url: "", icon: "instagram" },
    { name: "Bluesky",   url: "", icon: "bluesky" },
    { name: "Reddit",    url: "", icon: "reddit" }
  ],

  /* ---------- VIDEOS ----------
     youtube: paste the full YouTube link (or just the ID)
     file:    or a short mp4 in assets/videos/, e.g. "assets/videos/combat.mp4"
     poster:  optional still image shown before it plays, e.g. "assets/videos/combat.jpg"
     Leave both youtube and file empty to show a "coming soon" frame. */
  trailer: { youtube: "", file: "", poster: "" },

  videos: [                                     // the small tiles at the top right (best with 3)
    { tag: "Trailer",   title: "Gameplay trailer",    youtube: "", file: "", poster: "" },
    { tag: "Devlog 01", title: "Posture and stagger", youtube: "", file: "", poster: "" },
    { tag: "Devlog 02", title: "The chessboard boss", youtube: "", file: "", poster: "" }
  ],

  /* ---------- SCREENSHOTS ----------
     Put the image in assets/screens/ and write its path. Add or remove lines freely.
     Leave image "" to show a "coming soon" frame. Best size: 1920x1080 JPG. */
  screenshots: [
    { image: "", caption: "Arena combat" },
    { image: "", caption: "Breaking posture" },
    { image: "", caption: "The Hub" },
    { image: "", caption: "The chessboard boss" },
    { image: "", caption: "Necro Staff minions" },
    { image: "", caption: "Status screen" }
  ],
  mediaNote: "Everything shown is from a game in active development. Art, animation and effects are work in progress.",

  /* ---------- The game ---------- */
  pitch: "The read-and-punish tension of a Soulslike, packed into fast runs you keep coming back to.",
  about: "Riftwarden is a dark, top-down action roguelite. Learn each enemy, break its posture, and turn every run into permanent progress. Then go again with a different weapon and a different build.",

  pillars: [
    { title: "Deliberate combat",  text: "Every hit builds posture until the enemy staggers. Telegraphed attacks, dodges and combo-driven AI reward reading the fight over mashing buttons." },
    { title: "Builds that matter", text: "Weapons roll rarity tiers and modifiers, good and bad. Strength, Dexterity and Sorcery each scale a different part of the arsenal." },
    { title: "Death that pays",    text: "Prime Essence taken from bosses survives death and comes home with you to the Hub, so no run is ever wasted." }
  ],

  /* ---------- How a run plays ---------- */
  loopHeading: "Into the rift and back again",
  loop: [
    { title: "Hub",    text: "Choose your weapon. A short cinematic reshapes your look to match it." },
    { title: "Arenas", text: "Clear combat stages, break posture, collect run essence and loot." },
    { title: "Shop",   text: "Spend essence on gear, consumables and upgrades for this run." },
    { title: "Boss",   text: "Face the guardian of the rift and claim its Prime Essence." },
    { title: "Return", text: "Win or die, you walk back into the Hub stronger." }
  ],
  loopNote: "Run essence resets when you fall. <b>Prime Essence stays with you.</b> It is the thread that ties every run together.",

  /* ---------- Arsenal and enemies ---------- */
  arsenalHeading: "An arsenal for every way to fight",
  stats: [
    { number: "7",  label: "Weapons",            detail: "each with its own ultimate" },
    { number: "21", label: "Enemy types",        detail: "each with its own AI and posture" },
    { number: "3",  label: "Scaling attributes", detail: "Strength, Dexterity, Sorcery" }
  ],
  weapons: [
    { name: "Shortbow",      text: "Dexterity-scaled ranged play that keeps you moving." },
    { name: "Necro Staff",   text: "Raise minions from graves to fight at your side." },
    { name: "Arcane Orb",    text: "A Sorcery aura that burns and drains everything near you." },
    { name: "Warhammer",     text: "Slow, heavy, Strength-scaled blows that crush posture." },
    { name: "Combo Striker", text: "Fast melee strings for aggressive players." },
    { name: "Thornmail",     text: "Turns the damage you take back on your attackers." },
    { name: "Trap Crossbow", text: "Deploy a turret that fires bolts on its own." },
    { name: "Every drop rolls", text: "Rarity tiers, random modifiers, rings and trinkets.", highlight: true }
  ],
  bestiaryText: "Melee enemies chain combos, dodge and cancel through an attack director. Flyers break off and dive back in. A wandering loot carrier rewards the chase. Elite variants with Warding shields are next.",
  enemies: ["Skeleton warriors", "Crossbow skeletons", "Hulking skeletons", "Torch bearers", "Priests", "Apes", "Bat flyers", "Mimics", "Kamikazes", "Loot wanderers", "Rift bosses"],

  /* ---------- Roadmap ----------
     state: "done", "active" or "planned" */
  roadmap: [
    { state: "done",    label: "Playable now", title: "Core loop",
      items: ["Hub, arenas, shop and boss", "Posture and stagger combat", "7 weapons with rarity and scaling", "21 enemy types and AI directors", "Inventory, quickslots and menus"] },
    { state: "active",  label: "In progress",  title: "Vertical slice",
      items: ["Final modular protagonist", "The chessboard boss", "Elite enemies with status effects", "Trinkets and see-through silhouettes"] },
    { state: "planned", label: "Planned",      title: "Public demo",
      items: ["Mailing-list playtests", "Steam page and wishlists", "Weapon skins and the Hub shop"] },
    { state: "planned", label: "Planned",      title: "Launch",
      items: ["Full release on PC", "More biomes, bosses and weapons"] }
  ],

  /* ---------- Developer ---------- */
  developer: {
    name: "Dimitris Georgantis",
    role: "Solo developer",
    bio: "Design, programming, systems, enemy AI and integration, built in Unity 6 with URP and Cinemachine. Riftwarden is made by one person, one system at a time."
  },

  /* ---------- FAQ: add or remove questions freely ---------- */
  faq: [
    { q: "What kind of game is Riftwarden?",
      a: "A dark, top-down action roguelite with Soulslike combat. Runs are short and replayable, while fights are slow enough to read: enemies telegraph their attacks, and you win by breaking their posture and punishing the opening." },
    { q: "Is it a roguelite or a Soulslike?",
      a: "Both. Combat borrows the deliberate, punishing feel of a Soulslike. Structure borrows from roguelites: each run resets your run essence and loot, but the Prime Essence you take from bosses carries over permanently." },
    { q: "Which platforms will it be on?",
      a: "PC first. Other platforms will be considered once the PC version is complete." },
    { q: "When can I play it?",
      a: "The game is in early development and has no release date yet. Mailing-list members hear first about playtests and the public demo." },
    { q: "How hard is it?",
      a: "Challenging but fair. Every enemy attack is telegraphed, and permanent progression means each failed run still moves you forward." },
    { q: "Who is making it?",
      a: "Riftwarden is developed solo by Dimitris Georgantis in Unity 6." },
    { q: "What happens to my email address?",
      a: "It is used only to send occasional development updates and launch news. It is never sold or shared, and every email has a one-click unsubscribe link." }
  ],

  /* ---------- Signup section ---------- */
  join: {
    heading: "Be first through the rift",
    text: "Development updates, playtest invites and the demo date, straight to your inbox. Occasional emails only.",
    button: "Join the waitlist"
  },

  footer: "Riftwarden is in development."
};
