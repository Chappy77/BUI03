head.load(
    '//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/uikit/css/uikit.original.css' // don't change

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
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/style.css' // changes here
    ,'//cdn.rawgit.com/Chappy77/BUI03/master/www/CDN/js/mod.js'
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
        document.body.style.display = 'block' //show page in a bit
        console.log('ready')
    },150)
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
