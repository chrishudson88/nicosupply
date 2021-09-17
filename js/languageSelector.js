if (!document.referrer.includes("nicosupply.eu")) {
    const availableLanguagesWithLinks = new Map([
        ["en", "https://nicosupply.eu/"],
        ["hu", "https://shop.nicosupply.eu/sk/"],
        ["sk", "https://shop.nicosupply.eu/sk/"],
        ["cz", "https://shop.nicosupply.eu/cz/"],
        ["pl", "https://shop.nicosupply.eu/pl/"],
        ["de", "https://shop.nicosupply.eu/de/"]
    ]);
    let userLanguages = navigator.languages;
    const availableLanguages = [...availableLanguagesWithLinks.keys()];
    let selectedLanguageWithCountry = userLanguages.find(userLanguage => availableLanguages.some(language => userLanguage.toLowerCase().includes(language.toLowerCase()))) || "en";
    const selectedLanguage = availableLanguages.find(a => selectedLanguageWithCountry.includes(a));
    if (selectedLanguage !== "en") {
        const redirectLink = availableLanguagesWithLinks.get(selectedLanguage);
        window.location.replace(redirectLink);
    }
}