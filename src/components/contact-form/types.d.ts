interface IContactForm {
  onSubmit: (values: GetInTouchFormValues) => void
  isValidEmail: boolean
}

type GetInTouchFormValues = {
  subject: string
  email: string
  message: string
}
