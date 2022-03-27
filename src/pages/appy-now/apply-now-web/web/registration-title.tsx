type RegistrationFormsProps = {
  chair: boolean
  delegate: boolean
}

export function WebApplyNowTitle({
  chair,
  delegate
}: RegistrationFormsProps): JSX.Element {
  return (
    <>
      {!chair && !delegate ? (
        <>
          <p className="titleContainer xOyCenter">
            The experience of your studenthood starts in:
          </p>
        </>
      ) : null}

      {chair ? (
        <>
          <p className="titleContainer xOyCenter">
            Chair Registration ends in:
          </p>
        </>
      ) : null}

      {delegate ? (
        <>
          <p className="titleContainer xOyCenter">
            Delegates Registration ends in:
          </p>
        </>
      ) : null}
    </>
  )
}
