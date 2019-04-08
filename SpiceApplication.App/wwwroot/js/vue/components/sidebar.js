import menuFooter from './menuFooter.js';

const sidebar = Vue.component('sidebar', {
    components: {
        'menu-footer': menuFooter
    },
    template: `
        <div class="sidebar">
            <a href="#" class="sidebar-menu fas fa-bars fa-lg"></a>
            <nav class="sidebar-nav">
                <ul>
                    <li>
                        <a class="sidebar-nav__link" href="/blazor" @click="routeTo">
                            <i class="blazor-logo"></i>Blazor
                        </a>
                    </li>
                    <li>
                        <a class="sidebar-nav__link" href="/react" @click="routeTo">
                            <i class="fab fa-react"></i>React
                        </a>
                    </li>
                    <li>
                        <a class="sidebar-nav__link" href="/vue">
                            <i class="fab fa-vuejs"></i>Vue
                        </a>
                    </li>
                </ul>
                <menu-footer></menu-footer>
            </nav>
        </div>
    `,
    methods: {
        routeTo: () => {
            beforePreload();
            setTimeout(() => {
                location.reload();
            }, 100);
        }
    }
});

export default sidebar;