const Banana = () => {
    const count =3
    const temp = true
    const data = [
        'apple','banana','orange'
    ]
    return(
        <>
        <p>Hello,Banana!!</p>
        <div>{data.map((item, index) => (<p key={index}>{item}</p>))}</div>
        </>
    )
    }

export default Banana