import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

class MenuFooter extends React.Component {
    render() {
        return html`
            <div className="footer">
                <p>2019 Spice&Herbs, <br /> All Rights Reserved.</p>
            </div>
        `
    }
};

export default MenuFooter;