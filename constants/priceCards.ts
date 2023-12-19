
import { type PriceCard } from '~/types/card';

export const priceCards: PriceCard[] = [
    {
        id: 1,
        title: 'Phone Consultation',
        price: 'FREE',
        duration: '15-minute phone call',
        items: ['Share your story', 'Ask questions about services', 'Discover compatibility', 'Schedule intake'],
        bgClass: 'bg-primary bg-opacity-50',
        btnClass: 'mt-8 btn btn-primary',
        hoverClass: 'bg-primary'
    },
    {
        id: 2,
        title: '50 minute Session',
        price: '$175',
        duration: '50 minutes',
        items: ['Individualized services', 'Explore coping skills', 'Gain tools and resources', 'Share your story'],
        bgClass: 'bg-secondary bg-opacity-50',
        btnClass: 'mt-8 btn btn-secondary',
        hoverClass: 'bg-secondary'
    },
    {
        id: 3,
        title: '90 minute Session',
        price: '$250',
        duration: '90 minutes',
        items: ['Assess relationship strengths', 'Explore communication skills', 'Learn to manage conflict', 'Gain tools and resources'],
        bgClass: 'bg-accent bg-opacity-50',
        btnClass: 'mt-8 btn btn-accent',
        hoverClass: 'bg-accent'
    }
];

