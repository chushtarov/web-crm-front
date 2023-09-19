import { useEffect, useRef } from 'react'

const useClickOutside = (hendler) => {
    const domNode = useRef()


useEffect(() => {
    const maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)){
            maybeHandler()
        }
    }
    document.addEventListener('mousedown', maybeHandler)
    return () => {
        document.removeEventListener('mousedown', maybeHandler)
    }
})
return domNode
}
export default useClickOutside