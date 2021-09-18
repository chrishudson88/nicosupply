function myAjaxRequest(method, url, data, success, error, analyticParams) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success();
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

if (!document.referrer.includes("shop.nicosupply.eu")) {
    const availableLanguagesWithCurrencies = new Map([
        ["en", { link: "https://shop.nicosupply.eu/", ccy: -1 }],
        ["pl", { link: "https://shop.nicosupply.eu/pl/", ccy: 0 }],
        ["cz", { link: "https://shop.nicosupply.eu/cz/", ccy: 1 }],
        ["ro", { link: "https://shop.nicosupply.eu/", ccy: 2 }],
        ["hu", { link: "https://shop.nicosupply.eu/sk/", ccy: 3 }],
        ["hr", { link: "https://shop.nicosupply.eu/", ccy: 4 }],
        ["sk", { link: "https://shop.nicosupply.eu/sk/", ccy: -1 }],
        ["de", { link: "https://shop.nicosupply.eu/de/", ccy: -1 }]
    ]);
    const userLanguages = navigator.languages;
    const availableLanguages = [...availableLanguagesWithCurrencies.keys()];
    const selectedLanguageWithCountryCode = userLanguages.find(userLanguage => availableLanguages.some(language => userLanguage.toLowerCase().includes(language.toLowerCase()))) || "en";
    const selectedLanguage = availableLanguages.find(language => selectedLanguageWithCountryCode.includes(language));

    if (selectedLanguage !== "en") {
        const selectedValues = availableLanguagesWithCurrencies.get(selectedLanguage);
        const formData = new FormData();
        formData.set("session_money_select", selectedValues.ccy);
        myAjaxRequest("post", "https://shop.nicosupply.eu/shop_moneychange.php", formData, function () {
            window.location.replace(selectedValues.link);
        }, function () { });
    }
}