'use client'

type RegButtonProps = {
    buttonHref?: string;
    children: React.ReactNode;
    onClick?: () => void;
    ariaLabel: string;
}


function RegButton({ buttonHref, onClick, children, ariaLabel }: Readonly<RegButtonProps>) {
    return (
        <a href={buttonHref} target="_blank" aria-label={ariaLabel} onClick={onClick} className="w-fit cursor-pointer flex gap-2 items-center py-2 px-4 text-gray-500 border border-gray-200 rounded-md bg-gray-50 hover:bg-white hover:shadow-sm">{children}</a>
    )
}

export default RegButton;