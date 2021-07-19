const EventBusFactory = () => {
    const listeners = {};

    const fire = (event, payload) => {
        // publish an event listener
    };

    const listen = (event, listener) => {
        // create an event listener
    };

    const unsubscribe = (event, removeListener) => {
        // unsubscribe a listener from event
    };

    return {
        fire,
        listen,
        unsubscribe
    }
}


module.exports = EventBusFactory
