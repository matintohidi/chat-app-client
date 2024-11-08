export interface RegisterFormValuesInterface {
    name: string
    email: string
    password: string
}

export interface LoginFormValuesInterface {
    email: string
    password: string
}

export interface UserValuesInterface {
    _id: string
    name: string
    email: string
    profile: string | null
    phone: string
    city: string
}

export interface PersonalInfoFormValuesInterface {
    name: string
    phone: string
    city: string
    profile: string
}