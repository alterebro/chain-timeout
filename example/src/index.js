import chainTimeout from './../../src/index.js';

function msg() {

    let _output = [];
    for (let i = 0; i < arguments.length; i++) {
        _output.push( arguments[i] );
    }
    _output = _output.map(item => `&nbsp;<code>${item}</code>`).join("\n");

    let _pre = document.createElement("pre");
        _pre.innerHTML = _output
    document.body.appendChild(_pre);
}

let _start = new Date().getTime();
let _middle = null;
let _end = null;



// --------------------------
// Some chaininig...
const chain = chainTimeout( () => msg('-----------------', `starting at ${_start}`), 0 )
    .chainTimeout( () => msg('I am chaining, aren\'t I?'), 2500 )
    .chainTimeout( () => {

        _middle = new Date().getTime();
        msg('another message...', '  ...with multiple lines');

    }, 2500 )
    .chainTimeout( () => msg(`4 messages so far, ${(new Date().getTime() - _middle)}ms after the last message was sent...`), 2500 )
    .chainTimeout( () => msg(`and ${(new Date().getTime() - _start)/1000} seconds have passed since the beggining of the script`), 2500 )
    .chainTimeout( () => msg('but i guess is time to stop..'), 2500 )
    .chainTimeout( () => msg('alright then... '), 2500 )
    .chainTimeout( () => msg('ehmm ... '), 2500 )
    .chainTimeout( () => msg('...bye bye!'), 2500 )
    .chainTimeout( () => {

        _end = new Date().getTime();
        msg(`stopping at ${new Date().getTime()} (${((_end - _start)/1000).toFixed(2)}s)`, '-----------------');

    }, 2500 );


console.log(chain);    
