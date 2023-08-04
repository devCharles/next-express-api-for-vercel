import server from "@/backend/server";
import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const CONN_STR = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority `;

async function start(req, res) {
  await mongoose.connect(CONN_STR);
  return server(req, res);
}

export default start;
