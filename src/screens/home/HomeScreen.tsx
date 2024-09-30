import { Text, View } from "react-native"
import { AirplaneIcon } from '../../icons/Icons';
import { colors, globalStyles } from "../theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../presentation/components/ui/Title";
import { MenuItem } from "../../presentation/components/ui/MenuItem";


export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Opciones del menu' safe />
          {/* <Text style={ {color: '#000000'}}>Hola</Text> */}
          {
            animationMenuItems.map((item, index) => (
              <MenuItem key={item.component} {...item}  isFirts={ index === 0 } isLast={ index === menuItems.length - 1}/>
            ))
          }
          {
            menuItems.map((item, index) => (
              <MenuItem key={item.component} {...item}  isFirts={ index === 0 } isLast={ index === menuItems.length - 1}/>
            ))
          }
          {
            uiMenuItems.map((item, index) => (
              <MenuItem key={item.component} {...item}  isFirts={ index === 0 } isLast={ index === menuItems.length - 1}/>
            ))
          }
        </ScrollView>
      </View>
    </View>
  )
}

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
]

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
]

export const menuItems = [
  // 02-menuItems
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

