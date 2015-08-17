
head.load(
    '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/uikit/css/uikit.original.css' // don't change
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/fonts/icono.css'


    //Mod lib
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/fonts/lato/Lato-Regular.css'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/bonzo.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/signals.min.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/mod.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/raphael-min.js'
    ,'CDN/style.css' // changes here

    //jvectormap
    ,'//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'
    ,'CDN/jvectormap/jquery-jvectormap.css'
    ,'CDN/jvectormap/jquery-jvectormap.min.js'
    ,'CDN/jvectormap/jquery-jvectormap-us-lcc-en.js'
    ,'CDN/jvectormap/jquery-jvectormap-world-mill-en.js' // changes here

    //Backendless
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/app.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/libs/backendless.js'

)

head.ready(function() {

    var hash= Mod.getHash()
    console.log(hash.length)

    if(hash.length>2)
        Mod.load()
    else
        Mod.setHash('solutions')// home page

    Mod.loadedSig.add(onModule)

    setTimeout(function() {
        document.body.style.display = ''
        console.log('ready')
    },10)

    head.load('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')
})


var solutionNav=document.getElementById('solutionNav')

function onModule(el) {
    console.log('loaded ' + el)

    if(el!='solutions') // not solutions
        bonzo(solutionNav).removeClass('uk-active')// remove highlight
}

img1 = new Image() // pre load :
img1.src = '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/solutionAssets/origin-vs-ddn.png'
