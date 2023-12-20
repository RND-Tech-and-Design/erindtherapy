export interface Quote {
    quote: string;
    author: string;
    handle: string;
    quoteType: QuoteType;
}


export enum QuoteType {
    marriageCounseling = "marriageCounseling",
    individualCounseling = "individualCounseling",
    psychology = "psychology",

}