const connect = require('./mongoNodeConnectionCode');

async function deleteData(){
    let connection = await connect('pratap', 'rutuja');
    let data = await connection.deleteOne(
        {name:'kavita'}
    )
    if(data.deletedCount){
        console.log('data deleted...');
    }
    process.exit();
}
deleteData();