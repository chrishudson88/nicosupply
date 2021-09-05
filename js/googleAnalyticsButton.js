document.querySelectorAll(".gtag-button").forEach(elem => elem.addEventListener("click", function (e) {
    const button = e.target;
    const event = button.dataset.event;
    const eventCategory = button.dataset.eventCategory;
    gtag("event", event, { 'event_category': eventCategory, 'event_label': "landing_area", 'non_interaction': false });
}));