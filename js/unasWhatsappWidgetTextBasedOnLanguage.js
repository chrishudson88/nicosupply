const selectedLanguageBasedOnURL = window.location.pathname.split('/')[1];

const whatsappTexts = new Map([
    ["pl", "Zapraszam do zadawania pytań!"],
    ["cz", "Neváhejte se na cokoli zeptat!"],
    ["de", "Fühlen Sie sich frei, Fragen zu stellen!"],
    ["sk", "Neváhajte sa opýtať na akékoľvek otázky!"]
]);

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            $target = $(mutation.target);
            if ($target.hasClass("q8c6tt-2")) {
                if (whatsappTexts.has(selectedLanguageBasedOnURL)) {
                    $(".sc-8eqc3y-0").html(whatsappTexts.get(selectedLanguageBasedOnURL));
                }
            }
        }
    });
});

var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
};

observer.observe(document.body, config);