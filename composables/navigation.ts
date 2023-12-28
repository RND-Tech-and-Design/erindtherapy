import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import { useRouter, useState } from 'nuxt/app';
import type { RouteRecordNormalized } from 'vue-router';

export type NavLink = {
    name: string;
    path: string;
    active?: boolean;
    order?: number;
    children?: NavLink[];
    noNav?: boolean;
};

const getCapitalizedRouteName = (route: RouteRecordNormalized) => {
    const name = route.meta?.title || (route.name === 'index' ? 'home' : route.name);
    return typeof name === 'string' ? name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) : '';
};
``
const getNavLink = (route: RouteRecordNormalized, currentPath: string): NavLink => {
    return {
        path: route.path,
        active: currentPath === route.path,
        name: getCapitalizedRouteName(route),
        order: route.meta?.navOrder as number,
        noNav: route.meta?.noNav as boolean ?? false
    };
};

const sortNavLinks = (a: NavLink, b: NavLink): number => {
    const aIndex = a.order ?? Infinity;
    const bIndex = b.order ?? Infinity;
    return aIndex - bIndex || a.name.localeCompare(b.name);
};

const createGroupName = (pathPart: string): string => startCase(toLower(pathPart));

const createChildPagePath = (pathParts: string[]): string => `/${pathParts.join('/').toLowerCase()}`;

const addGroupIfNotExists = (groups: Map<string, NavLink>, groupName: string, lowercasedGroupName: string) => {
    if (!groups.has(groupName)) {
        groups.set(groupName, {
            name: groupName,
            path: `/${lowercasedGroupName}`,
            children: []
        });
    }
    return groups.get(groupName);
};

const addChildPageToGroup = (parentPage: NavLink, page: NavLink, pageName: string, childPagePath: string) => {
    parentPage.children = parentPage.children || []; // Initialize parentPage.children as an empty array if it is undefined
    parentPage.children.push({ ...page, name: pageName, path: childPagePath });
};

const handleGrouping = (groups: Map<string, NavLink>, page: NavLink, pathParts: string[]) => {
    const groupName = createGroupName(pathParts[0]);
    const lowercasedGroupName = groupName.toLowerCase();

    if (lowercasedGroupName === 'pages') return;

    let parentPage = addGroupIfNotExists(groups, groupName, lowercasedGroupName);
    const childPagePath = createChildPagePath(pathParts);
    const pageName = page.name ?? createGroupName(pathParts[1]);

    addChildPageToGroup(parentPage!, page, pageName, childPagePath);
};

const groupPages = (routes: RouteRecordNormalized[], currentPath: string): NavLink[] => {
    const groups = new Map<string, NavLink>();

    routes.forEach(route => {
        const page = getNavLink(route, currentPath);
        if (!page.path) return;
        if (page.noNav) return;

        const pathParts = page.path.split('/').filter(Boolean);
        pathParts.length > 1 ? handleGrouping(groups, page, pathParts) : groups.set(page.name, page);
    });

    return Array.from(groups.values());
};



export const useNavigation = () => {
    const navigationState = useState<NavLink[]>('navigation-links', () => []);
    const router = useRouter();

    const generateNavigation = async (): Promise<NavLink[]> => {
        // If the cached navigation state is not empty, return it
        if (!isEmpty(navigationState.value)) {
            return navigationState.value.map(page => ({ ...page, active: router.currentRoute.value?.path === page.path }));
        }

        const pages = groupPages(router.getRoutes(), router.currentRoute.value?.path);

        // Sort pages and their children if any
        pages.forEach(page => {
            if (page.children) {
                page.children.sort(sortNavLinks);
            }
        });
        pages.sort(sortNavLinks);

        navigationState.value = pages;
        return pages;
    };

    return { generateNavigation };
};
