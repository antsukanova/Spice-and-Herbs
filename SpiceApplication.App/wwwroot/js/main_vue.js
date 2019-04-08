import preloader from './vue/components/preloader.js';
import sidebar from './vue/components/sidebar.js';
import scrollbar from './vue/components/scrollbar.js';
import mapComponent from './vue/components/mapComponent.js';
import fetchSpice from './vue/components/fetchSpice.js';

const title = $('title').text();

const renderVue = () => {
    new Vue({
        el: '#app-vue',
        components: {
            'preloader': preloader,
            'sidebar': sidebar,
            'scrollbar': scrollbar,
            'map-component': mapComponent,
            'fetch-spice': fetchSpice
        },
        template: `
        <div>
            <preloader title="${title}" frameworkName="Vue"></preloader>
            <sidebar></sidebar>
            <scrollbar></scrollbar>
            <div class="grid-container">
                <div class="landing-page">
                    <div class="landing-page__intro">
                        <div class="landing-logo"></div>
                    </div>
                </div>
                <map-component></map-component>
                <fetch-spice></fetch-spice>
            </div>
        </div>
    `
    });
};

const waitFor = conditionFunction => {
    const poll = resolve => {
        if (conditionFunction())
            resolve();
        else
            setTimeout(_ => poll(resolve), 100);
    }
    return new Promise(poll);
};

waitFor(_ => typeof Vue !== "undefined")
    .then(_ => renderVue());