const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
});

module.exports = mongoose.model('User', UserSchema);
