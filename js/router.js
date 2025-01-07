export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.handleLocation = this.handleLocation.bind(this);
        
        window.addEventListener('popstate', this.handleLocation);
        
        document.addEventListener('click', e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });

        this.handleLocation();
    }

    async handleLocation() {
        const path = window.location.pathname;
        const route = this.routes.find(route => route.path === path) || this.routes[0];
        const view = new route.view();
        
        const content = await view.getHtml();
        document.querySelector("#app").innerHTML = content;
    }

    navigateTo(url) {
        window.history.pushState(null, null, url);
        this.handleLocation();
    }
} 