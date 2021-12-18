const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAFN6UgEAAAAAKCWEYyaKXipOyTqlktobll7pLO8%3DVp0PiDQALdtK18OEKxM4vDI2O4fQppfQGIfNaVxcVdjiTzcj9p';

// setup middlewares
app.use(morgan('dev'))
app.use(express.json())
if (process.env.NODE_ENV === "development")
  app.use(cors());
