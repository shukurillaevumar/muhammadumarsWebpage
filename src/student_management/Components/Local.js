import React from 'react'

export const Local = () => {
   // setItem
//    localStorage.setItem("db", JSON.stringify(['olma', 'anor', 'uzum']))

   console.log("Db is created")



   // getItem

//    console.log(localStorage.getItem('db'))
//    console.log(Array.isArray(localStorage.getItem('db')))

   const myDb = JSON.parse(localStorage.getItem('db'));

//    console.log(myDb)
//    console.log(Array.isArray(myDb))

   console.log("Db is read")

   function deleteItem(id) {
        const myDb = JSON.parse(localStorage.getItem("db"))
        const updDb = myDb.filter((item, index) => index !== id)
        localStorage.setItem('db', JSON.stringify(updDb))
   }

    deleteItem(1);

   // removeItem

   function remove (){
    localStorage.removeItem("db");
    console.log("Db is removed")
   }

   


   // clear
  return (
    <div>
        <h1>Local</h1>
        {myDb.map((item, index)=> <p  key={index} style={{padding: "10px"}}>{item}</p>)}
        <button onClick={remove}>Clear all</button>
    </div>
  )
}
