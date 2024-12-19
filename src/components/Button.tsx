import { ReactElement } from "react"
import React from "react"

type buttonProperties = {
    startIcon?: ReactElement,
    innertext: string,
    textColor: string,
    backgroundColor: string,
}

export function Button(props: buttonProperties) {
    const buttonCSS = `
            flex items-center text-xs px-2 py-1 rounded-sm w-auto h-auto
            sm:text-sm sm:px-3 sm:py-1.5 sm:rounded
            md:text-base md:px-4 md:py-2 md:rounded-md 
            lg:text-lg lg:px-4 lg:py-2 lg:rounded-lg
            xl:text-xl xl:px-4.5 xl:py-2.5 xl:rounded-xl
            2xl:text-xl 2xl:px-5 2xl:py-3 2xl:rounded-xl`

    const iconCSS = `
            flex items-center justify-center
            w-4 h-4
            sm:w-5 sm:h-5
            md:w-5 md:h-5
            lg:w-6 lg:h-6
            xl:w-6 xl:h-6
            2xl:w-8 2xl:h-8`

    return (
        <>
            <button className={`${buttonCSS} ${props.textColor} ${props.backgroundColor}`}>
                {props.startIcon && React.cloneElement(props.startIcon, { className: `${iconCSS}` })}
                &nbsp;&nbsp;
                {props.innertext}
            </button>
        </>
    )
}