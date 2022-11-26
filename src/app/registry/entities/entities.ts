export interface LoginEntity {
  email: string
  password: string
}

export interface UserEntity {
  token: string
  username: string
  email: string
  authorities: string[]
}

export enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER'
}

export interface SignUpForm {
  name: string
  email: string
  city: string
  phone: string
  studyLevel: string
  field: string
  password: string
  confirm: string
}
