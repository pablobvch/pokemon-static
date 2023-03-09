import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { useEffect, useState } from "react";
import { NoFavorites } from "../../components/ui/NoFavorites";
import localFavorites from "../../utils/localFavorites";

const FavouritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavouritesPage;
