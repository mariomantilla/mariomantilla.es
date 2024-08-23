import { ReactNode } from "react";

type ContactButtonProps = {
    icon: ReactNode,
    url: string
    text: string
}

export const ContactButton = ({ icon, url, text }: ContactButtonProps) => {
    return (
        <a
            href={url}
            className="text-white/70 hover:text-rose-800 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon} <span className="sr-only">{text}</span>
        </a>
    );
}