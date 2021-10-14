const baseurl = "https://api.fbi.gov/wanted/v1/list"

Vue.createApp({
    data() {
        return {
            currentPage : 1,
            items: [],
            errormessage: null,
            title: null,
            detail: null
        }
    },
    created() {
        this.getItems()
    },
    methods: {
        async getItems() {
            try {
                const response = await axios.get(baseurl + "?page=" + this.currentPage)
                this.items = await response.data.items
            } catch (ex) {
                this.errormessage = ex.message
            }
        },
        getDetails(title) {
            this.detail = this.items.find(item => item.title == title)
        },
        previous() {
            this.currentPage--,
            this.getItems()
        },
        next() {
            this.currentPage++
            this.getItems()
        }
    }
}).mount("#app")