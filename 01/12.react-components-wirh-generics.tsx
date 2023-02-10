// React Components with GENERICS?

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

function Table<TItem>(props: TableProps<TItem>) {
    return null;
}

const Component = () => {
    return (
        <Table<{ id: number; name: string }>
            items={[
                {
                    id: 1,
                    name: "Matt",
                },
            ]}
            renderItem={(item) => <div>{item.id}</div>}
        ></Table>
    );
};
