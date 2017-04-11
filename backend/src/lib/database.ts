import * as client from "knex";

const knex: client = client({
    client: "mysql",
    connection: require("config").get("db"),
    debug: true
})

export default knex;