import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

class Scrollbar extends React.Component {
    render() {
        return html`
            <div className="scrollbar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                    <circle cx="16" cy="16" r="15.9155" className="progress-bar__background" />
                    <circle cx="16" cy="16" r="15.9155" className="progress-bar__progress js-progress-bar" />
                </svg>
                <a href="#about"><span className="mouse-scroll"></span></a>
            </div>
        `
    }
};

export default Scrollbar;