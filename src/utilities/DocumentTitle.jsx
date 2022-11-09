import { useEffect } from "react"


const DocumentTItle = title => {

    useEffect(() => {
      document.title = `${title} - Get Looking Great`
    }, [title])
}

export default DocumentTItle;