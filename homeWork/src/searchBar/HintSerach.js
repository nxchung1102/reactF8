function HintSearch({ hints }) {
    return (
        <div>
            {hints.map((hint, id) => {
                return <div key={id}><img src={hint.thumnail} alt={hint.name} style={
                    {
                        width: "20px",
                        height: "20px"
                    }
                } /> {hint.name}</div>
            })}
        </div>
    )
}
export default HintSearch