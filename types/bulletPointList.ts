export interface BulletPoint {
    link?: string;
    text: string;
    color?: string;
}

export interface BulletPointList {
    colNum: number;
    singleColSize: string;
    textStyle: string;
    listDiscStyle: string;
    bulletPoints: BulletPoint[];
}

