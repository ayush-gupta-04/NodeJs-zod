//zod is a library which helps us to check
//if the input given is of required type or not.

//define like this.
const zod = require('zod');


// const schema = zod.string().email();
// const schema = zod.string();
// const schema = zod.string().max(8);
// const schema = zod.string().min(5);
// const schema = zod.string().url();
// const schema = zod.string().startsWith("a");
// const schema = zod.string().endsWith('h')
// const schema = zod.string().includes('gui');








// //------------------------>  HANDLING ERROR....  <---------------------
// //------------------------->  Method-1  <---------------
const schema = zod.string().refine((arg) => {
    if(arg == 'Male' || arg == 'female'){
        return true;
    }
    return false;
},{
    message : 'Can enter only male or female'
});

//response gives us {success : 'true' ,: data : "", error : [getter]}
const response = schema.safeParse('Male');


if(response.success){
    console.log('congrats')
}else{
    //this is how we get access to the message.
    console.log(response.error)
}







// //------------------------->  Method-2  <---------------
// //this method is only for primitives
// const schema = zod.string({
//     required_error : 'This field is required',
//     invalid_type_error : 'This must be a String'
// })

// const response = schema.safeParse(4);

// if(response.success){
//     console.log('congrats')
// }else{
//     //this is how we get access to the message.
//     console.log(response.error.errors)
// }







//------------------->  OPTIONAL <----------------------------
// //either all fileds before optional must be true....or none should be true;
// const schema = zod.string().email().optional();
// const response = schema.safeParse('aysh@gmail.com');
// console.log(response)




