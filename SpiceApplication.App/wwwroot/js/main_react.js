import htm from 'https://unpkg.com/htm?module';
import Preloader from './react/components/preloader.js';
import Sidebar from './react/components/sidebar.js';
import Scrollbar from './react/components/scrollbar.js';
import MapComponent from './react/components/mapcomponent.js';
import FetchSpice from './react/components/fetchspice.js';

const html = htm.bind(React.createElement);

const renderReact = () => {
    const title = $('title').text();
    ReactDOM.render(html`
            <div>
                <${Preloader} title=${title} frameworkName='React'/>
                <${Sidebar}/>
                <${Scrollbar}/>
                <div className="grid-container">
                    <div className="landing-page">
                        <div className="landing-page__intro">
                            <div className="landing-logo"></div>
                        </div>
                    </div>
                    <${MapComponent}/>
                    <${FetchSpice}/>
                </div>
            </div>
        `,
        document.getElementById('app-react')
    );
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

waitFor(_ => typeof React !== "undefined")
    .then(waitFor(_ => typeof ReactDOM !== "undefined"))
    .then(_ => renderReact());