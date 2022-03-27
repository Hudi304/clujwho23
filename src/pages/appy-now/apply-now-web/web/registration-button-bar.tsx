type ApplyNowButtonBarProp = {
  setChair: (bool: boolean) => void
  setDelegate: (bool: boolean) => void
}

export function ApplyNowButtonBar({
  setChair,
  setDelegate
}: ApplyNowButtonBarProp): JSX.Element {
  return (
    <div className="button-bar">
      <button
        className="form-btn"
        onClick={() => {
          setChair(true)
          setDelegate(false)
        }}
      >
        Chair
      </button>
      <button
        className="form-btn"
        onClick={() => {
          setChair(false)
          setDelegate(true)
        }}
      >
        Delegate
      </button>
    </div>
  )
}
