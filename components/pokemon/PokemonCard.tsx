import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces/pokemon-list";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = (props) => {
  const { pokemon } = props;
  const { id, name, img } = pokemon;
  const router = useRouter();

  const onClick = () => {
    console.log(id);
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image onClick={onClick} src={img} width="100%" />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
