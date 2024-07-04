import React from "react";

const Img = ({className,src="defaultNoData.png",alt="testImg",...restProp})=>{
    return <img className={className} src={src} alt={alt} {...restProp} loading={"lazy"}/>
}

export {Img};