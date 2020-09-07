module.exports.PROTOCOL = window.location.protocol !== 'https:' ? 'http://' : 'https://'
module.exports.BASE_URL = module.exports.PROTOCOL + window.location.hostname
module.exports.MAP_URL = process.env.PUBLIC_URL + '/images/interactive-map.png'

