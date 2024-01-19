export interface TabContent {
    tabName: string,
    heading: string,
    backgroudnColor: string,
    imageURL: string,
    imageAlt: string,
    imageStyle: string,
    paragraphs: string[]
}


export type TabsContentArray = TabContent[];