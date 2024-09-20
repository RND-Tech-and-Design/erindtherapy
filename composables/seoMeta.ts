import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const therapyTitle = "Erin Dierickx, LMFT";
export const site_name = "ErinDTherapy";
export const domain = "https://erindtherapy.com";
export const titleTail = `${site_name} | ${therapyTitle}`
export const video = 'https://player.vimeo.com/video/555906424';

export const defaultDescription = `Expert Couples Therapy, Depression, Anxiety, Intensive Marathon Therapy treatment, 
focusing on improving relationships and personal well-being, Seattle, Washington, ${therapyTitle} - Gottman Trained Level 3`;

const keywords: string[] = [
    'Couples-Therapy',
    'marriage counseling',
    'marathon therapy',
    'depression therapy',
    'anxiety therapy',
    'Gottman Trained Therapist',
];

export const generateMetaTags = () => {
    return [
        {
            hid: 'keywords',
            name: 'keywords',
            content: keywords.join(', ')
        },
    ];
}

interface MetaCacheValue {
    head: any;
    seoMeta: any;
}

let lastPath = '';

const metaCache: Record<string, MetaCacheValue> = {};
const usedPaths: Set<string> = new Set();

export const populateHeader = ({ meta, fullPath }: RouteLocationNormalizedLoaded) => {
    if (lastPath === fullPath) {
        // The path is the same as the last call, so return early
        return;
    }

    lastPath = fullPath;
    usedPaths.add(fullPath);

    if (metaCache[fullPath]) {
        // If the path is in the cache, use the cached values
        useHead(metaCache[fullPath].head);
        useSeoMeta(metaCache[fullPath].seoMeta);
        return;
    }

    // Compute the values
    const title = meta?.title ? `${meta.title} - ${titleTail}` : titleTail;
    const description = (meta?.description ? `${meta.description} - ${titleTail}` : defaultDescription)
        .replace(/(\r\n|\n|\r)|\s+/gm, " ");

    const image = `${domain}/${meta?.ogImage ?? 'og-image.png'}`;
    const tileLogo = `${domain}/${meta?.tileLogo ?? 'tile-logo.webp'}`;
    const url = `${domain}${fullPath}`;

    const head = {
        titleTemplate: title,
        htmlAttrs: { lang: 'en' },
        meta: generateMetaTags(),
        link: [{ rel: 'canonical', href: url }],
    };

    const ogVideo: { url: string; width: number; height: number; type: "video/mp4"; } = {
        url: video,
        width: 306,
        height: 545,
        type: 'video/mp4',
    };

    const seoMeta = {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        applicationName: site_name,
        author: therapyTitle,
        creator: 'Erin Dierickx',
        description,
        fbAppId: '105123268480886',
        generator: 'NuxtJS',
        mobileWebAppCapable: 'yes',
        msapplicationTileImage: tileLogo,
        ogDescription: description,
        ogImage: image,
        ogImageHeight: 630,
        ogImageSecureUrl: image,
        ogImageWidth: 1200,
        ogLocale: 'en_US',
        ogSiteName: site_name,
        ogTitle: title,
        ogType: 'website', // Assign the value 'website' to ogType
        ogUrl: url,
        ogVideoSecureUrl: video,
        ogVideoType: 'video/mp4',
        publisher: site_name,
        title,
        twitterCard: 'summary_large_image',
        twitterCreator: '@erindtherapy',
        twitterDescription: description,
        twitterImage: image,
        twitterTitle: title,
        ogVideo,
    };


    // Cache the values
    metaCache[fullPath] = { head, seoMeta };
    // Use the values
    useSeoMeta(seoMeta as any);
    useHead(head as any);

};
