import { getFlatJobList } from "../../api/flats"
import { useEffect } from "react"

const PageJoblists = () => {
  useEffect(() => {
    getFlatJobList()
      .then((list) => {
        // console.log(list)
      })
  }, [])
  return (
    <>
      <p>Welcome to the Joblists page</p>
    </>
  )
}

export default PageJoblists