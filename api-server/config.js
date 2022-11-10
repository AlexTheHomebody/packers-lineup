module.exports = {
    dev:{
        connectionString: 'postgres://packers_db_user:1olb4CRYYvEbKxok8RiTE0yKILcOsYhB@dpg-cdmkjk02i3mqrp8ktgm0-a.frankfurt-postgres.render.com/packers_db?ssl=true',
        port: '9999'
    },
    production:{
        connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
        port: process.env.PORT
    }
}
// module.exports.devConnectionString = 'postgres://packers_db_user:1olb4CRYYvEbKxok8RiTE0yKILcOsYhB@dpg-cdmkjk02i3mqrp8ktgm0-a.frankfurt-postgres.render.com/packers_db';
// module.exports.devPort = '9999'

// module.exports.productionConnectionString = module.exports.devConnectionString + "?ssl=true";
// module.exports.productionPort = process.env.PORT;
// module.exports.dev = dev;
// var dev = {
//     connectionString: 'postgres://packers_db_user:1olb4CRYYvEbKxok8RiTE0yKILcOsYhB@dpg-cdmkjk02i3mqrp8ktgm0-a.frankfurt-postgres.render.com/packers_db',
//     port: '9999'
// }

// module.exports.production = production;
// var production = {
//     connectionString: dev.connectionString + "?ssl=true",
//     port: process.env.PORT
// }