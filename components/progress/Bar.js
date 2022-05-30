export const Bar = ({ animationDuration, progress }) => {

    console.log('ini progress barrrss ' + progress)
    return (
        <div className="bg-[#272727] h-1 w-full left-0 top-0 fixed z-50"
            style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${animationDuration}ms linear`,
            }}
        ></div>
    );
};