// middleware/redirects.js

export default defineNuxtRouteMiddleware((to) => {
    // Initialize the redirects map once for constant-time lookup
    const redirects = new Map([


        //PAGES
        ['/media/', '/about'],
        ['/rates-and-insurance/', '/ratesAndInsurance'],
        ['/couples-therapy/', '/services/couplesTherapy'],
        ['/couples-therapy-bellevue/', '/services/bellevueCouplesTherapy'],
        ['/couples-therapy-renton/', '/services/rentonCouplesTherapy'],
        ['/couples-therapy-seattle/', '/services/seattleCouplesTherapy'],
        ['/marathon-therapy/', '/services/marathonCouplesTherapy'],
        ['/marathon-couples-therapy-seattle/', '/services/seattleMarathonCouplesTherapy'],
        ['/marathon-couples-therapy-renton/', '/services/rentonMarathonCouplesTherapy'], // Confirm this mapping
        ['/therapy-services-seattle/', '/services/individualTherapySeattle'],
        ['/therapy-services-bellevue-washington/', '/services/individualTherapyBellevue'],
        ['/therapy-services-rainier-beach/', '/services/individualTherapy'],
        ['/about/', '/about'],
        ['/contact/', '/contact'],
        ['/faq/', '/policies'], 


        // BLOG
        ['/2021/07/12/a-little-play-goes-a-long-way/', '/blog/a-little-play-goes-a-long-way'],
        ['/2022/02/04/bids-for-connection/', '/blog/bids-for-connection'],
        ['/2023/07/13/break-the-cycle-of-conflict/', '/blog/break-the-cycle-of-conflict'],
        ['/2021/08/01/can-trauma-be-cured/', '/blog/can-trauma-be-cured'],
        ['/2021/09/16/connecting-through-continual-conflict/', '/blog/connecting-through-continual-conflict'],
        ['/2022/08/25/emotions-as-messengers/', '/blog/emotions-as-messengers'],
        ['/2022/07/21/feeling-flooded/', '/blog/feeling-flooded'],
        ['/2022/10/24/find-a-therapist-for-you/', '/blog/find-a-therapist-for-you'],
        ['/2021/09/07/fixing-the-need-to-fix/', '/blog/fixing-the-need-to-fix'],
        ['/2021/09/10/how-humor-helps-with-conflict/', '/blog/how-humor-helps-with-conflict'],
        ['/2023/04/25/how-to-fight-fair/', '/blog/how-to-fight-fair'],
        ['/2023/02/17/how-to-handle-daily-doses-of-stress/', '/blog/how-to-handle-daily-doses-of-stress'],
        ['/2022/01/11/perfectionism-finding-the-in-between/', '/blog/perfectionism-finding-the-in-between'],
        ['/2023/04/18/rituals-of-connection/', '/blog/rituals-of-connection'],
        ['/2022/08/25/the-body-and-emotions/', '/blog/the-body-and-emotions'],
        ['/2022/09/22/5-love-languages/', '/blog/the-ways-we-love'],
        ['/2023/05/22/what-is-couples-therapy/', '/blog/what-is-couples-therapy'],
        ['/2021/07/26/what-is-self-regulation-and-why-do-it/', '/blog/what-is-self-regulation-and-why-do-it'],
        ['/2022/07/27/what-to-do-when-flooded/', '/blog/what-to-do-when-flooded'],
        ['/2021/07/15/when-is-it-time-for-therapy/', '/blog/when-is-it-time-for-therapy'],
        ['/2021/07/28/why-couples-therapy-is-underrated/', '/blog/why-couples-therapy-is-underrated'],
        ['/blog/5-love-languages', '/blog/the-ways-we-love'],
    ]);

    const redirect = redirects.get(to.path);

    if (redirect) {
        return navigateTo(redirect, { redirectCode: 301 });
    }
});
