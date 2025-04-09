

export default function Button({ children, handler, type }) {
    const style =
        type === "danger" ? "bg-red-700 p-2 rounded" : "bg-blue-700 p-2 rounded"

    return (
        <button onClick={handler} className={style}>{children}</button>
    )
}
