
let errorFieldMessage = (props)=>{
    return (
        <>
            <div className="text-danger border rounded border-warning">{props.children}</div>
        </>
        
    )
}
export {errorFieldMessage}