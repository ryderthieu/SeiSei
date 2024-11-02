import './Table.scss'

const Table = ({data}) => {
    return (

            <table className='table-container'>
                <tr className='table-title'>
                    {
                        Object.keys(data[0]).map((value, index) => {
                            return (
                                <td className="table-cell table-title__text" key={index}>
                                    {value}
                                </td>
                            )
                        })
                    }
                </tr>
                {
                    data.map((value, index) => {
                        return (
                            <tr className='row'>
                                {Object.values(value).map((v, i) => {
                                    return (
                                        <td className={`table-cell table-cell__${i}`}>
                                            {v}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
            </table>

    )
}

export default Table