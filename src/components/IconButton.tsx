'use client'

type IconButtonProps = {
    buttonHref?: string;
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel: string;
}


function IconButton({ buttonHref, onClick, children, ariaLabel }: Readonly<IconButtonProps>) {
    return (
        <a href={buttonHref} target="_blank" aria-label={ariaLabel} onClick={onClick} className="w-fit cursor-pointer flex gap-2 items-center p-1 text-gray-500 border border-gray-200 rounded-full bg-gray-50 hover:bg-white hover:shadow-sm">{children}</a>
    )
}

export default IconButton;