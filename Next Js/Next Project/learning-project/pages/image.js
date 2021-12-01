
function image() {
    return (
        <div>
            <form method="post" action="api/image" enctype="multipart/form-data">

            <input name="logo" type="file" />   
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default image
