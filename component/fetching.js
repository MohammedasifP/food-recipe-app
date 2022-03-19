async function getdata(value){
    try {
         let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
         var data=await response.json()
             return data;

    } catch (error) {
        console.log(error)
    }
}
export default getdata 