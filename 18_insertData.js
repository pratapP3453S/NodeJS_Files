const connect = require('./mongoNodeConnectionCode');

async function insertData(){
    let db = await connect('pratap', 'rutuja');
    let insert = await db.insertMany(
        [
            {name:'kavita', surname:'panigrahy', fav_lang:'odisha', start_year:'2005'},
            {name:'neha', surname:'panigrahy', fav_lang:'odisha', start_year:'2007'},
            {name:'varsha', surname:'panigrahy', fav_lang:'odisha', start_year:'2004'}
        ]
    )
    if(insert.acknowledged){
        console.log("data inserted successfully...!");
    }
}
insertData();
