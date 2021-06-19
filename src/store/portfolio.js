export default {
    state: {
        websites: [],
    },
    mutations: {
        addSite(state, url) {
            state.websites.push(url);
        },
    },
};
