const addLongPressEvent = (element) => {
    const myEvent = new CustomEvent('longPress');
    let timer = 0;
    element.addEventListener('mousedown', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            element.dispatchEvent(myEvent);
        }, 1000)
        const move = () => {
            clearTimeout(timer);
        }
        const endEvent = () => {
            clearTimeout(timer);
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", endEvent)
        };
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", endEvent)
    })
}
const addSlideRightEvent = (element, distX = 100) => {
    const myEvent = new CustomEvent("slideRight");
    let startX = 0,
        moveX = 0;;
    const move = (event) => {
        moveX = startX - event.touches[0].clientX;
    }
    const endEvent = () => {
        document.removeEventListener("touchmove", move);
        element.removeEventListener("touchend", endEvent)
        if (Math.abs(moveX) > distX) 
        element.dispatchEvent(myEvent)
    }

    element.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", endEvent)
    })

}