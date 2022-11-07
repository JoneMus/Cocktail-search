import React from "react";
import { useState } from "react";
import Cocktails from "./cocktails";


export default function Home() {
    const [search, setSearch] = useState('');

    return (
        <div class="body">
            <section>
            <form class="form">
                <h2 id="heading">Search cocktails</h2>
                <input id="input" type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
            </form>
            </section>

            <div>
                <Cocktails data={search}/>
            </div>
        </div>
    );
}