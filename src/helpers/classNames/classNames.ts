type Mods = Record<string, boolean | string>;

interface ClassNamesArgs {
    cls: string,
    mods?: Mods,
    additional?: string[],
};

export const classNames = (args: ClassNamesArgs): string => {
    const cls = args.cls;
    const mods = args.mods || {};
    const additional = args.additional || [];

    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}