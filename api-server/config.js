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
