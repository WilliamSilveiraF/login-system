import { create, test, enforce, only } from 'vest'
import isEmail from 'validator/es/lib/isEmail'

const suite = create((data = {}, currentField) => {
  enforce.extend({ isEmail })
  only(currentField)

  test("email", "Email is required", () => {
    enforce(data.email).isNotEmpty()
  })
  test("email", "Enter a valid email", () => {
    enforce(data.email).isEmail()
  })
  test("password", "Password must be longer than 7 digits", () => {
    enforce(data.password.length).greaterThan(7)
  })
  test("password", "Password must be less than 15 digits", () => {
    enforce(data.password.length).lessThan(15)
  })
  test("username", "Username is required", () => {
    enforce(data.username).isNotEmpty()
  })
})

export default suite;
