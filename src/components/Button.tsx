import { ReactElement } from "react"
import React from "react";
import { useState, useEffect } from "react";
import { resizeFunction } from "../assets/getSize";

interface buttonProperties {
    startIcon?: ReactElement,
    innertext: string,
    textColor: string,
    backgroundColor: string,
}

export function Button(props: buttonProperties) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    let sharedButtonProps = resizeFunction(window.innerWidth);
    let sizeProperties = `${sharedButtonProps.textSize} ${sharedButtonProps.paddingX} ${sharedButtonProps.paddingY} ${sharedButtonProps.borderRadius}`;
    let iconSize = sharedButtonProps.iconSize;

    useEffect(() => {
        async function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            sharedButtonProps = await resizeFunction(window.innerWidth);
            sizeProperties = `${sharedButtonProps.textSize} ${sharedButtonProps.paddingX} ${sharedButtonProps.paddingY} ${sharedButtonProps.borderRadius}`;
            iconSize = sharedButtonProps.iconSize;
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);

    return (
        <>
            <button className={`flex items-center ${props.textColor} ${props.backgroundColor} ${sizeProperties}`}>
                {props.startIcon && React.cloneElement(props.startIcon, {
                    iconSize: `${iconSize}`,
                })}
                &nbsp;&nbsp;
                {props.innertext}
            </button>
        </>
    )
}