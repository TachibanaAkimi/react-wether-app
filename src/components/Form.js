const Form = (props) =>{

    return (
        <form>
            <input type="text" name="city" placeholder="都市名を入力※英(ex.London,Tokyo)" onChange={e=>props.setCity(e.target.value)}/>
            <button type="submit" onClick={props.getWeather}>Get Weather</button>
        </form>

    );
};


export default Form;