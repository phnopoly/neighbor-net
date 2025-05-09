import { type JSX } from "react";
import * as React from "react";

export const Code = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}): JSX.Element => <code className={className}>{children}</code>;
