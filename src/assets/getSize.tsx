interface buttonValues {
    textSize: string,
    paddingX: string,
    paddingY: string,
    borderRadius: string,
    iconSize: string
}

const sharedButtonProps: buttonValues = {
    textSize: 'text-sm',
    paddingX: 'px-4',
    paddingY: 'py-2',
    borderRadius: 'rounded-lg',
    iconSize: 'w-5 h-5'
};

function resizeFunction(w: number) {
    if (w < 640) {
        sharedButtonProps.textSize = 'text-xs';
        sharedButtonProps.paddingX = 'px-2';
        sharedButtonProps.paddingY = 'py-1';
        sharedButtonProps.borderRadius = 'rounded-sm';
        sharedButtonProps.iconSize = 'w-4 h-4';
    } else if (w >= 640 && w < 768) {
        sharedButtonProps.textSize = 'text-sm';
        sharedButtonProps.paddingX = 'px-3';
        sharedButtonProps.paddingY = 'py-1';
        sharedButtonProps.borderRadius = 'rounded-md';
        sharedButtonProps.iconSize = 'w-5 h-5';
    } else if (w >= 768 && w < 1024) {
        sharedButtonProps.textSize = 'text-base';
        sharedButtonProps.paddingX = 'px-4';
        sharedButtonProps.paddingY = 'py-2';
        sharedButtonProps.borderRadius = 'rounded-md';
        sharedButtonProps.iconSize = 'w-5 h-5';
    } else if (w >= 1024 && w < 1280) {
        sharedButtonProps.textSize = 'text-lg';
        sharedButtonProps.paddingX = 'px-5';
        sharedButtonProps.paddingY = 'py-3';
        sharedButtonProps.borderRadius = 'rounded-lg';
        sharedButtonProps.iconSize = 'w-5 h-5';
    } else if (w >= 1280 && w < 1536) {
        sharedButtonProps.textSize = 'text-xl';
        sharedButtonProps.paddingX = 'px-6';
        sharedButtonProps.paddingY = 'py-4';
        sharedButtonProps.borderRadius = 'rounded-xl';
        sharedButtonProps.iconSize = 'w-6 h-6';
    } else {
        sharedButtonProps.textSize = 'text-2xl';
        sharedButtonProps.paddingX = 'px-8';
        sharedButtonProps.paddingY = 'py-5';
        sharedButtonProps.borderRadius = 'rounded-2xl';
        sharedButtonProps.iconSize = 'w-7 h-7';
    }
    return sharedButtonProps;
}

export { resizeFunction };