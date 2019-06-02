exports.command = function(selector, event, keycode) {
    return this.execute(function(selector, event, keycode) {
        var e = document.createEvent('HTMLEvents')
        e.initEvent(event, true, true)
        if (keyCode) {
            e.keyCode = keyCode
        }
        document.querySelector(selector).dispatchEvent(e)
    }, [selector, event, keyCode])
}