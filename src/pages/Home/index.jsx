import { Header } from "../../components/Header";
import { Container, Description, Menu, Content, Wrapper } from "./styles";
import { Card } from "../../components/Card";
import flavors from "../../assets/flavors.png";
import { Section } from "../../components/Section";
import Slider from "../../components/Slider";
import { SwiperSlide } from "swiper/react";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { toastUtils } from "../../components/Toast";
import { Link } from "react-router-dom";

export function Home() {
  const { user } = useAuth();
  const isAdmin = user && user.admin ? true : false;

  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [main, setMain] = useState([]);
  const [snacks, setSnacks] = useState([]);

  const hasDishes = meals.length > 0 || desserts.length > 0 || drinks.length > 0 || main.length > 0 || snacks.length > 0;

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?search=${search}`);

        setMeals(response.data.filter((dish) => dish.category === 'meals'));
        setMain(response.data.filter((dish) => dish.category === 'main'));
        setDesserts(response.data.filter((dish) => dish.category === 'dessert'));
        setDrinks(response.data.filter((dish) => dish.category === 'drinks'));
        setSnacks(response.data.filter((dish) => dish.category === 'snacks'));
      } catch (error) {
        if (error.response) {
          return toastUtils.handleError(error.response.data.message);
        } else {
          return toastUtils.handleError("Erro ao buscar pratos, tente novamente mais tarde");
        }
      }
    }

    fetchDishes();
  }, [search])
  return (
    <Container>
      <Header filterDishes={e => setSearch(e.target.value)} />

      <Wrapper>
        <Content>
          {/* <MenuMobile /> */}
          <Description>
            <img src={flavors} alt="Alimentos e frutas" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Description>

          <Menu>
            {
              meals.length > 0 && (
                <Section title="Refeições">
                  {
                    meals.map(dish => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        admin={isAdmin}
                      />
                    ))
                  }
                </Section>
              )
            }

            {
              main.length > 0 && (
                <Section title="Pratos principais">
                  {
                    main.map(dish => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        admin={isAdmin}
                      />
                    ))
                  }
                </Section>
              )
            }

            {
              desserts.length > 0 && (
                <Section title="Sobremesas">
                  {
                    desserts.map(dish => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        admin={isAdmin}
                      />
                    ))
                  }
                </Section>
              )
            }

            {
              drinks.length > 0 && (
                <Section title="Bebidas">
                  {
                    drinks.map(dish => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        admin={isAdmin}
                      />
                    ))
                  }
                </Section>
              )
            }

            {
              snacks.length > 0 && (
                < Section title="Lanches">
                  {
                    snacks.map(dish => (
                      <Card
                        key={String(dish.id)}
                        data={dish}
                        admin={isAdmin}
                      />
                    ))
                  }
                </Section>
              )
            }

            {!hasDishes && (
              isAdmin ? (
                <h2>Nenhum prato encontrado, adicione clicando <Link to="/add">aqui</Link></h2>
              ) : (
                <h2>Nenhum prato encontrado</h2>
              )
            )}
          </Menu>
        </Content>


        <Footer />
      </Wrapper>

    </Container >
  )
}