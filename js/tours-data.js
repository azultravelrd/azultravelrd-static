const TOURS_DATA = [
  {
    id: "tour-turquia",
    title: "Turquía con Tren Alta Velocidad",
    image: "./images/tours/tour-5.jpeg",
    badge: "¡Promo Especial!",
    dates: "20 al 29 de Marzo 2027",
    priceText: "Desde <strong>US$2,720</strong> / p/p Triple",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20la%20promoci%C3%B3n%20de%20Turqu%C3%ADa%20con%20Tren%20de%20Alta%20Velocidad%20(20-29%20Marzo%202027)"
  },
  {
    id: "tour-peru",
    title: "Perú Único",
    image: "./images/tours/tour-2.jpeg",
    dates: "Del 21 al 29 de Marzo",
    priceText: "Desde <strong>US$2,280</strong> Aéreo Incluido",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20de%20Per%C3%BA%20%C3%9Anico"
  },
  {
    id: "tour-alaska",
    title: "Alaska Impresionante",
    image: "./images/tours/tour-3.jpeg",
    dates: "Del 15 al 24 de Mayo",
    priceText: "Desde <strong>US$3,940</strong> Aéreo Incluido",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20de%20Alaska%20Impresionante"
  },
  {
    id: "tour-helsinki",
    title: "Helsinki con Auroras Boreales",
    image: "./images/tours/tour-1.jpeg",
    dates: "Del 20 al 27 de Marzo",
    priceText: "Desde <strong>US$3,500</strong> en Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20de%20Helsinki"
  },
  // 1. Primavera Asiática: Corea & Japón
  {
    id: "tour-corea-japon",
    title: "Primavera Asiática: Corea & Japón",
    image: "./images/tours/tour-4.jpeg",
    dates: "20 de Marzo al 3 de Abril 2027",
    priceText: "Desde <strong>US$7,570</strong> Aéreo Incluido (JFK)",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20la%20promoci%C3%B3n%20de%20Primavera%20Asi%C3%A1tica%3A%20Corea%20%26%20Jap%C3%B3n"
  },

  // 2. Brasil: Entre Mar & Tierra
  {
    id: "tour-brasil",
    title: "Brasil: Entre Mar & Tierra",
    image: "./images/tours/tour-16.jpeg",
    badge: "¡Crucero Sin Visado!",
    dates: "17 al 26 de Marzo 2027",
    priceText: "Desde <strong>US$2,980</strong> / p/p en Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20la%20promoci%C3%B3n%20de%20Brasil%3A%20Entre%20Mar%20%26%20Tierra"
  },

  // 3. San Valentín en el Caribe
  {
    id: "tour-san-valentin",
    title: "San Valentín en el Caribe",
    image: "./images/tours/tour-17.jpeg",
    dates: "8 al 15 de Febrero 2027",
    priceText: "Desde <strong>US$580</strong> / p/p Interior",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20San%20Valent%C3%ADn%20en%20el%20Caribe"
  },

  // 4. Corazón Argentino
  {
    id: "tour-argentina",
    title: "Corazón Argentino: B. Aires, Bariloche e Iguazú",
    image: "./images/tours/tour-18.jpeg",
    dates: "5 al 11 de Abril 2027",
    priceText: "Desde <strong>US$2,900</strong> / p/p en Triple",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20Coraz%C3%B3n%20Argentino"
  },

  // 5. Navidad a Bordo - Costa Favolosa
  {
    id: "tour-navidad-caribe",
    title: "Navidad a Bordo: El Caribe Te Espera",
    image: "./images/tours/tour-19.jpeg",
    dates: "21 de Diciembre 2026",
    priceText: "Desde <strong>US$840</strong> / p/p Interior",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20Navidad%20a%20Bordo"
  },

  // 6. Escapada Romántica en Panamá
  {
    id: "tour-panama",
    title: "Escapada Romántica en Panamá",
    image: "./images/tours/tour-11.jpeg",
    dates: "Válido hasta el 30 de Octubre 2026",
    priceText: "Desde <strong>US$855</strong> / p/p (Sin Aéreo)",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20la%20Escapada%20Rom%C3%A1ntica%20en%20Panam%C3%A1"
  },

  // 7. Fin de Año en Europa del Este
  {
    id: "tour-fin-de-ano-europa",
    title: "Fin de Año en Europa del Este",
    image: "./images/tours/tour-12.jpeg",
    dates: "29 de Diciembre 2026 al 8 de Enero 2027",
    priceText: "Desde <strong>US$4,995</strong> Aéreo Incluido",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20Fin%20de%20A%C3%B1o%20en%20Europa%20del%20Este"
  },

  // 8. Costa Rica Pura Vida
  {
    id: "tour-costa-rica",
    title: "Costa Rica Pura Vida",
    image: "./images/tours/tour-13.jpeg",
    dates: "7 al 11 de Noviembre 2026",
    priceText: "Desde <strong>US$1,555</strong> Aéreo Incluido",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20Costa%20Rica%20Pura%20Vida"
  },

  // 9. México Mágico
  {
    id: "tour-mexico-magico",
    title: "México Mágico",
    image: "./images/tours/tour-14.jpeg",
    dates: "19 al 28 de Marzo 2027",
    priceText: "Desde <strong>US$2,580</strong> Aéreo Incluido",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20M%C3%A9xico%20M%C3%A1gico"
  },

  // 10. Europa del Este (Semana Santa)
  {
    id: "tour-europa-este-ss",
    title: "Europa del Este (Francia, Alemania, Italia...)",
    image: "./images/tours/tour-15.jpeg",
    dates: "12 al 28 de Marzo 2027",
    priceText: "Desde <strong>US$4,290</strong> / p/p en Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20tour%20Europa%20del%20Este%20%28Semana%20Santa%202027%29"
  },

   // 1. MSC - Fin de Año Desde La Romana
  {
    id: "tour-msc-la-romana",
    title: "MSC Fin de Año Desde La Romana",
    image: "./images/tours/tour-6.jpeg",
    badge: "¡Fin de Año!",
    dates: "28 de Diciembre 2026 al 4 de Enero 2027",
    priceText: "Desde <strong>USD$1,136</strong> / p/p Interior Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20MSC%20Fin%20de%20A%C3%B1o%20desde%20La%20Romana"
  },

  // 2. MSC - Fin de Año Desde Miami
  {
    id: "tour-msc-miami",
    title: "MSC Fin de Año Desde Miami",
    image: "./images/tours/tour-7.jpeg",
    badge: "¡Fin de Año!",
    dates: "27 de Diciembre 2026 al 2 de Enero 2027",
    priceText: "Desde <strong>USD$1,136</strong> / p/p Interior Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20MSC%20Fin%20de%20A%C3%B1o%20desde%20Miami"
  },

  // 3. MSC - Fin de Año Desde Puerto Cañaveral
  {
    id: "tour-msc-canaveral",
    title: "MSC Fin de Año Desde Puerto Cañaveral",
    image: "./images/tours/tour-8.jpeg",
    badge: "¡Fin de Año!",
    dates: "26 de Diciembre 2026 al 2 de Enero 2027",
    priceText: "Desde <strong>USD$959</strong> / p/p Interior Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20MSC%20Fin%20de%20A%C3%B1o%20desde%20Puerto%20Ca%C3%B1averal"
  },

  // 4. MSC - Fin de Año Desde Barcelona
  {
    id: "tour-msc-barcelona",
    title: "MSC Fin de Año Desde Barcelona",
    image: "./images/tours/tour-9.jpeg",
    badge: "¡Fin de Año!",
    dates: "26 de Diciembre 2026 al 2 de Enero 2027",
    priceText: "Desde <strong>USD$975</strong> / p/p Interior Doble",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20MSC%20Fin%20de%20A%C3%B1o%20desde%20Barcelona"
  },

  // 5. MSC Seaside - Más Allá del Mar (Travel Net)
  {
    id: "tour-msc-seaside",
    title: "MSC Seaside: Más Allá del Mar",
    image: "./images/tours/tour-10.jpeg",
    dates: "22 al 26 de Febrero 2027",
    priceText: "Desde <strong>USD$525.80</strong> / p/p Cabina Interior",
    whatsappLink: "https://wa.me/18578321961?text=Hola%2C%20me%20interesa%20el%20crucero%20MSC%20Seaside%20M%C3%A1s%20All%C3%A1%20del%20Mar"
  }

];
