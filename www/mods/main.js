head.load(
     '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/uikit/css/uikit.original.css' // don't change
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/fonts/icono.css'

    ,'//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'

    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/jquery.fullPage.css'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/jquery.fullPage.js'

    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/raphael-min.js'

    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/jvectormap/jquery-jvectormap.css'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/jvectormap/jquery-jvectormap.min.js'
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/jvectormap/jquery-jvectormap-us-lcc-en.js'

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
        $('body').fadeIn(150) //show page in a bit
        console.log('ready')
    },10)

    head.load('http:////maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')
})



fullPage = false

var solutionNav=document.getElementById('solutionNav')

function onModule(el) {
    console.log('loaded ' + el)

    if(el!='solutions') {// not solutions
        $('#footer').show()

        if(fullPage) // already shown - so css is messed up (else rewrite fullpage)
            location.reload()// needed to 'remove' pager
            bonzo(solutionNav).removeClass('uk-active')// remove highlight

    } else {
        console.log('***')
        $('#footer').hide()
    }
}

img1 = new Image() // pre load :
img1.src = '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/solutionAssets/origin-vs-ddn2.png'
