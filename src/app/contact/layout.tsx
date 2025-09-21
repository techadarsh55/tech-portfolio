import React from "react";

export default function ConatctLayout ({
    children,
}: {children: React.ReactNode}) {
    return (
        <div>
            <h1>Contact Theme</h1>
            <div>{children}</div>
        </div>
);
}