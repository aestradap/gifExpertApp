import React, {useState} from 'react'
import {AddCategory} from "./components/AddCategory";
import {GiftGrid} from "./components/GiftGrid";

export const GifExpertApp = () => {

    //const categorias = ['one punch', 'Samuray X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter',...categories]);
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // }
    return <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/*<button onClick={handleAdd}>Agregar</button>*/}
        <ol>
            {
                categories.map(category => (
                    <GiftGrid
                        key={category}
                        category={category}/>
                ))
            }
        </ol>
    </>

}
