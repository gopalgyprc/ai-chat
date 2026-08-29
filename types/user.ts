export interface AppUser {
  uid: string
  name: string
  email: string
  photoURL?: string
  createdAt?: number | string
  lastLoginAt?: number | string
}
