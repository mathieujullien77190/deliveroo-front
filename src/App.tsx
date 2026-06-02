import Header from "./components/Header";
import Intro from "./components/Intro";
import Menu from "./components/Menu";
import { useFetchData } from "./hooks/useGetData";

const App = () => {
  const { isLoading, data, isError } = useFetchData();

  console.log({ isLoading, data, isError });

  return (
    <>
      <Header />
      <main>
        {data && (
          <>
            <Intro {...data.restaurant} />
            <Menu categories={data.categories} />
          </>
        )}
      </main>
    </>
  );
};

export default App;
