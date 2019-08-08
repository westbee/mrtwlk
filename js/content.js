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
  welcomeHeadline: "Hallo! Ich bin Marta,",
  welcomeText: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen!",
  imageUrl: "img/marta.jpg",
  highlightHeadline: "Berliner Fotografin | Berlin & Umgebung",
  highlightText: "Ich halte deine schönsten Momente mit meiner Kamera fest. Jedes Foto lebt durch deine Emotionen und Erinnerungen! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  button: "mehr über mich"
};

export let portfolioHighlights = {
  explainer: "Portfolio Highlights",
  headline: "Photos from Shooting | Mein Studio",
  imagesUrl: ["img/highlight/1.jpg", "img/highlight/2.jpg", "img/highlight/3.jpg", "img/highlight/4.jpg"]
};

// about page

export let about = {
  quote: "Fotografieren bedeutet für mich, Momente mit der Kamera festzuhalten, die vorher unsichtbar waren. Es ist keine Kunst, zu fotografieren… es ist eher die Gabe, Menschen und Situationen mit all ihren Facetten und in ihrer Echtheit zu sehen und diese Emotionen dann für jeden sichtbar zu machen.",
  imageUrl: ["img/about/marta_about1.jpg", "img/about/marta_about2.jpg", "img/about/marta_about3.jpg"],
  headline: "Hallo! Ich bin Marta Wilk",
  text: [
    "Ich liebe das Fotografieren, das Leben, meinen Mann, meine beiden Kinder und meine Freunde. Schön, dass du meine Seite besuchst – willkommen hier und in meiner Welt! Was du siehst, ist meine ganze Leidenschaft. Wenn du auch Teil dieser Welt sein möchtest, dann lade ich dich herzlich in mein Studioatelier in Berlin-Weißensee ein. Mein Angebot richtet sich in erster Linie an Kinder, Babys, Schwangere und Neugeborene.",
    "Eine meiner persönlichen Stärken ist Kreativität und so kommt es auch, dass ich viele Accessoires für die Shootings allein und mit viel Liebe zum Detail herstelle, in meinem Studio probiere ich aber auch individuelle Sets aus für meine Kunden. Du darfst Deine Wünsche immer gerne an mich herantragen. Vor Ort findest du auf jeden Fall ein gewisses Repertoire an Utensilien, Dekorationen und Kleidungsstücken! Selbstverständlich gibt es auch die Möglichkeit, Outdoor-Sessions mit mir zu buchen und ich schlage gerne entsprechende Orte dafür vor.",
    "<img src='img/about/break-photo.jpg'>",
    "Damit ich dir auch in Zukunft immer das bestmögliche Ergebnis unserer Zusammenarbeit bieten kann, entwickle ich mich stetig weiter und nehme z. B. regelmäßig an speziellen Workshops teil. Das Wichtigste zum Schluss: Was mich bei meiner Arbeit so glücklich macht, sind die zufriedenen und lächelnden Augen meiner Kunden, wenn sie ihre Bilder zum ersten Mal sehen. Aber nun mach dir selbst ein Bild davon und lass dich von meiner Seite und meinen ausgewählten Fotografien inspirieren!",
    "Möchtest du auch eine Erinnerung oder einen Moment für die Ewigkeit festhalten? – Dann melde dich bei mir. Ich freue mich auf dich!"
  ]
};

// gallery page

export let category = [
  {
    name: "Neugeborene & Babybauch",
    title: "&minus; die schönste Zeit im Leben einer Frau &minus;",
    image: "img/gallery/1.jpg",
    link: "neugeborene-babybauch.html",
    description: "Wenn ein neues Leben heranwächst und das in einem selbst, ist das Gefühl unvergleichlich - Stolz und Vorfreude erfüllen eine werdende Mutter und bereiten sie auf das wohl größte Abenteuer ihres Lebens vor. Das sollte in einem ganz besonderen Rahmen verewigt werden! Ist dein Neugeborenes auf der Welt und noch nicht älter als 14 Tage, dann können wir wunderschöne und einmalige Fotos von deinem Baby entstehen lassen. Ein Neugeborenen-Shooting, um den Zauber dieses neuen Lebens festzuhalten!"
  },
  {
    name: "Kinder & Familien",
  	title: "&minus; einzigartige Andenken für viele Jahre &minus;",
    image: "img/gallery/2.jpg",
	  link: "kinder-familien.html",
    description: "Erscheint ein kleiner Mensch auf Erden, ist dies der ideale Zeitpunkt, um diesen Moment einzufangen, weil Bilder einzigartige Andenken für die Zukunft sind. Egal ob klein oder groß, ob allein oder mit der ganzen Familie - in ungezwungener, lockerer Atmosphäre entstehen hier bleibende Erinnerungen für Eltern, Verwandte, Freunde und Liebende."
  },
  {
    name: "Porträtfotografie",
    title: "&minus; eine kurze Geschichte über Dich &minus;",
    image: "img/gallery/3.jpg",
    link: "portraitphotographie.html",
    description: "Die Porträt-Session erzählt eine Geschichte über dich und ich versuche die Bilder als etwas Außergewöhnliches erscheinen zu lassen. Das, was deinen Charakter und deine Persönlichkeit darstellt und hervorhebt als Geschenk an dich selbst oder als Präsent für nahestehende Personen - ich zeige dich von deiner schönsten Seite!"
  }
];

// pricing page

export let pricing = [
  {
    id: 0,
    title: "Babybauch",
    description: "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden. Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires. Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder.",
    bgImg: "img/preise/s1.jpg",
    packages: [
      {
        name: "BASIC",
        price: "199€",
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
        price: "249€",
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
    id: 1,
    title: "Kinder & Familien",
    description: "Das beste Alter für ein Baby Fotoshooting ist ab dem 6-8 Monat, ab Sitzalter.  Von Vorteil ist es, wenn Ihr Kind selbständig sitzen kann. Dadurch sind zusätzliche Positionen möglich, die es ermöglichen noch mehr schöne Bilder einzufangen. Buchen Sie ihren Termin für Kinder und Familien Fotos bei mir im Studio und auch Outdoor.",
    bgImg: "img/preise/k1.jpg",
    packages: [
      {
        name: "BASIC",
        price: "199€",
        details: [
          "7 retuschierte Bilder einschließlich 1 Familienaufnahme (digital auf USB Stick & als Abzug 13*19)",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "249€",
        details: [
          "12 retuschierte Bilder einschließlich 2 Familienaufnahmen (digital auf USB Stick & als Abzug 13*19)",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    id: 2,
    title: "Cake Smash",
    description: "Cake Smash Fotoshooting ist die neue Alternative zum Standard-Fotoshooting. Es ist auch für die Kinder ein riesen Spaß! Ein Cake-Smash-Shooting kann zum 1. Geburtstag oder auch rund um den 2. Geburtstag gebucht werden. Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires.",
    bgImg: "img/preise/c1.jpg",
    packages: [
      {
        name: "BASIC",
        price: "249€",
        details: [
          "7 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)"
        ],
        extra: "jedes weitere Bild 15€"
      }
    ]
  },
  {
    id: 3,
    title: "Neugeborene",
    description: "Nur in den ersten Tagen nach der Geburt sind diese speziellen Aufnahmen möglich. Das Shooting findet in meinem Studio statt und kann 2-4 Stunden dauern. Zwischen den einzelnen Bildern, bei denen Ihr Neugeborenes in verschiedene Positionen fotografiert wird, haben Sie noch genug Zeit zum Stillen, Wickeln und Kuscheln. Weitere Informationen und Tipps zur Vorbereitung erhalten Sie von mir bei der Buchung.",
    bgImg: "img/preise/n1.jpg",
    packages: [
      {
        name: "BASIC",
        price: "229€",
        details: [
          "1-2 Outfits",
          "versch. Outfits & Accessoires",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "5 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      },
      {
        name: "EXCLUSIVE",
        price: "299€",details: [
          "2-3 Outfits",
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "10 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 10€"
      }
    ]
  },
  {
    id: 4,
    title: "Porträt",
    description: "Die perfekte Zeit für ein Babybauch-Shooting ist ab der 30 SSW. Das Shooting findet im Studio bei mir statt oder bei schönem Wetter auch draußen. Das Fotoshooting dauert in etwa 1-2 Stunden. Ich habe einige Schwangerschaftskleider für werdende Mütter zur Auswahl sowie Accessoires. Beim Fotoshooting darf sehr gerne auch Papa mit dabei sein oder auch die größeren Geschwisterkinder.",
    bgImg: "img/preise/p1.jpg",
    packages: [
      {
        name: "BASIC",
        price: "199€",
        details: [
          "Professionelle Bearbeitung",
          "Online Galerie (zur bequemen Bilderauswahl von Zuhause aus)",
          "8 retuschierte Bilder (digital auf USB Stick & als Abzug 13*19)"
        ],
        extra: "jedes weitere Bild 15€"
      }
    ]
  }
];

// faq page

export let faq = [
  {
    imageUrl: "img/faq/faq1.jpg",
    title: "Ablauf",
    text: "Wir besprechen im Vorfeld Eure Wünsche und Vorstellungen und Ihr entscheidet Euch, welches Paket Ihr buchen möchtet. Im Anschluss an das Fotoshooting wird jedes Bild von mir individuell und professionell bearbeitet. Die Bilder werden dann in einer persönlichen Online-Galerie bereitgestellt und gedruckt im Format 13x19."
  },
  {
    imageUrl: "img/preise/paket3.jpg",
    title: "Pakete",
    text: "Schreibt mir einfach eine e-mail oder ruft mich an und ich stelle Euch ein individuelles Angebot zusammen."
  },
  {
    imageUrl: "img/faq/faq2.jpg",
    title: "Gutschein",
    text: "Sucht Ihr ein ganz besonderes und persönliches Geschenk für Eure Familie oder Freunde? Ein Gutschein für ein individuelles Fotoshooting in Berlin ist für jeden genau die richtige Geschenkidee!"
  }
];

// contact page

export let contactData = {
  text: "Wenn Du Interesse an meiner Arbeit hast oder auch weitere Informationen wünschst, nimm bitte Kontakt mit mir auf.",
  mobile: "0176 49370962",
  email: "marta.wilk.photo@gmail.com",
  address: {
    street: "An der Industriebahn 12",
    city: "13088 Berlin, Deutschland"
  }
};

export let socialMedia = [
  {
    link: "mailto:marta.wilk.photo@gmail.com",
    image: "img/social-media/mail2.png"
  },
  {
    link: "https://www.facebook.com/martawilkphotography",
    image: "img/social-media//facebook-48.png"
  },
  {
    link: "https://www.instagram.com/martawilkphotography/",
    image: "img/social-media//instagram-48.png"
  }
];