import { x, y } from "../Sphere/wireframeSphere";
import { setY, setX } from "../Sphere/wireframeSphere";
export function onUpArrowClick() {
    console.log("Up arrow clicked");
    let currentValue = y; // Assuming y is the current rotation speed
    const targetValue = 2;
    const increment = 0.1;
    const intervalTime = 100; // 100 milliseconds = 0.1 seconds
    const originalValue = y; // Store the original value to revert back to it later

    const intervalId = setInterval(() => {
        currentValue += increment;
        setY(currentValue);

        if (currentValue >= targetValue) {
            clearInterval(intervalId); // Stop the interval when target is reached
            console.log("Target value reached");

            // Start a new interval to decrease the value
            const decreaseIntervalId = setInterval(() => {
                currentValue -= increment;
                setY(currentValue);

                if (currentValue <= originalValue) {
                    clearInterval(decreaseIntervalId); // Stop the interval when original value is reached
                    console.log("Returned to original value");
                }
            }, intervalTime);
        }
    }, intervalTime);
}

export function onDownArrowClick() {
    console.log("Down arrow clicked");
    // Add your code for the down arrow click here
}

export function onLeftArrowClick() {
    console.log("Left arrow clicked");
    // Add your code for the left arrow click here
}

export function onRightArrowClick() {
    console.log("Right arrow clicked");
    // Add your code for the right arrow click here
}
