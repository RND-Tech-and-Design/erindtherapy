export interface TabsContent {
    tabName: string;
    heading: string;
    backgroudnColor: string;
    imageURL: string;
    imageAlt: string;
    imageStyle: string;
    paragraphs: string[];
    title: string;
    titleColor: string;
    subheading: string;
    subheadingColor: string;
    cardColor: string;
    imageColor: string;
}

export interface ResponsiveCard {
    title: string;
    titleColor: string;
    subheading: string;
    subheadingColor: string;
    cardColor: string;
    imageURL: string;
    imageAlt: string;
    imageColor: string;
    paragraphs: string[];
}

export type TabsContentArray = TabsContent[];