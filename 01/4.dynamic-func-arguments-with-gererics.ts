// Dynamic function arguments with GENERICS
export {};

type MyEvent =
    | {
    type: "LOG_IN";
    payload: {
        userId: string;
    };
} | {
    type: "SIGN_OUT";
}

const sendEvent = <Type extends MyEvent["type"]>(
    ...args: Extract<MyEvent, { type: Type }> extends { payload: infer TPayload }
        ? [type: Type, payload: TPayload]
        : [type: Type]
) => {};

/**
 * Correct
 */
sendEvent("SIGN_OUT");
sendEvent("LOG_IN", {
    userId: "123",
});
sendEvent("LOG_IN", {
    userId: "123",
});

/**
 * Should error:
 */
// @ts-expect-error
sendEvent("SIGN_OUT", {});
sendEvent("LOG_IN", {
    // @ts-expect-error
    userId: 123,
});
// @ts-expect-error
sendEvent("LOG_IN", {});
// @ts-expect-error
sendEvent("LOG_IN");
