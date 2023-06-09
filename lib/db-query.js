const Client = require("pg").Client;

const logQuery = (statement, parameters) => {
  let timeStamp = new Date();
  let formattedTimeStamp = timeStamp.toString().substring(4, 24);
  console.log(formattedTimeStamp, statement, parameters);
};

module.exports = {
  
  async dbQuery(statement, ...parameters) {

    let client = new Client({ 
      database: "todo_lists",
      host:'/var/run/postgresql',
      user:'rustem',
      port:'5432'
    });

    await client.connect();
    //  logs 
    logQuery(statement, parameters);

    let result = await client.query(statement, parameters);
    await client.end();

    return result;
  }
};

