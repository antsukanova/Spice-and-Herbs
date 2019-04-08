const preloader = Vue.component('preloader', {
    props: {
        'title': String,
        'frameworkName': String
    },
    template: `
        <div id="preloader">
            <div class="svg-wrapper">
                <svg height="150" width="150" xmlns="http://www.w3.org/2000/svg">
                    <rect class="animate" height="150" width="150" />
                </svg>
                <div class="text">
                    <span clss="logo">{{title}}</span>
                    <span class="framework-name">{{frameworkName}}</span>
                </div>
            </div>
        </div>
    `,
    mounted: () => {
        var requestId;
        const delay = 3000;
        const loaded = () => {
            $('html, body').removeClass('is-loading');
            $('.landing-page').addClass('is-loaded');
            $('#preloader').addClass('is-hidden');
        }
        let p = $('.animate'), offset = 0;
        const offsetMe = () => {
            if (offset < 0) {
                offset = 600;
            }
            p.css('strokeDashoffset', offset);
            offset -= 5;

            requestId = requestAnimationFrame(offsetMe);
        }
        offsetMe();
        setTimeout(() => {
            loaded();
            cancelAnimationFrame(requestId);
        }, delay);
    }
});

export default preloader;