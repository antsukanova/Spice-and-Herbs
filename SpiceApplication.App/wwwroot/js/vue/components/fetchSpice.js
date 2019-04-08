const fetchSpice = Vue.component('fetch-spice', {
    data () {
        return {
            loading: false,
            spices: null
        }
    },
    template: `
        <div class="spices-page">
            <h3>Choose your spice for today</h3>
            <div class="spice-items">
                <p v-if="loading">
                    <em>Loading...</em>
                </p>
                <template v-for="spice in spices">
                    <figure>
                        <img :src="spice.imageUrl" alt="">
                        <figcaption> 
                            <div><h2>{{spice.title}}</h2></div>
                            <div><p>{{spice.description}}</p></div>
                        </figcaption> 
                        <a href="/vue"></a>
                    </figure> 
                </template>
            </div>
        </div>
    `,
    methods: {
        fetchData () {
            this.loading = true;
            fetch("api/spices",
                {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => {
                    this.loading = false;
                    this.spices = data;
                }).catch(error => {
                    console.log(error);
                });
        }
    },
    created () {
        this.fetchData();
    }
});

export default fetchSpice;