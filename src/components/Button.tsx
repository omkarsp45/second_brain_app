import { ReactElement } from "react"

interface buttonProperties {
    startIcon?: ReactElement,
    innertext: string,
    textColor: string,
    backgroundColor: string
}

interface buttonStyle {
    textsize: string,
    paddingx: string,
    paddingy: string,
    borderRadius: string
}

type buttonValues = buttonProperties & buttonStyle;

export function Button(props: buttonValues) {
    const buttonStyle = `${props.textsize} ${props.paddingx} ${props.paddingy} ${props.borderRadius}`
    return (
        <>
            <button className={`flex items-center ${props.textColor} ${props.backgroundColor} ${buttonStyle}`}>
                {props.startIcon}
                &nbsp;
                {props.innertext}
            </button>
        </>
    )
}