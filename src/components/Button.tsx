import { ReactElement } from "react"
import React from "react"

type buttonProperties = {
    startIcon?: ReactElement,
    innertext: string,
    textColor: string,
    backgroundColor: string,
    onClick?: () => void
}

export function Button(props: buttonProperties) {
    let buttonCSS = `
            flex items-center text-center transition duration-400 ease-in-out
            text-sm px-4 py-2 rounded-md 
            lg:text-base lg:px-4 lg:py-2 lg:rounded-lg 
            xl:text-lg xl:px-4.5 xl:py-2.5 xl:rounded-xl
            2xl:text-xl 2xl:px-5 2xl:py-3 2xl:rounded-xl
            h-8 lg:h-10 xl:h-12 2xl:h-14` 

    let iconCSS = `
            flex items-center justify-center
            w-4 aspect-square
            sm:w-5 md:w-5 lg:w-6 xl:w-6 2xl:w-8
            mr-2 sm:mr-3 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-7
            `

    return (
        <>
            <button onClick={props.onClick} className={`${buttonCSS} ${props.textColor} ${props.backgroundColor}`}>
                {props.startIcon && React.cloneElement(props.startIcon, { className: `${iconCSS}` })}
                {props.innertext}
            </button>
        </>
    )
}

