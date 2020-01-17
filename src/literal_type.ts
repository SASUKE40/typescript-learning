type EventNames = 'click' | 'mousemove' | 'scroll';
function handleEvent(ele: Element, event: EventNames) {}

handleEvent(document.getElementById('hello'), 'scroll');
handleEvent(document.getElementById('hello'), 'dbclick');
