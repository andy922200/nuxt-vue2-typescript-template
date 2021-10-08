export const module1apiList = (axios:any) => ({
    foo () {
        return axios.get('foo')
    },
    async bar (id:number) {
        try {
            console.log('param id :', id)
            return axios.get(`bar/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
})
