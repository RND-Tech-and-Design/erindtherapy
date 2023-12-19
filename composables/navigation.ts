import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import type { NuxtApp } from 'nuxt/app';
import { useNuxtApp, useRouter, useState } from 'nuxt/app';
import type { RouteRecordNormalized } from 'vue-router';

export type NavLink = {
    name: string;
    path: string;
    active?: boolean;
    order?: number;
    children?: NavLink[];
};

const getCapitalizedRouteName = (route: RouteRecordNormalized) => {
    const name = route.meta?.name || (route.name === 'index' ? 'home' : route.name);
    if (typeof name === 'string') {
        return name
            .toLowerCase()
            .replace(/\b\w/g, char => char.toUpperCase());
    }
    return '';
}

export const useNavigation = () => {

    // Create a state to cache the navigation links
    const navigationState = useState<{ name: string; path: string; }[]>('navigation-links', () => []);

    const generateNavigation = async (): Promise<NavLink[]> => {

        const router = useRouter()
        // Use cached navigation links if available
        if (!isEmpty(navigationState.value)) {
            return navigationState.value.map(page => ({
                ...page,
                active: router.currentRoute.value?.path === page.path
            }));
        }

        const pages = router.getRoutes()
            .map(route => ({
                path: route.path,
                active: router.currentRoute.value?.path === route.path,
                name: getCapitalizedRouteName(route),
                order: route.meta?.navOrder as number,
            }))
            .reduce((groups, page) => {
                // Skip creating URL object if the path is not present
                if (!page.path) return groups;

                const pathParts = page.path.split('/').filter(Boolean); // removes any empty strings from the array

                // Handle pages that belong to a group
                if (pathParts.length > 1) {
                    const groupName = startCase(toLower(pathParts[0]));
                    const pageName = page.name ?? startCase(toLower(pathParts[1]));

                    // Use an object as a map for efficient lookup
                    let parentPage = groups.map[groupName];

                    const lowercasedGroupName = groupName.toLowerCase();

                    // Create a new group if it doesn't exist and the name is not 'pages'
                    if (!parentPage && lowercasedGroupName !== 'pages') {
                        parentPage = {
                            name: groupName,
                            path: `/${lowercasedGroupName}`,
                            children: [],
                        };
                        groups.map[groupName] = parentPage;
                        groups.array.push(parentPage);
                    }

                    // Add the page to the group's children
                    if (parentPage) {
                        const [firstPart, secondPart] = pathParts;
                        parentPage.children = parentPage.children || [];
                        parentPage.children.push({
                            name: pageName,
                            path: `/${firstPart.toLowerCase()}/${secondPart}`,
                            order: page.order,
                        });
                    }
                } else {
                    groups.array.push({
                        name: page.name,
                        path: page.path,
                        order: page.order,
                    });
                }

                return groups;
            }, { map: {}, array: [] } as { map: Record<string, NavLink>, array: NavLink[] })
            .array;


        // Sort the pages in each group
        const sortNavLinks = (a: NavLink, b: NavLink): number => {
            const aIndex = a.order ?? Infinity;
            const bIndex = b.order ?? Infinity;
            const orderComparison = bIndex - aIndex;
            return orderComparison !== 0 ? orderComparison : a.name.localeCompare(b.name);
        }

        for (const page of pages) {
            if (page.children) {
                page.children.sort(sortNavLinks).reverse();
            }
        }

        // Sort the top-level pages
        pages.sort(sortNavLinks).reverse();

        navigationState.value = pages;
        return pages;
    };

    return { generateNavigation };
};
