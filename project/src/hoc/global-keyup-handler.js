
/**
 * @param {React.Component} compInstance the component to improve ;)
 * @param  {object} configs one or more config objs with {keyCode: 'ArrowUp', methodName: 'methodNameToCall' }, ...
 * @returns {React.Component}
 */
const globalKeyupHandler = (compInstance, ...configs) => {
    configs.forEach((cfg) => {
        console.log('adding a handler');
        document.addEventListener('keypress', (ev) => {
            const component = compInstance;
            const expectedCode = cfg.keyCode;
            const method = cfg.call;
    
            console.log('expectedKey(%o) => component(%o)[%o] // Pressed: %o => (%o)', 
                expectedCode,
                component,
                method,
                ev.code,
                component[method] 
            );
    
            if (ev.code === expectedCode) {
                component[method](ev);
            }
        });
    
    });

    return compInstance;
};

export default globalKeyupHandler;
