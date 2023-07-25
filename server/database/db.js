import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-i5fiscc-shard-00-00.pvvbk4u.mongodb.net:27017,ac-i5fiscc-shard-00-01.pvvbk4u.mongodb.net:27017,ac-i5fiscc-shard-00-02.pvvbk4u.mongodb.net:27017/?ssl=true&replicaSet=atlas-frm7hd-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;