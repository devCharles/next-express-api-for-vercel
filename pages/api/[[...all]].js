import mongoose from "mongoose";
import server from "@/backend/server";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const CONN_STR = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority `;

export default async function start(req, res) {
  await mongoose.connect(CONN_STR);
  return server(req, res);
}
