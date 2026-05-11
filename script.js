const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const langButtons = document.querySelectorAll("[data-lang-btn]");
const year = document.querySelector("#year");
const i18nNodes = document.querySelectorAll("[data-i18n]");

const translations = {
  fi: {
    header_call: "Ota yhteytt\u00e4",
    header_menu: "Valikko",
    menu_language: "Kieli",
    nav_home: "Etusivu",
    nav_services: "Palvelut",
    nav_contact: "Yhteystiedot",
    hero_eyebrow: "Autokorjaamo Laitilassa",
    hero_title: "Autokorjaamo ja huolto.",
    hero_text: "Laitilan Motormek Oy tarjoaa huollot, diagnoosit ja korjaukset Laitilassa. Suora yhteys, selke\u00e4 palvelu ja k\u00e4yt\u00e4nn\u00f6llinen tekeminen.",
    hero_tag_1: "Diagnoosi",
    hero_tag_2: "Jarrut",
    hero_tag_3: "Alusta",
    hero_tag_4: "\u00d6ljynvaihto",
    hero_tag_5: "Moottorikorjaukset",
    hero_cta_contact: "Yhteystiedot",
    hero_cta_call: "Soita",
    hero_cta_services: "Palvelut",
    stat_1_title: "Nopea yhteys",
    stat_1_text: "Puhelin, s\u00e4hk\u00f6posti ja WhatsApp helposti n\u00e4kyviss\u00e4.",
    stat_2_title: "Paikallinen palvelu",
    stat_2_text: "Laitila ja l\u00e4hialueet. Sivusto rakennettu paikallista hakua ja yhteydenottoa varten.",
    stat_3_title: "Selke\u00e4 palvelu",
    stat_3_text: "Huollot, korjaukset ja diagnoosit ilman turhaa monimutkaisuutta.",
    hero_badge_top: "Autokorjaamo",
    info_hours_title: "Aukiolo",
    info_hours_text: "Ma-Pe 09:00-17:00",
    info_phone_title: "Puhelin",
    info_address_title: "Osoite",
    services_eyebrow: "Palvelut",
    services_title: "Autohuolto, korjaukset ja diagnoosit.",
    services_intro: "Käytännölliset huollot ja korjaukset Laitilassa, nopeasti ja selkeästi.",
    services_cta_text: "Tarvitsetko arvion tai ajan huoltoon? Ota yhteyttä suoraan.",
    service_1_title: "Diagnoosi",
    service_1_text: "Vikakoodien luku, varoitusvalojen tarkistus ja ongelmien paikannus.",
    service_2_title: "Jarruhuolto",
    service_2_text: "Jarrujen tarkistus, levyjen ja palojen vaihto sek\u00e4 turvallisuuteen liittyv\u00e4t huollot.",
    service_3_title: "Alusta",
    service_3_text: "Alustan kuluvien osien korjaukset ajomukavuuden, hallinnan ja rengaskuluman parantamiseksi.",
    service_4_title: "\u00d6ljynvaihto",
    service_4_text: "S\u00e4\u00e4nn\u00f6llinen huolto moottorin toimintavarmuuden ja pitk\u00e4ik\u00e4isyyden tueksi.",
    service_5_title: "Moottorikorjaukset",
    service_5_text: "Moottorin vikojen tarkistus, korjaukset ja toimintavarmuuden parantaminen.",
    service_6_title: "Yleiset korjaukset",
    service_6_text: "Yleiset mekaaniset korjaukset ja huoltoty\u00f6t eri automalleille.",
    contact_eyebrow: "Yhteystiedot",
    contact_title: "Puhelin, s\u00e4hk\u00f6posti ja sijainti samassa paikassa.",
    contact_hours: "Aukiolo: Ma-Pe 09:00-17:00",
    contact_map_note: "Google Maps alla.",
    contact_email: "S\u00e4hk\u00f6posti",
    contact_maps: "Google Maps",
    footer_tagline: "Autokorjaamo Laitilassa."
  },
  en: {
    header_call: "Contact us",
    header_menu: "Menu",
    menu_language: "Language",
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_eyebrow: "Car Repair In Laitila",
    hero_title: "Car service and repairs you can rely on.",
    hero_text: "Laitilan Motormek Oy provides diagnostics, maintenance, and repair work in Laitila with direct contact and clear service.",
    hero_tag_1: "Diagnostics",
    hero_tag_2: "Brakes",
    hero_tag_3: "Suspension",
    hero_tag_4: "Oil Service",
    hero_tag_5: "Engine Repairs",
    hero_cta_contact: "Contact",
    hero_cta_call: "Call",
    hero_cta_services: "Services",
    stat_1_title: "Fast contact",
    stat_1_text: "Phone, email, and WhatsApp are easy to find.",
    stat_2_title: "Local service",
    stat_2_text: "Serving Laitila and nearby areas with a site built for local search and easy contact.",
    stat_3_title: "Clear service",
    stat_3_text: "Maintenance, repairs, and diagnostics without unnecessary complexity.",
    hero_badge_top: "Car Repair",
    info_hours_title: "Hours",
    info_hours_text: "Mon-Fri 09:00-17:00",
    info_phone_title: "Phone",
    info_address_title: "Address",
    services_eyebrow: "Services",
    services_title: "Maintenance, repair, and diagnostics.",
    services_intro: "Practical vehicle maintenance and repair in Laitila, handled clearly and efficiently.",
    services_cta_text: "Need an estimate or want to book a service? Contact us directly.",
    service_1_title: "Diagnostics",
    service_1_text: "Fault code reading, warning light checks, and issue tracing.",
    service_2_title: "Brake Service",
    service_2_text: "Brake inspection, disc and pad replacement, and safety-focused service work.",
    service_3_title: "Suspension",
    service_3_text: "Repairs for worn suspension parts affecting comfort, handling, and tyre wear.",
    service_4_title: "Oil Change",
    service_4_text: "Routine service to support engine reliability and long life.",
    service_5_title: "Engine Repairs",
    service_5_text: "Engine fault checks, repair work, and service focused on reliable performance.",
    service_6_title: "General Repairs",
    service_6_text: "General mechanical repairs and maintenance for different car models.",
    contact_eyebrow: "Contact",
    contact_title: "Phone, email, and location in one place.",
    contact_hours: "Hours: Mon-Fri 09:00-17:00",
    contact_map_note: "Google Maps below.",
    contact_email: "Email",
    contact_maps: "Google Maps",
    footer_tagline: "Car repair in Laitila."
  }
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "fi";

  document.documentElement.lang = selected;
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[selected][key];
    if (value) {
      node.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langBtn === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("motormek-lang", selected);
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langBtn);
  });
});

setLanguage(window.localStorage.getItem("motormek-lang") || "fi");
