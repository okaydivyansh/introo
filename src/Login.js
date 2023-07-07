export default function Login()
{
    return <div> {/*we are actually returning a div tag instead of just input tag*/}
    <input type="text"/>  {/*writing just <input type="text"> would have thrown error*/}
    <input type="password"/>
    </div>
}


/*
we can write it as:
return 
(<div> 
<input type="text"/>  
<input type="password"/>
</div>);

but without '(', if you are writing div in another line then error
*/