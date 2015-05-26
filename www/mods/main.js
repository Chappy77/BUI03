head.load(
    'CDN/uikit/css/uikit.original.css' // don't change

    ,'//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'
    ,'CDN/js/jquery.fullPage.css'
    ,'CDN/js/jquery.fullPage.js'

    ,'CDN/js/raphael-min.js'

    ,'CDN/jvectormap/jquery-jvectormap.css'
    ,'CDN/jvectormap/jquery-jvectormap.min.js'
    ,'CDN/jvectormap/jquery-jvectormap-us-lcc-en.js'

    //Mod lib
    ,'CDN/fonts/lato/Lato-Regular.css'
    ,'CDN/js/bonzo.js'
    ,'CDN/js/signals.min.js'
    ,'CDN/style.css' // changes here
    ,'CDN/js/mod.js'
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
    },10)
})

fullPage = false

var solutionNav=document.getElementById('solutionNav')

function onModule(el) {
    console.log('loaded ' + el)

    if(el!='solutions') {// not product
        if(fullPage) // already shown - so css is messed up (else rewrite fullpage)
            location.reload()// needed to 'remove' pager

        bonzo(solutionNav).removeClass('uk-active')// remove highlight
    }
}
