import './Country.css'
const Country = ({country}) => {
    const {name,flags}=country
    console.log(country);
    return (
        <div className='CountryCss'>

            <h4>Country: {name.common}</h4>
            <img src={flags.png} alt="flags" />
            
        </div>
    )
}
export default Country 