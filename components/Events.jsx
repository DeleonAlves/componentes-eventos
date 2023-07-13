const Events = () => {

    const handleMyEvents = (e) => {
        console.log(e);

    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>clicou aqui</button>
            </div>
           <div>
            <button onClick={() => console.log('clicou')}>aperta</button>
           </div>
        </div>


    );
};
export default Events;