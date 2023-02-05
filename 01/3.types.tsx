// Building LOOSE AUTOCOMPLETE with TypeScript
declare const React: any;

// type IconSize2 = 'sm' | 'xs' | Omit<string, 'sm' | 'xs'>
type IconSize = LoseAutocomplete<'sm' | 'xs'>;

/**
 * Type helper
 */
type LoseAutocomplete<T extends string> = T | Omit<string, T>

interface IconProps {
    size: IconSize;
}

const Icon = (props: IconProps) => {
    return <></>;
};

const Comp1 = () => {
    return (
        <>
            <Icon size="" ></Icon>
            <Icon size="something" ></Icon>
        </>
    )
}