const zod = require('zod');

//by default every property of an object is required..
//isOptional --> 
const schema = zod.object({
    email : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string().min(2).optional(),
    password : zod.string().min(8)

})

const response  = schema.safeParse({
    email : 'aysh@gmail.com',
    firstName : 'ayush',
    lastName : '1jhbvh',
    password : '123gdfgdgfd'
})
if(response.success){
    console.log('good to go')
}

else{
    response.error.errors.forEach((obj) => {
        console.log(obj.message)
    })
}
