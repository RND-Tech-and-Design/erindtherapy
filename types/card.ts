export interface PriceCard {
    id: number;
    title: string;
    price: string;
    duration: string;
    items: string[];
    bgClass: string;
    btnClass: string;
    hoverClass: string;
}

export interface PaymentCard {
    figureBackgroundClass: string,
    iconName: string,
    title: string,
    description: string,
    extraContentTemplates?: string[],
}
