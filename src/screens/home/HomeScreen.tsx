import { Text, View } from "react-native"
import { AirplaneIcon } from '../../presentation/icons/Icons';
import { globalStyles } from "../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../presentation/components/ui/Title";
import { MenuItem } from "../../presentation/components/ui/MenuItem";
import { useContext } from "react";
import { ThemeContext } from "../../presentation/context/ThemeContext";
import { CustomView } from "../../presentation/components/ui/CustomView";

export const HomeScreen = () => {

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={[globalStyles.mainContainer]}>
      <ScrollView>
        <Title text="Opciones del menú" safe />

        {/* animationMenuItems
          menuItems
          uiMenuItems */}

        {animationMenuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />
        {uiMenuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === uiMenuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
          />
        ))}

        <View style={{ marginTop: 30 }} />
      </ScrollView>
    </CustomView>
  );
};

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Animation 103',
    icon: 'logo-octocat',
    component: 'Animation103Screen',
  },
];

export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];
const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];