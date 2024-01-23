const connect = require('./mongoNodeConnectionCode');

async function updateData(){
    let connection = await connect('pratap', 'rutuja');
    let data = await connection.updateOne(
        {name:'neha'},{$set:{surname:'yadav'}}
    )
    if (data.modifiedCount){
        console.log('data updated...');
        process.exit();
    }
    else {
        console.log('have the same value given...');
        process.exit();
    }
}
updateData();