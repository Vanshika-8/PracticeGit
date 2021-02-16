const posts=[
    {title:'Post 1' , body:'Hey there'},
    {title:'Post 2' , body:'Hey there'}
]

function getPosts(){
    setTimeout(()=>{
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    },1000)
}


function createPost(post){

return new Promise((resolve,reject)=>{

    setTimeout(()=>{
posts.push(post)

const err=false;
if(!err){
    resolve()
}else(
    reject('Error')
)
},2000)
})
}




// createPost({title:'post 3' , body:'hey there'})
// .then(getPosts)
// .catch((err)=>console.log(err))


async function init(){
    await createPost({title:'post 3' , body:'hey there'})
    getPosts()
}

init()
// const promise1=Promise.resolve('Hello')
// const promise2=10
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
// resolve('Goodbye')
//     },2000)
// })

// Promise.all([promise1,promise2,promise3]).then((values)=>
// console.log(values))