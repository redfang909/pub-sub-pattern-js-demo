const EventBusFactory = () => {
    const listeners = {};

    const fire = (event, payload) => {
        // publish message here
    };

    const listen = (event, listener) => {
        // subscribe a message
    };

    const unsubscribe = (event, removeListener) => {
        // unsubscribe from event
    };

    return {
        fire,
        listen,
        unsubscribe
    }
}


module.exports = EventBusFactory
