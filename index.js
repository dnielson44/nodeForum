const server = require("./server");
const persist = require("./persist");

const port = process.argv[2];

persist(()=>{
    server.listen(port, ()=>{
        console.log(`Code School 2021 Forum app running on ${port}`)
    })
})