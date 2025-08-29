// src/services/passwordService.ts

export default function generatePass(passwordLength: number = 8){
  let password: string = ''
  let characters:string = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!'

  for(let index = 0; index < passwordLength; index++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }

  return password
}