import React, { Children } from "react";

const sizes = {}

const Heading = ({children,className="",size="",as,...restProps})=>{
    const Component = as || "h6";
    return (
        <Component className={`${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    )
}
export {Heading}