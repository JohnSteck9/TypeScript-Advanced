// Using DECLARE GLOBAL for amazing inference
export {};

// TODOS
declare global {
    interface GlobalReducerEvent {
        ADD_TODOS: {
            text: string;
        };
    }
}

const todosReducer: GlobalReducer<{ todos: { text: string }[] }> = (state, event) => {
    // event.type === 'ADD_TODOS' ? state.todos.push({ text: event.text }) : null;
    return state;
};

// UserReducer
declare global {
    interface GlobalReducerEvent {
        LOG_IN: {
            id: number;
        };
    }
}

const userReducer: GlobalReducer<{ id: number }> = (state, event) => {
    switch (event.type) {
        case "LOG_IN": {
            return {
                ...state,
                id: event.id,
            };
        }
    }
    return state;
};

// Types
declare global {
    interface GlobalReducerEvent {}
}

type GlobalReducer<TState> = (
    state: TState,
    event: {
        [EventType in keyof GlobalReducerEvent]: {
            type: EventType;
        } & GlobalReducerEvent[EventType];
    }[keyof GlobalReducerEvent]
) => TState;
