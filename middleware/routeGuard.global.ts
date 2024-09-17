// Initialize the redirects map once for constant-time lookup
const redirects = new Map<string, string>([
    ['/contact-me', '/contact'],
    ['/blog/5-love-languages', '/blog/the-ways-we-love'],
    ['/blue-tshirt-with-stripes', '/product'],
]);

export default defineNuxtRouteMiddleware((to) => {
    const redirect = redirects.get(to.path);

    if (redirect) {
        return navigateTo(redirect);
    }
});
