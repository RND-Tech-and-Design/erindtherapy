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

export function trimTextToCharacterLengthOrNearestPeriod(text: string, charCount: number = 150): string {
    // Return the original text if it's shorter than the character limit
    if (text.length <= charCount) {
        return text;
    }

    // Trim the text to the desired length
    let trimmedText = text.slice(0, charCount);

    // Look for the nearest period within the last 20 characters of the trimmed text
    const lastPeriodIndex = trimmedText.lastIndexOf('.', charCount);

    // If a period is found, trim up to that period
    if (lastPeriodIndex !== -1 && lastPeriodIndex >= charCount - 20) {
        trimmedText = trimmedText.slice(0, lastPeriodIndex + 1);
    }

    // Return the final trimmed text with ellipsis if it was cut off
    return trimmedText.trim() + '...';
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