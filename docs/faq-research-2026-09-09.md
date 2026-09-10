# Recruiting FAQ research and implementation

Reviewed September 9, 2026. These sources inform question selection only; Olea's answers use the owner's supplied policies.

## Sources reviewed

- [Realty ONE Group recruiting FAQ](https://www.realtyonegroup.com/join): commission model, coaching, mentorship, technology, marketing, comparison with traditional brokerages, lead generation, and culture. Its benefits do not establish Olea's benefits.
- [Realty100 recruiting site](https://joinrealty100.com/): flat-fee economics, training, office meeting spaces, technology and qualified-lead tools. Do not copy its prices or free-service promises into Olea's copy.
- [Google Search documentation update](https://developers.google.com/search/updates#removing-faq-rich-result): FAQ rich results are no longer displayed. Retain accurate Schema.org FAQPage data for semantic consistency, not as a promised Google rich-result or ranking benefit.

Some other brokerage FAQ URLs were blocked or unavailable. No findings are attributed to those pages.

## Gaps addressed

Expanded six FAQs to fourteen, covering commission comparisons, optional mentorship and CRM, Cape Coral office rooms, multi-MLS access, marketing boundaries, SWFL service areas, and the moving truck. Kept private transition, bilingual service, no free/guaranteed leads, and no transaction coordinators. Replaced the unconfirmed no-lock-in claim with agreement review language.

Competitor copy is not reproduced. No unverified fees, minimum production requirements, free coaching, free MLS memberships, E&O coverage, or acceptance guarantees were added.

## Technical implementation

`src/js/faq-content.js` holds EN/ES questions and answers. Vite emits all English entries into the initial HTML and the existing FAQPage node. Language switching updates the visible questions and FAQPage together. The answers remain in native details/summary elements for keyboard access and crawlable content.

Success means helpful, accurate, accessible content and consistent metadata. Ranking improvements require measurement and are not guaranteed.
