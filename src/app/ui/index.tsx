import Layout from "host/Layout";
import AppModule from "./module";

const App = () => {
  return (
		<Layout path="/auth">
			<AppModule />
		</Layout>
  );
};

export default App;
