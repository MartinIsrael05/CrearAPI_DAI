import 'dotenv/config'

const config = {
    /*user : proccess.env.DB_USER,
    password : proccess.env.DB_PASSWORD,
    server : proccess.env.DB_SERVER,
    database : proccess.env.DB_DATABASE,*/
    user : "Pizzas",
    password : "VivaLaMuzza123",
    server : "A-PHZ2-LUM-20",
    database : "DAI-Pizzas",
    options : {
        trustServerCertificate: true,
        trustedConnection : true
    }
}
export default config;
