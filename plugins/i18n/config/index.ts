import enUs from '../en-us.json'
import zhTw from '../zh-tw.json'
import {
    Locales
} from './locales'

export const messages = {
    [Locales.enUs]: enUs,
    [Locales.zhTw]: zhTw
}

export const defaultLocale = Locales.enUs
