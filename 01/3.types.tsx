// Building LOOSE AUTOCOMPLETE with TypeScript
declare const React: any;

type IconSize = LoseAutocomplete<'sm' | 'xs'>;

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
            <Icon size="xs" ></Icon>
            <Icon size="something" ></Icon>
        </>
    )
}