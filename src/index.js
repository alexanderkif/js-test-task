
function importAll(r) {
    r.keys().forEach(r);
}
require.context('./', true, /\.scss$/);
importAll(require.context('./components/', true, /\.js$/));
require.context('./img/', true, /\.(png|ico)$/);
