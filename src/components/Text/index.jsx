import React from "react";

const sizes = {
    textxs:"text-lg font-normal not-italic",
    texts:"text-2xl font-normal not-italic md:text-[22px]",
    textmd:"text-4xl font-normal not-italic md:text-[52px] sm:text-[50px]",
    textlg:"text-4xl font-normal not-italic md:text-[120px]",
};

const Text = ({children, className = "", as, size="textxs", ...restProps})=>{
    const Component = as || "p";
    return (
        <Component className={`text-white-a700 font-roboto ${className} ${sizes[size]}`} {...restProps} >
            {children}
        </Component>
    )
}
export {Text};