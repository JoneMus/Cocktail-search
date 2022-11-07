import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export default function Cocktails({data}) {

    const [drinkName, setName] = useState('');
    const [img, setImg] = useState('');
    const [instructions, setInstructions] = useState('');

    const [drinkName1, setName1] = useState('');
    const [img1, setImg1] = useState('');
    const [instructions1, setInstructions1] = useState('');

    const [drinkName2, setName2] = useState('');
    const [img2, setImg2] = useState('');
    const [instructions2, setInstructions2] = useState('');

    const [drinkName3, setName3] = useState('');
    const [img3, setImg3] = useState('');
    const [instructions3, setInstructions3] = useState('');

    const [drinkName4, setName4] = useState('');
    const [img4, setImg4] = useState('');
    const [instructions4, setInstructions4] = useState('');


    const [drinks, setDrinks] = useState([]);
   
    



    useEffect(() => {
        const address =
        URL + data;

    axios.get(address)
    .then((response) => {
        console.log(response.data)
        setDrinks(response.data.drinks)

        setName(drinks[0].strDrink);
        setImg(drinks[0].strDrinkThumb);
        setInstructions(drinks[0].strInstructions);  
        
        setName1(drinks[1].strDrink);
        setImg1(drinks[1].strDrinkThumb);
        setInstructions1(drinks[1].strInstructions);
        

        setName2(drinks[2].strDrink);
        setImg2(drinks[2].strDrinkThumb);
        setInstructions2(drinks[2].strInstructions);

        setName3(drinks[3].strDrink);
        setImg3(drinks[3].strDrinkThumb);
        setInstructions3(drinks[3].strInstructions);

        setName4(drinks[4].strDrink);
        setImg4(drinks[4].strDrinkThumb);
        setInstructions4(drinks[4].strInstructions);


    })
})

    return (
        <div class="container">
            <h2>Cocktails</h2>
            <div class="cocktail">
                <img id="image" src={img} alt=""/>
                <h3>{drinkName}</h3>
                <p id="text">
                    {instructions}
                </p>
            </div>
            <div class="cocktail">
                <img id="image" src={img1} alt=""/>
                <h3>{drinkName1}</h3>
                <p id="text">{instructions1}</p>
            </div>
            <div class="cocktail">
                <img id="image" src={img2} alt=""/>
                <h3>{drinkName2}</h3>
                <p id="text">{instructions2}</p>
            </div>
            <div class="cocktail">
                <img id="image" src={img3} alt=""/>
                <h3>{drinkName3}</h3>
                <p id="text">{instructions3}</p>
            </div>
            <div class="cocktail">
                <img id="image" src={img4} alt=""/>
                <h3>{drinkName4}</h3>
                <p id="text">{instructions4}</p>
            </div>
        </div>

    )
}