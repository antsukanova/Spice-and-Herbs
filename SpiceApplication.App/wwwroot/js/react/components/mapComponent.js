import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

class MapComponent extends React.Component {
    componentDidMount() {
     $("#map").CSSMap({
        "size": 960,
        "cities": true,
        "responsive": "auto",
        "fitHeight": false,
        "tapOnce": true,
        "mobileSupport": true, 
        onLoad: mapObject => {
            if ($(mapObject).width() > 768 && $(mapObject).width() <= 1200)
                $(mapObject)
                    .removeClass("cssmap-960")
                    .addClass("cssmap-650");
            else if ($(mapObject).width() > 600 && $(mapObject).width() <= 768)
                $(mapObject)
                    .removeClass("cssmap-750")
                    .addClass("cssmap-540");
            }
        });
    }

    render() {
        return html`
            <div id="about" className="about-page">
                <h3>About</h3>
                <div id="map">
                    <ul className="continents">
                        <li className="c1"><a href="#africa">Africa</a></li>
                        <li className="c2"><a href="#asia">Asia</a></li>
                        <li className="c3"><a href="#australia">Australia</a></li>
                        <li className="c4"><a href="#europe">Europe</a></li>
                        <li className="c5"><a href="#north-america">North America</a></li>
                        <li className="c6"><a href="#south-america">South America</a></li>
                    </ul>
                </div>
                <div id="about-text">
                    <p>
                        In the global south or as was commonly the East, spices are indeed the soul of food. In
                        the global north or West, they evokes dreams of exotic tropical islands, exciting expeditions to the
                        sources of Spice, and the rise and fall of empires.
                    </p>
                    <p>
                        Columbus headed westward from Europe in 1492 to find a sea route to the so-called, &lsquo;˜Land of Spices&lsquo;,
                        instead he found the New World. Eight years later Vasco da Gama sailed round Africa touching Kozhikode
                        on the South West coast of India. Long before that, Arabs were trading with the then known &sbquo;Orient &rsquo;
                        through land routes, and during the 13th century Marco Polo experienced the attraction of spices in his
                        travels.
                    </p>
                </div>
            </div>
        `
    }
};

export default MapComponent;