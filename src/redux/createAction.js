const identity = x => x;
const isNull = x => x === null;
const isFunction = x => typeof x === 'function';

export default function createAction(type, payloadCreator = identity, metaCreator) {
    const useIdentity = isNull(payloadCreator) || payloadCreator === identity;
    const createPayload = (head, ...args) => (head instanceof Error ? head : payloadCreator(head, ...args));
    const finalPayloadCreator = useIdentity ? identity : createPayload;
    const hasMeta = isFunction(metaCreator);
    const typeString = type.toString();

    const actionCreator = (...args) => {
        const payload = finalPayloadCreator(...args);
        const action = { type };

        if (payload instanceof Error) {
            action.error = true;
        }

        if (payload !== undefined) {
            action.payload = payload;
        }

        if (hasMeta) {
            action.meta = metaCreator(...args);
        }

        return action;
    };

    actionCreator.toString = () => typeString;

    return actionCreator;
}
