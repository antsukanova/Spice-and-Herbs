const mapComponent = Vue.component('map-component', {
    template: `
        <div id="about" class="about-page">
            <h3>About</h3>
            <div id="map">
                <ul class="continents">
                    <li class="c1"><a href="#africa"><img src="img/map_africa.jpg" title="Africa" alt="Africa"/></a></li>
                    <li class="c2"><a href="#asia"><img src="img/map_asia.jpg" title="Asia" alt="Asia"/></a></li>
                    <li class="c3"><a href="#australia"><img src="img/map_australia.jpg" title="Australia" alt="Australia"/></a></li>
                    <li class="c4"><a href="#europe"><img src="img/map_europe.jpg" title="Europe" alt="Europe"/></a></li>
                    <li class="c5"><a href="#north-america"><img src="img/map_namerica.jpg" title="North America" alt="North America"></a></li>
                    <li class="c6"><a href="#south-america"><img src="img/map_samerica.jpg" title="South America" alt="South America"/></a></li>
                </ul>
            </div>
            <div id="about-text">
                <p>
                    In the global south or as was commonly the East, spices are indeed the soul of food. In
                    the global north or West, they evokes dreams of exotic tropical islands, exciting expeditions to the
                    sources of Spice, and the rise and fall of empires.
                </p>
                <p>
                    Columbus headed westward from Europe in 1492 to find a sea route to the so-called, &lsquo;Land of Spices&lsquo;,
                    instead he found the New World. Eight years later Vasco da Gama sailed round Africa touching Kozhikode
                    on the South West coast of India. Long before that, Arabs were trading with the then known &lsquo;�Orient&lsquo;
                    through land routes, and during the 13th century Marco Polo experienced the attraction of spices in his
                    travels.
                </p>
            </div>
        </div>
    `,
    mounted: () => {
        $("#map").CSSMap({
            "size": 960,
            "cities": true,
            "responsive": "auto",
            "fitHeight": false,
            "tapOnce": true,
            "mobileSupport": true,
            onLoad: mapObject => {
                if ($(mapObject).width() > 768 && $(mapObject).width() <= 1000)
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
});

export default mapComponent;