import { ReactNode } from "react";
import { buttonVariants } from "./ui/button";

type HeaderButtonProps = {
    icon: ReactNode,
    url: string
    text: string
}

export const HeaderButton = ({ icon, url, text }: HeaderButtonProps) => {
    return (
        <a
            href={url}
            className={buttonVariants({ variant: "outline" })}
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon} {text}
        </a>
    );
}