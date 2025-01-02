import { ReactElement } from "react"
import React from "react"

type buttonProperties = {
    startIcon?: ReactElement,
    innertext: string,
    textColor: string,
    backgroundColor: string,
    sidebar?: boolean
    onClick?: () => void
}

export function Button(props: buttonProperties) {
    let buttonCSS = `
            flex items-center text-xs px-2 py-1 rounded-sm transition duration-400 ease-in-out
            sm:text-xs sm:px-3 sm:py-1.5 sm:rounded
            md:text-sm md:px-4 md:py-2 md:rounded-md 
            lg:text-base lg:px-4 lg:py-2 lg:rounded-lg 
            xl:text-lg xl:px-4.5 xl:py-2.5 xl:rounded-xl
            2xl:text-xl 2xl:px-5 2xl:py-3 2xl:rounded-xl` 

    let iconCSS = `
            flex items-center justify-center
            w-4 aspect-square
            sm:w-5 md:w-5 lg:w-6 xl:w-6 2xl:w-8`

    if(props.sidebar) {
        buttonCSS += ` h-6 sm:8 md:h-8 lg:h-10 xl:h-12 2xl:h-14 justify-evenly`
    } else buttonCSS += ` h-auto`

    return (
        <>
            <button onClick={props.onClick} className={`${buttonCSS} ${props.textColor} ${props.backgroundColor}`}>
                {props.startIcon && React.cloneElement(props.startIcon, { className: `${iconCSS}` })}
                {props.startIcon && <span>&nbsp;&nbsp;</span>}
                {props.innertext}
                {props.sidebar && <div className="w-24"></div>}
            </button>
        </>
    )
}

