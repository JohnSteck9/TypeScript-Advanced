// Extracting React Props using CONDITIONAL TYPES
import React from "react";

type PropsForm<TComponent> = TComponent extends React.FC<infer Props>
    ? Props
    : TComponent extends React.Component<infer Props>
        ? Props
        : never;

const MyFuncComponent = (props: { enabled: boolean }) => {
    return null;
};

const funcProps: PropsForm<typeof MyFuncComponent> = {
    enabled: true,
};

class MyClassComponent extends React.Component<{
    enabled: boolean;
}> {}

const classProps: PropsForm<MyClassComponent> = {
    enabled: true,
};
