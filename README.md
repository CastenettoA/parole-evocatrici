# Summary
[Parole Evocatrici](https://www.parole-evocatrici.com) is a web application where you can play with the psycological ideas of "evocative words", an idea that tells that with you *will* and your *counscious action* your can evocate a quality rapresented by a specific word like *joy* or *courage*.

The web app is developed with the Vue 3 web framework and deployed with Netlify with automatic deploy when this repo is updated.

## How to install and launch the app locally
1. clone this repo
2. install npm dependencies and launch the vue app with:
```bash
$ npm install; npm run serve; npm run build
```

## How to force the update of the Progressive Web App
1. make a change in manifest.json or in service-wordres.js (even 1 char)
2. make sure that the browser cache expiry directive (.htaccess) is on short duration like hours...
