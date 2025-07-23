import './table.scss';

const Table = ({ data }) => {
    const columns = Object.keys(data);
    const rowCount = data[columns[0]].length;
    console.log(
        'Longueurs :',
        columns.map(col => `${col}: ${data[col].length}`)
    );
    return (
      <table className="table">
        <thead className="table__title">
          <tr className="table__title__row">
            {columns.map(col => (
              <th key={col} className='table__title__row__item'>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {[...Array(rowCount)].map((_, rowIndex) => (
            <tr key={rowIndex} className="table__body__row">
              {columns.map(col => {
                const { icon, label } = data[col][rowIndex];
                return (
                    <td key={`${col}-${rowIndex}`} className="table__body__row__item">
                        {icon !== "text" && <i className={`${icon} table__body__row__item__icon`}></i>} {label}
                     </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default Table;
  