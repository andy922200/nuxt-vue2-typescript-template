import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import 'dayjs/locale/en'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/th'

dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(timezone)
dayjs.extend(isSameOrAfter)

export const changeToLocaleTime = function ({ time, lang, timezoneOffset, format }: { time: string, lang: string, timezoneOffset: number, format: string }): string {
    return dayjs(time).add(timezoneOffset, 'minute').locale(`${lang}`).format('LL LTS')
}

export default ({ app }: { app: any }, inject: any) => {
    inject('dayjs', dayjs)
}
