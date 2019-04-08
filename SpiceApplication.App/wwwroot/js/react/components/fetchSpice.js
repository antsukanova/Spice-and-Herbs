import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

class FetchSpice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spices: null};
    }

    fetchData() {
        fetch("api/spices",
                {
                    method: "GET"
                })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    spices: data
                });
            }).catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return html`
            <div className="spices-page">
                <h3>Choose your spice for today</h3>
                <div className="spice-items">
                    ${ this.state.spices == null
                        ? html`
                            <p>
                                <em>Loading...</em>
                            </p>`
                        : this.state.spices.map((spice, index) => html`
                            <figure key=${index}>
                                <${SpiceComponent} imageUrl=${spice.imageUrl.trim()}/>
                                <figcaption>
                                    <div><h2>${spice.title}</h2></div>
                                    <div><p>${spice.description}</p></div>
                                </figcaption> 
                                <a href="/react"></a>
                            </figure>`)
                    }
                </div>
            </div>
        `
    }
};

class SpiceComponent extends React.Component {
    render() {
        return html`
            <>
                <img src=${this.props.imageUrl}>
            </>
        `
    }
};

export default FetchSpice;