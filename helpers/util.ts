export function extractTextWithoutAnchors(html:string) {
    if (typeof window === 'undefined') {
        // In SSR, fallback to simple regex-based approach
        return html.replace(/<a\b[^>]*>(.*?)<\/a>/gi, '').replace(/<\/?[^>]+(>|$)/g, '');
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Remove all anchor tags and their content
    tempDiv.querySelectorAll('a').forEach(anchor => anchor.remove());

    return tempDiv.textContent || tempDiv.innerText || '';
}

/**
 * Function to transform and clean up content by:
 * - Removing the entire anchor tag for the contact page.
 * - Converting internal blog post links to internal Nuxt routes.
 * @param {string} content - The HTML content of the blog post.
 * @returns {string} - The transformed and cleaned HTML content.
 */
export function transformLinks(content: string) {
    const domain = 'www.erindtherapy.com';

    // Remove the entire anchor tag for the contact page
    content = content.replace(new RegExp(`<a\\s+[^>]*href=["']https?://${domain}/contact/["'][^>]*>.*?</a>`, 'gi'), '');

    // Convert internal blog post links to internal Nuxt routes
    const blogLinkRegex = new RegExp(`https?://${domain}/\\d{4}/\\d{2}/\\d{2}/([^/]+)/`, 'gi');

    return content.replace(blogLinkRegex, (match, slug) => {
        return `/blog/${slug}`;
    });
}