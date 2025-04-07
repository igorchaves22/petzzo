export const applyClassName = (condition: unknown, className: string, elseClassName?: string) => {
    if (!condition) {
        if (elseClassName) {
            return ` ${elseClassName}`;
        }

        return "";
    }

    return ` ${className}`;
};
