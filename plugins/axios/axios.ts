import {
    Plugin
} from '@nuxt/types'
import {
    NuxtAxiosInstance
} from '@nuxtjs/axios'
import {
    module1apiList
} from '~/utils/api/module1'

const coreAxios: Plugin = ({ $axios }: { $axios: NuxtAxiosInstance }, inject) => {
    $axios.onRequest((config: any) => {
        return config
    })

    $axios.onResponse((response: Record<string, any>) => {
        if (response.status === 200 && response.data.success) {
            return response.data.data
        }
    })

    const module1api = module1apiList($axios)
    inject('module1api', module1api)
}

export default coreAxios
