document.addEventListener('alpine:init', () => {
    Alpine.data('globalHorizontalIrradiance', () => ({
        ghi: '',
        results: '',

        init() {

        },

        change() {
            axios.post('/api/ghi', {
                ghi: this.ghi
            }).then(ghiResults => {
                this.results = ghiResults.data.ghi;
            })
        }
    }))
})