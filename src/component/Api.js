import react, {useState, useEffect} from "react"


const Api= (props)=>{

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=> setUsers(data))
    .catch((error)=> console.log(error))

},[] )

const headStyle={
    fontWeight:"bold"
}
const [headInputs, setHeadInputs]=useState({fontWeight:"bold",
display:"none", fontSize:"medium",})

const [searchDatar, setSearchDatar]=useState("")
const [users,setUsers]=useState([])
const [arr, setArr]=useState(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVFhKTf9xcP8Rg_fAyk8z95nu1qpm9ti_nkNPD-hI6_WNnvRup9DlRibujut1H4G6iEI&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-rB32sPAQ7D-p0gjGPDFvyqiOnoYHzxE1FZYbesxI90OukJhtVOodZlev_dwvaxbb4o&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8znHklJjew2MXMnhX6f0QF4q_L3orAdaJsl-BOhBeSacmoT8lmT0KlD4xWJbut7Gjhw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuJPtTo4a6OcxxXTveEuLu0u6wai8BA2FwlSXPX5caxKFR7IC-z_QYO4aJl822DOERTg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63M61gzSmKCihjqBnGYlrSXkMPUltsHjNiB-u79BdLl5nLnz2eYD0JpqQOaJkJ6QGUpI&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlAaqpkeKCj6k4ydRCICF4nH5FgU5pofbbmNE1-xBXk-1mP6Vw-D03jjEnTOcUkKxGyA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqN8ngU6udtXLv85Fw9gNgRYtLYVcLxcOYf_nYnojhc-N_609S2w6agg5uQtgB8KvdTw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZjs3UjN182j05VivzZTvML_T80ZOjkcp60NN0XGKnmm12gw9Lt86T_fJz0F-pCk4lBM&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6KFMsemZ8EEq6hG-RngiscT-ZLdSV67lQwfCJPGug13GCXNpjZzLu2SlTEOJtj4l2Zc&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdW6kaNp1kzU3gGqRLd1zrYnHEyLFRLK1ez6LzGu_rt1jrjStNl1F-9xZrxjh77hnVfY&usqp=CAU"])

return(
<div>
    
<h1>Api in React</h1>
<div className="inputHead"><input type="text" value={ searchDatar} onChange={(e)=>{setSearchDatar(e.target.value);  setHeadInputs({display:"flex"})}}/><div style={headInputs} className="cancelling" onClick={(e)=>{setSearchDatar("") ;  setHeadInputs({display:"none"})}}>x</div></div>





<ul>

    {users.filter((val)=>
    {   
        
       if(searchDatar===""){
        
            return val}
        else if((((val.name).toUpperCase())).includes((searchDatar).toUpperCase())){
            
            return val
        }
       
    }
).map((item,index) =>
    <li key ={item.id} className="box">
        
        <img src={arr[item.id-1]}/>
           <div style={headStyle}>{item.name}</div> 
            {item.username}<br/>
            {item.email}<br/>
            {item.address.street}<br/>
            {item.company.name}<br/>
    
    
    
    </li> 
    )}
</ul>

</div>
)}

export default Api