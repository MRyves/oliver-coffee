import RecipeCard from "./components/RecipeCard";

export default function recipes(){
    return (
        <section id="recipes-list" className="flex items-stretch justify-center w-full">
            <RecipeCard />
        </section>
    );
}