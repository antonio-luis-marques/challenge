import * as createUser from './Create'
import * as getUser from './GetUser'


const controllerUser = {
    ...createUser,
    ...getUser
}

export {controllerUser}