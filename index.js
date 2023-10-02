const fs = require('fs');
const axios = require('axios');
const toCsv = require('objects-to-csv');

const urls = fs.readFileSync('./urls.txt', 'utf8').split('\n');
const API_KEY = 'AIzaSyBg__K81r_RFKsunybKzwbkYGf7Ff606XQ';
const devices = ['desktop', 'mobile'];
let data = [];
let promises = [];

urls.map(function (url) {
    devices.map(function (device) {
        const actualURL = url + '&fields=lighthouseResult%2Fcategories%2F*%2Fscore&prettyPrint=false&strategy=' + device + '&category=performance&category=pwa&category=best-practices&category=accessibility&category=seo';
        const psi = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${actualURL}&key=${API_KEY}`;
        promises.push(axios.get(psi))
    });
});

axios.all(promises).then(function (results) {
    results.map(function (res) {

        const url = new URL(res.config.url);
        const searchParams = new URLSearchParams(url.search);
        const actualUrl = searchParams.get('url');
        const device = searchParams.get('strategy');

        // categories
        try {
            const { categories } = res.data.lighthouseResult;

            data.push({
                'URL': actualUrl + '[' + device + ']',
                'Performance Score': Math.ceil(categories.performance.score * 100),
                'Accessibility Score': Math.ceil(categories.accessibility.score * 100),
                'Best Practices Score': Math.ceil(categories['best-practices'].score * 100),
                'SEO Score': Math.ceil(categories.seo.score * 100),
                'PWA[Progressive Web App] Score': Math.ceil(categories.pwa.score * 100)
            });

        }
        catch (e) {
            console.log(e);
        }
    })

    const csv = new toCsv(data)
    csv.toDisk('./domain-insights.csv')
});