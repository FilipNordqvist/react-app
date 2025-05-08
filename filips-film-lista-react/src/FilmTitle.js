import React, {useState, useRef} from "react";
import Film from "./Film";

export default function FilmList(){
    const [films, setFilms] = useState([{
        id: 1,
        title: "Film",
        rating: 3,
    }
]);

const inputRef = useRef();
const ratingRef = useRef();

function addItem(id){

        const newId = films.length > 0 ? films[films.length - 1].id + 1 : 1;
        const rating =  parseInt(ratingRef.current.value);
        
        if(inputRef.current.value.length > 0 && rating > 0 && rating <= 5){
            setFilms([...films, {
                id: newId,
                title: inputRef.current.value,
                rating: parseInt(ratingRef.current.value),
            }]);
            
            inputRef.current.value = "";
            ratingRef.current.value = "";

        }else if (inputRef.current.value.length === 0){
            alert("Du angav ingen titel")
        }else if(ratingRef.current.value.length === 0){
            alert("Du gav ingen rating")
        } 
}


function deleteItem(id){
setFilms(films.filter((item) => item.id !== id))
}

function sortAfterTitle(){
    films.sort((a,b) => (a.title > b.title) ? 1 : -1)
    console.log("Title sorterad: ", films)
}

function sortAfterGrade(){
    films.sort((a,b) => (a.rating < b.rating) ? 1 : -1)
    console.log("Betyg sorterad: ",films)
    
}

    return (
        <div>
            <label for="title-field">Titel:</label>
            <input className="form-control" type="text" id="title-field"  
            placeholder="Ange film titel här..." ref={inputRef}/>
            
            
        
            <label for="rating-field">Betyg:</label>
            <select id="rating-field" type="text" className="form-control" ref={ratingRef}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <button type="submit" className="btn btn-success mt-3 mr-5" 
            onClick={addItem}>Spara film</button> 

            <button type="Sortera efter betyg" className="btn btn-primary mt-3 mr-5" 
            onClick={sortAfterGrade}>Sortera efter betyg</button>

            <button type="Sortera efter title" className="btn btn-warning mt-3 " 
            onClick={sortAfterTitle}>Sortera efter title</button>

            
            <ul className="list-group">
                { films.map(film => <Film key={film.id} item={film} deleteItem={deleteItem}/>) }
            </ul>
        </div>
    )
}