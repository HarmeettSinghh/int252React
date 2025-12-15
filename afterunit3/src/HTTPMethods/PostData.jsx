import React from 'react'

const PostData = () => {

    const postData = () =>{
        const newData = {
            userId: 400,
            title: "React Class"
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers : {contentType: "application/json"}
        })
       
    }
  return (
    <div>
      
    </div>
  )
}

export default PostData
