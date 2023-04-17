import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/restaurants', async (req, res) => {
  try {
    const sql = `
    select *
      from "restaurants"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'an unexpected error occured'});
  }
});

app.get('/api/restaurants/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      res.status(400).json({error: 'id must be a positive integer'});
      return;
    }
    const sql = `
    select * from restaurants
      where "id" = $1
    `;
    const params = [id];
    const result = await db.query(sql, params);
    if(!result.rows[0]) {
      res.status(400).json({error: 'this id does not exist'});
      return;
    }
    res.json(result.rows[0]);
  } catch(err) {
    console.error(err);
    res.status(500).json({error: 'an unexpected error has occured'});
  }
});

app.post('/api/restaurants', async (req, res) => {
  try {
    const { name, location, priceRange } = req.body;
    if (!name || !location || !priceRange) {
      res.status(400).json({error: 'name, location, and priceRange are required'});
      return;
    }
    if (typeof name !== 'string' || typeof location !== 'string' || typeof priceRange !== 'number') {
      res.status(400).json({error: 'invalid input on either name, location, or priceRange'});
      return;
    }
    const sql = `
    insert into "restaurants" ("name", "location", "priceRange")
      values ($1, $2, $3)
      returning *
    `;
    const params = [name, location, priceRange];
    const result = await db.query(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({error: 'an unexpected error has occured'});
  }
});

app.patch('/api/restaurants/:id', async (req, res) => {
  try {
    const {name, location, priceRange} = req.body;
    if (typeof name !== 'string' || typeof location !== 'string' || typeof priceRange !== 'number') {
      res.status(400).json({ error: 'name, location, or priceRange have invalid inputs' });
      return;
    }
    const id = Number(req.params.id);
    if(!Number.isInteger(id) || id < 1) {
      res.status(400).json({error: 'id must be a positive integer'});
      return;
    }
    const sql = `
    update "restaurants"
      set "name" = $1,
          "location" = $2,
          "priceRange" = $3
      where "id" = $4
      returning *
    `;
    const params = [name, location, priceRange, id];
    const result = await db.query(sql, params);
    if(!result.rows[0]) {
      res.status(400).json({error: 'this id does not exist'});
    }
    res.json(result.rows[0]);
  } catch(err) {
    console.error(err);
    res.status(500).json({error: 'an unexpected error has occured'});
  }
});

app.delete('/api/restaurants/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({error: 'invalid id'});
    }
    const sql = `
    delete from "restaurants"
      where "id" = $1
      returning *
    `;
    const params = [id]
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      res.status(404).json({error: 'deleted grade not found'});
    }
    res.json(result.rows[0]);
  } catch(err) {
    console.error(err);
    res.status(500).json({error: 'an unexpected error has occured'});
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
