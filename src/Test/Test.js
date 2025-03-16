
const url = `https://api.aviationstack.com/v1/flights?access_key=8ac32d25ba2afbe017af2118912cda76`;
// const options = {
//     method: "GET",
// };

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     const output=await JSON.parse(result);
//     console.log(output)
// } catch (error) {
//     console.error(error);
// }

let output=0;
let datas=fetch(url)
.then(response=>{
  return response.text();
})
.then(data=>{
   output=JSON.parse(data);
   return output
})

async function storeData()
{
  let out=await datas;
  console.log(out.data[0].departure.airport);
}

storeData();