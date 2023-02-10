// Enums considered harmful
export {};

const LOG_LEVEL = {
    DEBUG: "DEBUG",
    WARNING: "WARNING",
    ERROR: "ERROR",
} as const;

type ObjectValues<T> = T[keyof T];

type LogLevel = ObjectValues<typeof LOG_LEVEL>;

function logWithType(message: string, level: LogLevel) {
    console.log(`${LOG_LEVEL[level]}: ${message}`);
}

logWithType("hey1", "DEBUG");

////////////////////////////////

enum ELogLevel {
    DEBUG = "DEBUG",
    WARNING = "WARNING",
    ERROR = "ERROR",
}

function logWithEnum(message: string, level: ELogLevel) {
    console.log(`${ELogLevel[level]}: ${message}`);
}

logWithEnum("hey2", ELogLevel.DEBUG);
// @ts-expect-error
logWithEnum("hey3", "DEBUG"); // Error

////////////////////////////////

enum ELogLevelBase {
    DEBUG,
    WARNING,
    ERROR,
}

const titlesMap = {
    [ELogLevelBase.DEBUG]: "DEBUG",
    [ELogLevelBase.WARNING]: "WARNING",
    [ELogLevelBase.ERROR]: "ERROR",
};

function logWithEnumBase(message: string, level: ELogLevelBase) {
    console.log(`${titlesMap[level]}: ${message}`);
}

logWithEnumBase("wow", ELogLevelBase.ERROR);
