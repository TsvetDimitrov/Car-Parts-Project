function addFocusClass(e){
    const el = e.path[1];
    el.classList.add('focused');
    return el;
}

function removeFocusClass(e){
    if(!e.target.value){
        const el = e.path[1];
        el.classList.remove('focused');
        return el;
    }
}


module.exports = {removeFocusClass, addFocusClass}