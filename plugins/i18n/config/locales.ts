interface I18nLanguage {
    param: string;
    title: string;
}

export enum Locales {
    enUs = 'en-us',
    zhTw = 'zh-tw'
}

export const LayoutLanguages: Array<I18nLanguage> = [
    {
        param: Locales.enUs,
        title: 'English'
    },
    {
        param: Locales.zhTw,
        title: '繁體中文'
    }
]