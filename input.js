// Stores the active TCP connection object.
let connection; 

const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = function(key) {
    // const interval = function(key) {
    //   func = setInterval(() => {
    //     connection.write(key);
    //   }, 100);
    // };

    if(key === "\u0003") {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 'a') {
      interval('Move: left');
    }
    if (key === 's') {
      clearInterval(func);
      interval('Move: down');
    }
    if (key === 'd') {
      console.log('Move: right');
    }
    if (key === 'z') {
      connection.write('cool');
    }
    if (key === 'm') {
      connection.write("Name: VY");
    }
};


module.exports = { setupInput };


//put into object of data 

//loop to incrementally check each number 
//if key1 logged, then key2 executes...


//logic: working incrementally to make sure we first have the right strings to send up to the server