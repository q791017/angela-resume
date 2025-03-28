'use client';

type ControlButtonProps = {
  icon: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
};

function ControlButton({
  onClick,
  icon,
  ariaLabel,
  buttonText,
  className,
}: Readonly<ControlButtonProps>) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`group w-fit cursor-pointer flex gap-2 items-center py-2 px-2 text-sm text-gray-500 border border-gray-200 rounded-md bg-gray-50 hover:bg-white hover:shadow-sm active:text-gray-700 ${className}`}
    >
      {icon}
      {buttonText && (
        <div className="buttonText text-sm text-gray-500 hidden group-hover:flex duration-500 transition-opacity opacity-0 group-hover:opacity-100">
          {buttonText}
        </div>
      )}
    </button>
  );
}

export default ControlButton;
