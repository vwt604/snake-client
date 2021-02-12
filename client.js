//Server set up
const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on("connect", () => {
    console.log("Successfully Connected!");
    conn.write("Name: VY");
    // conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 200);
  });

  return conn;
}

module.exports = { connect };