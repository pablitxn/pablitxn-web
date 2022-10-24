interface IGetInTouch {
  onSubmit: (values: GetInTouchFormValues) => void
  isInvalidEmail: boolean
}

type GetInTouchFormValues = {
  name: string
  email: string
  message: string
}
