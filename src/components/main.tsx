import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 0

export const LoginForm = () => {
  const form = useForm()
  renderCount++

  return (
    <>
      <h1>Login ({renderCount / 2})</h1>
      {/* <DevTool control={control} /> */}
    </>
  )
}
