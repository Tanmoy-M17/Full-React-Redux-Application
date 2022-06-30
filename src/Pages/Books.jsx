import Bookslist from '../Components/Bookslist';
import FilterSort from '../Components/FilterSort';
const Books = () => {
  return (
    <>
     <h2> Books</h2>
    <div style={{display:"flex"}}>
        <div style={{width:"300px",border:"1px solid red"}}>
            <FilterSort/>
        </div>
        <div style={{width:"100%",
        border:"1px solid black",
        display:"grid"
        }}>
             <Bookslist/>
        </div>
      
    </div>
    </>
  )
}

export default Books

