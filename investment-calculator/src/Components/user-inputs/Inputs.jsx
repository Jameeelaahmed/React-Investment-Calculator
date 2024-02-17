import './Inputs.css'
export default function Inputs({label1,label2,handleResultOne,handleResultTwo}) {
    return (
    <div className="input-group">
        <p>
            <label htmlFor={label1}>{label1}</label>
            <input name={label1} type="number" onChange={handleResultOne} required/>
        </p>
        <p>
            <label htmlFor={label2}>{label2}</label>
            <input name={label2} type="number" onChange={handleResultTwo}/>
        </p>
    </div>
    );
}
