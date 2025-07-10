import { LogoIcon } from "./logo.styles";

interface LogoIconProps {
    icon?: React.ElementType;
    className?: string;
}

function Icon({ icon: Component, className, ...props }: LogoIconProps) {
    if (!Component) return null;
    return <LogoIcon as={Component} className={className} {...props} />;
}

export const Logo = {
    Icon,
};
