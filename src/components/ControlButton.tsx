'use client';

type ControlButtonProps = {
  icon: React.ReactNode;
  buttonText?: string | null;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
  isDisable?: boolean;
};

function ControlButton({
  onClick,
  icon,
  ariaLabel,
  buttonText,
  className,
  isDisable,
}: Readonly<ControlButtonProps>) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group w-fit h-9 flex items-center py-2 px-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-gray-50/90 shadow-md ${isDisable ? 'cursor-default opacity-40' : 'cursor-pointer hover:duration-200 hover:bg-white hover:shadow-sm active:text-gray-700'} ${className}`}
    >
      {icon}
      {buttonText && (
        <div className="buttonText text-sm text-gray-500 hidden group-hover:flex duration-500 transition-opacity opacity-0 group-hover:opacity-100 group-hover:pl-2">
          {buttonText}
        </div>
      )}
    </button>
  );
}

export default ControlButton;
