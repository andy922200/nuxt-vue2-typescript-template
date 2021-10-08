<template>
    <section class="section">
        <h2 class="title is-3 has-text-grey">
            "Just start
            <b-icon
                icon="rocket"
                size="is-large"
            />"
        </h2>
        <h3 class="subtitle is-6 has-text-grey">
            Author: <a href="https://github.com/anteriovieira">
                Antério Vieira
            </a>
        </h3>
        <h3>{{ $t('hello-world') }}</h3>
        <h4> UTC Time {{ time }}</h4>
        <h5 v-for="item in timeZoneArray" :key="item.city">
            <p>City: {{ item.city }}</p>
            {{ triggerChangeToLocaleTime({
                time,
                lang:item.locale,
                timezoneOffset:item.offset,
                format:item.format
            }) }}
        </h5>
        <h3>Vuex Module inTestVar: {{ inTestVar }}</h3>
        <h2>selectedLanguage: {{ selectedLanguageModel }}</h2>
        <h4>Language Dropdown</h4>
        <b-select
            v-model="selectedLanguageModel"
        >
            <option value="en-us">
                EN-US
            </option>
            <option value="zh-tw">
                ZH-TW
            </option>
        </b-select>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs, {
    changeToLocaleTime
} from '~/plugins/dayjs'

export default Vue.extend({
    name: 'Inspire',
    async asyncData ({ app }) {
        try {
            const barRes = await app.$module1api.bar(2)
            console.log('barRes', barRes)
            return {
                time: dayjs.utc().format('YYYY-MM-DDTHH:mm:ss')
            }
        } catch (err) {
            console.log(err)
        }
    },
    data () {
        return {
            timeZoneArray: [
                {
                    city: 'New York',
                    offset: -300,
                    locale: 'en',
                    format: 'MM-DD-YYYY dddd HH:mm'
                },
                {
                    city: 'London',
                    offset: 0,
                    locale: 'en',
                    format: 'DD-MM-YYYY dddd HH:mm'
                },
                {
                    city: 'Berlin',
                    offset: 60,
                    locale: 'de',
                    format: 'DD-MM-YYYY dddd HH:mm'
                },
                {
                    city: 'Taipei',
                    offset: 480,
                    locale: 'zh-tw',
                    format: 'YYYY-MM-DD dddd HH:mm'
                },
                {
                    city: 'Tokyo',
                    offset: 540,
                    locale: 'ja',
                    format: 'YYYY-MM-DD dddd HH:mm'
                }
            ],
            time: '2020-01-01T00:00:00'
        }
    },
    computed: {
        selectedLanguageModel: {
            get () {
                return this.$store.getters.selectedLanguage
            },
            set (value:string) {
                this.$store.dispatch('selectNewDefaultLanguage', value)
                this.$i18n.locale = value
            }
        },
        inTestVar ():string {
            return this.$store.getters['test/inTestVar']
        }
    },
    methods: {
        triggerChangeToLocaleTime ({ time, lang, timezoneOffset, format }:{ time:string, lang:string, timezoneOffset:number, format:string }) {
            return changeToLocaleTime({
                time,
                lang,
                timezoneOffset,
                format
            })
        }
    }
})
</script>

<style lang="scss">
// @import '~/assets/scss/main.scss';
</style>
