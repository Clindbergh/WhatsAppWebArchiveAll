var sidePane = document.getElementById('pane-side');
var numArchived = 0;

// Contains all the html Elements with contact elements
var contactElements;
updateContactElements = function () {
    contactElements = sidePane.querySelectorAll(':scope > div > div > div > div');
}

createMouseEvent = function (type) {
    return new MouseEvent(type, {
        view: window,
        bubbles: true,
        cancelable: true
    });
}

createMouseOverEvent = function () {
    return createMouseEvent('mouseover');
}

createMouseDownEvent = function () {
    return createMouseEvent('mousedown');
}

archiveElement = function (contactElement) {
    var arrowButton;

    function scrollIntoView() {
        currentElement.scrollIntoView();
    }

    function setArrowButton() {
        arrowButton = hoverTrigger.querySelector(':scope > div:last-child > div:last-child > div:last-child > span:last-child > div');
    }

    function hoverContact() {
        hoverTrigger = currentElement.querySelector(':scope > div > div')
        hoverTrigger.dispatchEvent(createMouseOverEvent());
        setArrowButton();
        if (arrowButton == null) {
            hoverContact();
        }
    }

    function pressArrowDown() {
        arrowButton.dispatchEvent(createMouseDownEvent());
        arrowButton = null;
    }

    function clickArchiveButton() {
        wrapper = document.getElementsByClassName('app-wrapper-web')[0]
        var archiveButton = wrapper.querySelector(':scope > span:nth-child(4) > div > ul > li:first-child');
        if (archiveButton.querySelector(':scope > div').innerHTML.includes('Archiv')) {
            archiveButton.click()
            numArchived += 1;
            console.log('Archived: ' + numArchived);
        }
    }

    scrollIntoView();

    hoverContact();

    pressArrowDown();

    clickArchiveButton();

}

function archiveElementsWithDelay() {
    currentElement = contactElements.item(i)
    if (currentElement.isConnected) {
        archiveElement(currentElement);
        updateContactElements();
    }
    const modulo = 20;
    i = Math.min((i + 1) % modulo, contactElements.length - 1)
    console.log('i: ' + i)
    if (contactElements.length !== 0) {
        setTimeout(function () {
            archiveElementsWithDelay();
        }, 250);
    } else {
        console.log('No more!')
    }
}

updateContactElements();

var i = 0;
archiveElementsWithDelay();

