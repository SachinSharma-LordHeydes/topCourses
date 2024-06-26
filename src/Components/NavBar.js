



function NavBar(props){
    let filterData=props.filterData;
    let cat=props.cat;
    let setCat=props.setCat

    function changeHandler(title){
        setCat(title)
    }
    return (
        <div className="text-white my-7  ">
            {
                filterData.map((data)=>{
                    return <button 
                    className={`items-center py-1 px-2 
                    text-center hover:border-2 border-red-500 
                    rounded-lg mx-3 bg-slate-900
                    ${cat===data.title?
                        ("border-2 border-white"):
                        ("border-1")}
                    `}
                    onClick={()=>changeHandler(data.title)} key={data.id}>{data.title}
                    </button>
                })
            }
            
        </div>
    )
}

export default NavBar