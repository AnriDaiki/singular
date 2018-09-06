//https://jaketrent.com/post/addremove-classes-raw-javascript/
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
    }
}

//CHANGE TABS
window.changeTab = function(value , el) {
    console.log(el);

    var i,
        tabsHeader = document.getElementsByClassName("tab-item"),
        tabs = document.getElementsByClassName("tab-content-item")

    for(i=0; i<tabs.length; i++)
    {
        tabs[i].style.display = "none";
        removeClass(tabsHeader[i] , 'active');
    }

    addClass(el , 'active');
    document.getElementById("tab_" + value).style.display = "block";
};