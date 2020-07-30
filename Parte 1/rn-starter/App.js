import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/componentScreen";
import ComponentsScreen from "./src/screens/componentScreen";
import ListScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/counterScreen";
import ColorScreen from "./src/screens/colorScreen";
import SquareScreen from "./src/screens/squareScreen";
import TextScreen from "./src/screens/textScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lista: ListScreen,
    Imagenes: ImageScreen,
    Contador: CounterScreen,
    Color: ColorScreen,
    Cuadrado: SquareScreen,
    Texto: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Aplicacion",
    },
  }
);

export default createAppContainer(navigator);
