import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/Log_In';
import SplashScreen from '../screens/SplashScreen';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Test from '../screens/test';
import Attendance from '../screens/Attendance';
import AskDoubt from '../screens/AskDoubt';
import Fees from '../screens/Fees';
import AssignMent from '../screens/AssignMent';
import ChangePassword from '../screens/ChangePassword';
import Datesheet from '../screens/Datesheet';
import Events from '../screens/Events';
import Holiday from '../screens/Holiday';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import SchoolGallery from '../screens/SchoolGallery';
import Support from '../screens/Support';
import TimeTable from '../screens/TimeTable';
import LeaveApplication from '../screens/LeaveApplication';
import Check_Page from '../screens/check_page';
import PayOnline from '../screens/PayOnline';
import AskDoubt2 from '../screens/Events';
import ProfileViewData from '../screens/ProfileViewData';
import LogOut from '../screens/LogOut';
import Feeshing from '../screens/DetailPage/Feeshing';
import RhymeTime from '../screens/DetailPage/RhymeTime';
import SleepOverNight from '../screens/DetailPage/SleepOverNight';
import ImageView from '../screens/ImageView';

const Stack = createStackNavigator();

const MainNavigation = () => {

    const screens = [
        { name: 'SplashScreen', comp: SplashScreen },
        { name: 'Log_in', comp: LogIn },
        { name: 'Dashboard', comp: Dashboard },
        { name: 'Profile', comp: Profile },
        { name: 'Test', comp: Test },
        { name: 'Fees', comp: Fees },
        { name: 'Attendance', comp: Attendance },
        { name: 'Quiz', comp: Quiz },
        { name: 'AssignMent', comp: AssignMent },
        { name: 'Holiday', comp: Holiday },
        { name: 'TimeTable', comp: TimeTable },
        { name: 'Result', comp: Result },
        { name: 'DateSheet', comp: Datesheet },
        { name: 'AskDoubt', comp: AskDoubt },
        { name: 'SchoolGallery', comp: SchoolGallery },
        { name: 'ChangePassword', comp: ChangePassword },
        { name: 'Events', comp: Events },
        { name: 'Support', comp: Support },
        { name: 'LeaveApplication', comp: LeaveApplication },
        { name: 'PayOnline', comp: PayOnline },
        { name: 'ProfileViewData', comp: ProfileViewData },
        { name: 'Feeshing', comp: Feeshing },
        { name: 'RhymeTime', comp: RhymeTime },
        { name: 'SleepOverNight', comp: SleepOverNight },
        { name: 'LogOut', comp: LogOut },
        { name: 'ImageView', comp: ImageView },
    ]
    return (
        <Stack.Navigator>
            {screens.map((stackscreen, i) => {
                return (
                    <Stack.Screen key={i} name={stackscreen.name} component={stackscreen.comp} options={{ headerShown: false }} />
                )
            })}
        </Stack.Navigator>
    )
}
export default MainNavigation;

