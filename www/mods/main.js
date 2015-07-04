
head.load(
    '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/uikit/css/uikit.original.css' // don't change
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/fonts/icono.css'


    //Mod lib
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/fonts/lato/Lato-Regular.css'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/bonzo.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/signals.min.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/mod.js'
    ,'CDN/style.css' // changes here
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
