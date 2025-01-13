'use client'

type ButtonProps = {
    buttonHref?: string;
    children: React.ReactNode;
    onClick?: () => void;
}


function Button({ buttonHref, onClick, children }: Readonly<ButtonProps>) {
    return (
        <a href={buttonHref} onClick={onClick} className="w-fit cursor-pointer flex gap-2 items-center py-2 px-4 text-gray-500 border border-gray-200 rounded-md bg-gray-50 hover:bg-white hover:shadow-sm">{children}</a>
    )
}

export default Button;