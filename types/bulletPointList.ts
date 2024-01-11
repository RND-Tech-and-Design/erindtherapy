export interface BulletPoint {
    link?: string;
    text: string;
    color?: string;
}

export interface BulletPointList {
    columnBreakIndex: number;
    textStyle: string;
    listDiscStyle: string;
    bulletPoints: BulletPoint[];
}