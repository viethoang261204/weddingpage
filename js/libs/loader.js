import { cache } from '../connection/cache.js';

/**
 * @param {ReturnType<typeof cache>} c
 * @returns {Promise<void>}
 */
const loadAOS = (c) => {

    const urlCss = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
    const urlJs = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';

    /**
     * @returns {Promise<void>}
     */
    const loadCss = () => c.get(urlCss).then((uri) => new Promise((res, rej) => {
        const link = document.createElement('link');
        link.onload = res;
        link.onerror = rej;

        link.rel = 'stylesheet';
        link.href = uri;
        document.head.appendChild(link);
    }));

    /**
     * @returns {Promise<void>}
     */
    const loadJs = () => c.get(urlJs).then((uri) => new Promise((res, rej) => {
        const sc = document.createElement('script');
        sc.onload = res;
        sc.onerror = rej;

        sc.src = uri;
        document.head.appendChild(sc);
    }));

    return Promise.all([loadCss(), loadJs()]).then(() => {
        if (typeof window.AOS === 'undefined') {
            throw new Error('AOS library failed to load');
        }

        window.AOS.init();
    });
};

/**
 * @param {ReturnType<typeof cache>} c
 * @returns {Promise<void>}
 */
const loadConfetti = (c) => {
    const url = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.js';

    return c.get(url).then((uri) => new Promise((res, rej) => {
        const sc = document.createElement('script');
        sc.onerror = rej;
        sc.onload = () => {
            typeof window.confetti === 'undefined' ? rej(new Error('Confetti library failed to load')) : res();
        };

        sc.src = uri;
        document.head.appendChild(sc);
    }));
};

/**
 * @param {ReturnType<typeof cache>} c
 * @returns {Promise<void>}
 */
const loadAdditionalFont = (c) => {
    // Inter and Dancing Script are already loaded in HTML head
    // Return resolved promise to maintain compatibility
    return Promise.resolve();
};

/**
 * @param {Object} [opt]
 * @param {boolean} [opt.aos=true] - Load AOS library
 * @param {boolean} [opt.confetti=true] - Load Confetti library
 * @param {boolean} [opt.additionalFont=true] - Load Additional Font
 * @returns {Promise<void>}
 */
export const loader = (opt = {}) => {
    const promises = [];
    const c = cache('libs').withForceCache();

    if (opt?.aos ?? true) {
        promises.push(loadAOS(c));
    }

    if (opt?.confetti ?? true) {
        promises.push(loadConfetti(c));
    }

    if (opt?.additionalFont ?? true) {
        promises.push(loadAdditionalFont(c));
    }

    return Promise.all(promises);
};