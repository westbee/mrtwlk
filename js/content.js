export let navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Über mich",
    link: "about.html"
  },
  {
    name: "Galerie",
    link: "gallery.html"
  },
  {
    name: "Preise",
    link: "preise.html"
  },
  {
    name: "Info",
    link: "faq.html"
  },
  {
    name: "Kontakt",
    link: "contact.html"
  }
];

// index page

export let introduction = {
  welcomeHeadline: "Hallo! Ich bin Marta",
  welcomeText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  imageUrl: "img/photo.jpg",
  highlightHeadline: "Kinder, Bauch, Portrait",
  highlightText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  button: "mehr über mich"
};

export let portfolioHighlights = {
  explainer: "Portfolio Highlights",
  headline: "Photos from Shooting | Mein Studio",
  imagesUrl: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]
};

// about page

export let about = {
  quote: "Fotografieren bedeutet für mich, Momente mit der Kamera festzuhalten, die vorher unsichtbar waren. Es ist keine Kunst, zu fotografieren… es ist eher die Gabe, Menschen und Situationen mit all ihren Facetten und in ihrer Echtheit zu sehen und diese Emotionen dann für jeden sichtbar zu machen.",
  headline: "Hallo! Ich bin Marta Wilk",
  text: [
    "Ich liebe das Fotografieren, das Leben, meinen Mann, meine beiden Kinder und meine Freunde. Schön, dass du meine Seite besuchst – willkommen hier und in meiner Welt! Was du siehst, ist meine ganze Leidenschaft.",
    "Wenn du auch Teil dieser Welt sein möchtest, dann lade ich dich herzlich in mein Studioatelier in Berlin-Weißensee ein. Mein Angebot richtet sich in erster Linie an Kinder, Babys, Schwangere und Neugeborene.",
    "Eine meiner persönlichen Stärken ist Kreativität und so kommt es auch, dass ich viele Accessoires für die Shootings allein und mit viel Liebe zum Detail herstelle, in meinem Studio probiere ich aber auch individuelle Sets aus für meine Kunden. Du darfst Deine Wünsche immer gerne an mich herantragen.",
    "Vor Ort findest du auf jeden Fall ein gewisses Repertoire an Utensilien, Dekorationen und Kleidungsstücken!",
    "Selbstverständlich gibt es auch die Möglichkeit, Outdoor-Sessions mit mir zu buchen und ich schlage gerne entsprechende Orte dafür vor.",
    "Damit ich dir auch in Zukunft immer das bestmögliche Ergebnis unserer Zusammenarbeit bieten kann, entwickle ich mich stetig weiter und nehme z. B. regelmäßig an speziellen Workshops teil.",
    "Das Wichtigste zum Schluss: Was mich bei meiner Arbeit so glücklich macht, sind die zufriedenen und lächelnden Augen meiner Kunden, wenn sie ihre Bilder zum ersten Mal sehen.",
    "Aber nun mach dir selbst ein Bild davon und lass dich von meiner Seite und meinen ausgewählten Fotografien inspirieren!",
    "Möchtest du auch eine Erinnerung oder einen Moment für die Ewigkeit festhalten? – Dann melde dich bei mir. Ich freue mich auf dich!"
  ]
};

// gallery page

export let category = [
  {
    name: "Neugeborene & Babybauch",
    title: "&minus; die schönste Zeit im Leben einer Frau &minus;",
    image: "img/cat1.jpg",
    link: "neugeborene-babybauch.html"
  },
  {
    name: "Kinder & Familien",
  	title: "&minus; einzigartige Andenken für viele Jahre &minus;",
    image: "img/cat2.jpg",
	  link: "kinder-familien.html"
  },
  {
    name: "Porträtfotografie",
    title: "&minus; eine kurze Geschichte über Dich &minus;",
    image: "img/top/top 6.jpg",
    link: "portraitphotographie.html"
  }
];

// pricing page

export let pricing = [
  {
    description: [
      "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden.",
      "Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
      "Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder."
    ],
    images: [],
    packages: [
      {
        name: "BASIC",
        price: "169€",
        details: [
          "1-2 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "219€",
        details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    description: [
      "Das beste Alter für ein Baby Fotoshooting ist ab dem 6-8 Monat, ab Sitzalter.  Von Vorteil ist es, wenn Ihr Kind selbständig sitzen kann. Dadurch sind zusätzliche Positionen möglich, die es ermöglichen noch mehr schöne Bilder einzufangen.",
      "Buchen Sie ihren Termin für Kinder und Familien Fotos bei mir im Studio und auch Outdoor."
    ],
    images: [],
    packages: [
      {
        name: "BASIC",
        price: "169€",
        details: [
          "1-2 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "219€",
        details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    description: [
      "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden.",
      "Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
      "Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder."
    ],
    images: [],
    packages: [
      {
        name: "BASIC",
        price: "169€",
        details: [
          "1-2 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "219€",
        details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    description: [
      "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden.",
      "Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
      "Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder."
    ],
    images: [],
    packages: [
      {
        name: "BASIC",
        price: "169€",
        details: [
          "1-2 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "219€",
        details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    description: [
      "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden.",
      "Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
      "Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder."
    ],
    images: [],
    packages: [
      {
        name: "BASIC",
        price: "169€",
        details: [
          "1-2 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "219€",
        details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "12 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  }
];

// faq page

export let faq = [
  {
    title: "Ablauf",
    text: "Wir besprechen im Vorfeld Eure Wünsche und Vorstellungen und Ihr entscheidet Euch, welches Paket Ihr buchen möchtet. Im Anschluss an das Fotoshooting wird jedes Bild von mir individuell und professionell bearbeitet. Die Bilder werden dann in einer persönlichen Online-Galerie bereitgestellt und gedruckt im Format 13x19."
  },
  {
    title: "Pakete",
    text: "Schreibt mir einfach eine e-mail oder ruft mich an und ich stelle Euch ein individuelles Angebot zusammen."
  },
  {
    title: "Gutschein",
    text: "Sucht Ihr ein ganz besonderes und persönliches Geschenk für Eure Familie oder Freunde? Ein Gutschein für ein individuelles Fotoshooting in Berlin ist für jeden genau die richtige Geschenkidee!"
  }
];

// contact page

export let socialMedia = [
  {
    link: "mailto:marta.wilk.photo@gmail.com",
    image: "img/mail2.png"
  },
  {
    link: "https://www.facebook.com/martawilkphotography",
    image: "img/facebook-48.png"
  },
  {
    link: "https://www.instagram.com/martawilkphotography/",
    image: "img/instagram-48.png"
  }
];