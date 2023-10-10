import { Schema, model, models } from "mongoose"


const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email already required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
            'Username invalid, it should contain 8-20 alphanumeric letters and be unique!'
        ]
    },
    image: {
        type: String
    }
})

const User = models.User || model("User", UserSchema);
export default User;

/*
    const User = models.User || model("User", UserSchema);
    here -> models.User
    is used to check if the DB already containf the USER model
    or else it will recreate a new one each time User model is called

    const User = model("User", UserSchema);
    this can be used when we are running code in continous running environment i.e Server/ a proper backend
*/