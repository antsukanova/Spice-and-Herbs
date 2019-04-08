import htm from 'https://unpkg.com/htm?module';
import MenuFooter from './menufooter.js';

const html = htm.bind(React.createElement);

class Sidebar extends React.Component {
    routeTo() {
        beforePreload();
        setTimeout(() => {
            location.reload();
        }, 100);
    }

    render() {
        return html`
            <div className="sidebar">
                <a href="#" className="sidebar-menu fas fa-bars fa-lg"></a>
                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <a className="sidebar-nav__link" href="/blazor" onClick=${this.routeTo}>
                                <i className="blazor-logo"></i>Blazor
                            </a>
                        </li>
                        <li>
                            <a className="sidebar-nav__link" href="/react">
                                <i className="fab fa-react"></i>React
                            </a>
                        </li>
                        <li>
                            <a className="sidebar-nav__link" href="/vue" onClick=${this.routeTo}>
                                <i className="fab fa-vuejs"></i>Vue
                            </a>
                        </li>
                    </ul>
                    <${MenuFooter}/>
                </nav>
            </div>
        `
    }
};

export default Sidebar;