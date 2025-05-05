'use strict'

// const fs = require('fs')
const gateway = require('express-gateway')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

//start gateway
gateway()
    .load(path.join(__dirname, 'config'))
    .run()