import RecipeCard from "./components/RecipeCard";
import recepiesList from "../public/recipes";

export default function recipes(){
    return (
        <section id="recipes-list" className="grid grid-cols-1 gap-y-5 justify-items-center pt-3 md:grid-cols-3 md:px-20">
            {recepiesList.map(r => (<RecipeCard key={r.id} {...r} />))}
        </section>
    );
}