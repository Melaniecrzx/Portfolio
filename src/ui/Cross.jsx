export default function Cross({ left, right, top, bottom, }) {
    const style = {
        transform: right ? 'translate(50%, -50%)' : 'translate(-50%, -50%)'
    };

    if (left) style.left = left;
    if (right) style.right = right;
    if (top) style.top = top;
    if (bottom) style.bottom = bottom;


    return (
        <div className="absolute w-3 h-3" style={style}>
            <div 
                className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-dark dark:bg-light"
            ></div>
            <div 
                className="absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 bg-dark dark:bg-light"
            ></div>
        </div>
    )
}