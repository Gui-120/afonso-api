const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB conectado');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar no MongoDB', err);
});
