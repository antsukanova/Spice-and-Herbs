//https://github.com/developit/htm
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(React.createElement);

class Preloader extends React.Component {
    componentDidMount() {
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
    render() {
        return html`
            <div id="preloader">
                <div className="svg-wrapper">
                    <svg height="150" width="150" xmlns="http://www.w3.org/2000/svg">
                        <rect className="animate" height="150" width="150" />
                    </svg>
                    <div className="text">
                        <span className="logo">${this.props.title}</span>
                        <span className="framework-name">${this.props.frameworkName}</span>
                    </div>
                </div>
            </div>
        `
    }
};

export default Preloader;
// const preloader = Vue.component('preloader', {
//     props: {
//         'title': String,
//         'frameworkName': String
//     },
//     template: `
//         <div id="preloader">
//             <div class="svg-wrapper">
//                 <svg height="150" width="150" xmlns="http://www.w3.org/2000/svg">
//                     <rect class="animate" height="150" width="150" />
//                 </svg>
//                 <div class="text">
//                     <span clss="logo">{{title}}</span>
//                     <span class="framework-name">{{frameworkName}}</span>
//                 </div>
//             </div>
//         </div>
//     `,
//     mounted: () => {
//         var requestId;
//         const delay = 3000;
//         const loaded = () => {
//             $('body').removeClass('is-loading');
//             $('.landing-page').addClass('is-loaded');
//             $('#preloader').addClass('is-hidden');
//         }
//         let p = $('.animate'), offset = 0;
//         const offsetMe = () => {
//             if (offset < 0) {
//                 offset = 600;
//             }
//             p.css('strokeDashoffset', offset);
//             offset -= 5;

//             requestId = requestAnimationFrame(offsetMe);
//         }
//         offsetMe();
//         setTimeout(() => {
//             loaded();
//             cancelAnimationFrame(requestId);
//         }, delay);
//     }
// });

// export default preloader;