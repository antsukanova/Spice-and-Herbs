window.loadScript = (
    refName,
    url,
    type,
    isBefore = false) => {
        return new Promise((resolve, reject) => {
            const ref = document.querySelector(refName);
            const script = document.createElement("script");

            script.onload = () => {
                resolve(url);
            };
            script.onerror = (err) => {
                console.log("error: " + err);
                reject(url);
            };

            if (type != null)
                script.type = type;
            ref.parentNode.insertBefore(
                script,
                isBefore ? ref : ref.nextSibling
            );
            script.src = url;
        });
};

window.beforePreload = () => {
    $("html, body").addClass("is-loading");
    $(".landing-page").removeClass("is-loaded");
    $("#preloader").removeClass("is-hidden");
};

window.routeToVue = title => {
    beforePreload();
    Promise.all([
        loadScript(
            'head script[src*="jquery.min"]',
            "./js/vue/vue.min.js",
            null,
            false
        ),
        loadScript(
            "body script",
            "./js/main_vue.js",
            "module",
            false
        )
    ]).then(
        $(`script [src*=main_react.js],
            script [src*=react-dom.production.min.js],
            script [src*=react.production.min.js]`).remove()
    );
};

window.routeToReact = title => {
    beforePreload();
    Promise.all([
        loadScript(
            'head script[src*="jquery.min"]',
            'https://unpkg.com/react@16/umd/react.production.min.js',
            null,
            false
        ),
        loadScript(
            'head script[src*="jquery.min"]',
            'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
            null,
            false
        ),
        loadScript(
            'body script[src*="main"]',
            "./js/main_react.js",
            "module",
            false)
    ]).then(
        $("script [src*=main_vue.js], script [src*=vue.min.js]").remove()
    );
};

window.preload = delay => {
    var loaded = () => {
        $("html, body").removeClass("is-loading");
        $(".landing-page").addClass("is-loaded");
        $("#preloader").addClass("is-hidden");
    }
    let p = $(".animate"), offset = 0;
    const offsetMe = () => {
        if (offset < 0) {
            offset = 600;
        }
        p.css("strokeDashoffset", offset);
        offset -= 5;

        requestAnimationFrame(offsetMe);
    }
    offsetMe();
    setTimeout(loaded, delay);

    return true;
}

function scroller(offset) {
    const percentageComplete = offset;
    const strokeDashOffsetValue = 100 - (percentageComplete * 100);
    const progressBar = document.getElementsByClassName("js-progress-bar")[0];
    progressBar.style.strokeDashoffset = strokeDashOffsetValue;
}

window.onscroll = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const limit = document.body.offsetHeight;/* - window.innerHeight;
    console.log("pageY: " + window.pageYOffset + ", scrollTop: "
        + document.documentElement.scrollTop + ", ofH: " + document.body.offsetHeight
        + ", inH: " + window.innerHeight + ", scrolled:limit = " + scrolled + ":" + limit);*/
    scroller(scrolled / limit);
}

window.initMap = () => {
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