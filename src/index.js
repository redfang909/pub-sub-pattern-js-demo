const EventBusFactory = () => {
    const listeners = {};

    const fire = (event, payload) => {
        // publish an event listener
        if (!listeners[event]) return [];

        listeners[event] = listeners[event].map(callback => callback(payload));

        return listeners[event];
    };

    const listen = (event, listener) => {
        // create an event listener
        if (!listeners[event]) {
            listeners[event] = [];
        }

        listeners[event].push(listener);
    };

    const unsubscribe = (event, removeListener) => {
        // unsubscribe a listener from event
        if (listeners[event]) {
            listeners[event] = listeners[event].filter(callback => callback !== removeListener);
        }
    };

    return {
        fire,
        listen,
        unsubscribe
    }
}


module.exports = EventBusFactory