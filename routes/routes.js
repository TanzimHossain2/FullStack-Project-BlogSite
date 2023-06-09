const authRoute = require('./authRoute');
const dashboard = require('./dashboardRoute');

const playground = require('../playground/play')
const uploadRoute = require('./uploadRoutes')
const postRoute = require('./postRoute');

const apiRoute = require('../api/routes/apiRoutes');

const exploreController = require('./exploreRoute');

const searchRoute = require('./searchRoute');
const authorRoute = require('./authorRoutes');

const routes = [
    {
        path: '/auth',
        handler: authRoute
    },
    {
        path: '/dashboard',
        handler: dashboard
    },
    {
        path: '/uploads',
        handler: uploadRoute
    },

    {
        path: '/post',
        handler: postRoute

    },
    {
        path: '/api',
        handler: apiRoute
    },
    {
        path: '/explorer',
        handler: exploreController
    },
    {
        path: '/search',
        handler: searchRoute
    },
    {
        path: '/author',
        handler: authorRoute
    },

    {
        path: '/playground',
        handler: playground
    },
    {
        path: '/',
        handler: (req, res) => {
            res.redirect('/explorer')
        }
    },



]

module.exports = app => {
    routes.forEach(r => {
        if (r.path === '/') {
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })

}