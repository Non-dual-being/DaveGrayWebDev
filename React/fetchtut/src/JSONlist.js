const JSONList = ({ JSONObjList = []}) => {
    return (
        <>
        
        {JSONObjList && JSONObjList > 0 ?
            (           
            <ul>
                {JSONList.map(item => (
                <JSONListItem 
                    key = {item.id}
                    item = {item}

                />
                ))}
            </ul> 
            )
          
             : (<p class="ErrorPara">Er zijn geen items om weer te geven</p>)
        }

        </>
        
    )
}

export default JSONList