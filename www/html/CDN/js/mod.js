
// by Vic
// License under http://creativecommons.org/licenses/by/4.0

var Mod = (function () {
    function Mod() {  }

    //optionaly you can listen to add/remove events
    Mod.loadedSig = new signals.Signal()

    Mod.loadIn = function (par_id,ht) {
        var par = document.getElementById(par_id)
        var rq = new XMLHttpRequest()

        rq.onload = function () {
            par.insertAdjacentHTML( 'afterend', rq.response )
            console.log(rq.response)
        } // on load

        rq.open('get', 'mods/' + ht + '.html')
        rq.send()
    }

    Mod.kontainer = document.getElementById('kontainer')

    Mod.load =  function () {
        var req = new XMLHttpRequest()
        var ht = Mod.getHash()
        if(ht.length<3)
            return;
        req.onload = function () {
            Mod.remove()

            Mod.kontainer.innerHTML += req.response

            var x = Mod.kontainer.getElementsByTagName('script')
            for(var i=0;i<x.length;i++)  {
                console.log('mod script found')
                eval(x[i].text);
            }

             Mod.loadedSig.dispatch(ht)
        } // on load

        req.open('get', 'mods/' + ht + '.html')
        req.send()
    }

    Mod.remove =  function(){
        var elList = Mod.kontainer.children
        while (elList.length > 0) {
            //console.log('mod removed')
            Mod.kontainer.removeChild(Mod.kontainer.lastChild)
            elList = Mod.kontainer.children
        }
    }

    Mod.init = function () {
        console.log('Mod v18.5.15 onHash()')
        window.onhashchange = function (e) {
            Mod.load(Mod.getHash())
            return true
        }.bind(this)
    }

    Mod.getHash =  function () {
        return (window.location.hash.substr(1))
    }

    Mod.setHash = function (v) {
        window.location.hash = v
    }

    Mod.onClick =  function (id, func) {
        try  {
            var but = document.getElementById(id)
            but.addEventListener('click', function (evt) {
                evt.preventDefault()
                func(id)
            })
        } catch (e) {
            console.log(id + ' not found')
        }
    }

    Mod.init()

    return Mod
})()


function slider(show) {
    var sN=document.getElementById('slideNav')
    var m= document.getElementById('main')

    if(show) {
        bonzo(m).css({
            left:'10rem'
            ,'min-width':null
        })
        bonzo(sN).css({
            left:0
        })

    } else { //hide
        bonzo(m).css({
            left:0
            ,'min-width': '100%'
        })
        bonzo(sN).css({
            left: '-10rem'
        })
    }

}//()
