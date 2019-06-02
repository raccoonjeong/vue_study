exports.command = function(selector, value) {
    return thisclearValue(selector)
        .setValue(selector, value)
        .trigger(selector, 'keyup', 13)
}