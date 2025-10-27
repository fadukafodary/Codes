// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
// import { globallyStyle } from '../style/globalStyle'
// import LinearGradient from 'react-native-linear-gradient'
// import { FontFamily, Color, FontSize } from '../constants/constant'
// import { image } from '../data/ImageData'
// import { useNavigation } from '@react-navigation/native'
// import { dynamicSize } from '../style/Responsive'
// import { Divider } from 'react-native-paper'

// const DateSheetData = [
//   {
//     id: 'item1',
//     date: '11',
//     month: 'JAN',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM',
//     devider: 'true'
//   },
//   {
//     id: 'item2',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
//   {
//     id: 'item3',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
//   {
//     id: 'item4',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
//   {
//     id: 'item5',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
//   {
//     id: 'item6',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
//   {
//     id: 'item7',
//     date: '11',
//     month: 'Jan',
//     subject: "Science",
//     day: 'Monday',
//     time: '09:00 AM'
//   },
// ]

// const DateSheet = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={globallyStyle.safeAreaView}>
//       <LinearGradient style={[styles.linearGradient]}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 2, y: 2 }}
//         colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//         <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

//         <Header iconLeft={image.backArrow} text='Assignment'
//           onpressLeft={() => navigation.goBack()} />
//         <Height top={66} />
//       </LinearGradient>

//       <View style={[globallyStyle.card, { paddingHorizontal: 0 }]}>
//         <Height top={20} />
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {DateSheetData.map((datesheet) => {
//             return (

//               <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30 }}>
//                 <View>
//                   <Text style={styles.date} >{datesheet.date}</Text>
//                   <Text style={styles.month}>{datesheet.month}</Text>
//                 </View>
//                 {/* <Height left={20} /> */}
               
//                   {/* {
//                     datesheet.devider ?
//                       <Divider style={styles.devider} /> : <></>
//                   } */}
//                   <Height top={12} />
//                   <View style={styles.spaceBetween}>
//                     <View style={{ marginLeft: 10 }}>
//                       <Text style={styles.subject} >{datesheet.subject}</Text>
//                       <Text style={styles.day}>{datesheet.day}</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                       <Image style={styles.Icon} source={image.ic_Time} />
//                       <Height right={7} />
//                       <Text style={styles.day}>{datesheet.time}</Text>
//                     </View>
                    
//                   </View>
//               </View>
//             )
//           })
//           }
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default DateSheet
// const styles = StyleSheet.create({
//   Icon: {
//     width: dynamicSize(13),
//     height: dynamicSize(13)
//   },
//   date: {
//     fontSize: FontSize.font26,
//     color: Color.lightBlack,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 28
//   },
//   month: {
//     fontSize: FontSize.font13,
//     color: Color.lightBrinjal,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 19
//   },
//   subject: {
//     fontSize: FontSize.font16,
//     color: Color.brinjal,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 23
//   },
//   day: {
//     fontSize: FontSize.font12,
//     color: Color.silver,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 15
//   },
//   devider: {
//     width: dynamicSize(272)
//   },
//   lunch: {
//     height: dynamicSize(38),
//     width: 39
//   },
//   linearGradient: {
//     paddingHorizontal: 16,
//   },
//   textInputContainer: {
//     // height: dynamicSize(186),
//     // backgroundColor: Color.red,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderColor: Color.feesRectBorder,
//     borderRadius: 15,
//     marginVertical: 16,
//     paddingHorizontal: 15
//   },
//   subject: {
//     fontSize: FontSize.font16,
//     color: Color.brinjal,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 20
//   },
//   day: {
//     fontSize: FontSize.font13,
//     color: Color.silver,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 20
//   },
//   spaceBetween: {
//     // alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     borderBottomWidth:1,
//     flex:1,
//     borderBottomColor:Color.feesBorderBottom
//   },
// })




// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
// import { globallyStyle } from '../style/globalStyle'
// import LinearGradient from 'react-native-linear-gradient'
// import { FontFamily, Color, FontSize } from '../constants/constant'
// import { image } from '../data/ImageData'
// import { useNavigation } from '@react-navigation/native'
// import { dynamicSize } from '../style/Responsive'
// import { Divider } from 'react-native-paper'


// const AssignMent = () => {
//   const AssignMentData = [
//     {
//       id: 'item1',
//       subject: 'Mathemetics',
//       detail: 'Surface Area and Volumes',
//       assign: "Assign Date",
//       assignDate: "10 Nov 20",
//       submission: 'Last Submission Date',
//       subDate: "10 Dec 20",
//       submit: 'true'
//     },
//     {
//       id: 'item2',
//       subject: 'English',
//       detail: 'Surface Area and Volumes',
//       assign: "Assign Date",
//       assignDate: "10 Nov 20",
//       submission: 'Last Submission Date',
//       subDate: "10 Dec 20",
//       submit: 'true'
//     },
//     {
//       id: 'item3',
//       subject: 'Science',
//       detail: 'Surface Area and Volumes',
//       assign: "Assign Date",
//       assignDate: "10 Nov 20",
//       submission: 'Last Submission Date',
//       subDate: "10 Dec 20",
//     },
//   ]

//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={globallyStyle.safeAreaView}>
//       <LinearGradient style={[styles.linearGradient]}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 2, y: 2 }}
//         colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//         <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

//         <Header iconLeft={image.backArrow} text='Assignment'
//           onpressLeft={() => navigation.goBack()} />
//         <Height top={66} />
//       </LinearGradient>

//       <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
//         <Height top={6} />
//         <ScrollView showsVerticalScrollIndicator={false} >

//           {AssignMentData.map((assign) => {
//             return (
//               <View style={styles.textInputContainer}>
//                 <Height top={13} />
//                 <TouchableOpacity style={styles.subjectContainer}>
//                   <Text style={styles.subject}>{assign.subject}</Text>
//                 </TouchableOpacity>
//                 <Height top={8} />
//                 <View style={styles.center}>
//                   <Text style={[styles.subject, { color: Color.black }]}>{assign.detail}</Text>
//                 </View>
//                 <Height top={9} />
//                 <View style={styles.center}>
//                   <Text style={[styles.subject, { color: Color.gray }]}>{assign.assign}</Text>
//                   <Text style={styles.date}>{assign.assignDate}</Text>
//                 </View>
//                 <Height top={10} />
//                 <View style={styles.center}>
//                   <Text style={[styles.subject, { color: Color.gray }]}>{assign.submission}</Text>
//                   <Text style={styles.date}>{assign.subDate}</Text>
//                 </View>
//                 <Height top={14} />
//                 {assign.submit ?
//                   <SubmitButton text='TO BE SUBMITTED' onpress={() => { Alert.alert('Submitted !') }} /> : <></>
//                 }
//                 <Height top={15} />
//               </View>
//             )
//           })}

//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default AssignMent
// const styles = StyleSheet.create({
//   linearGradient: {
//     paddingHorizontal: 16,
//   },
//   textInputContainer: {
//     // height: dynamicSize(186),
//     // backgroundColor: Color.red,
//     borderWidth: 1,
//     borderColor: Color.feesRectBorder,
//     borderRadius: 15,
//     marginVertical: 16,
//     paddingHorizontal: 15
//   },
//   subject: {
//     fontSize: FontSize.font14,
//     color: Color.skyButton,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 20
//   },
//   subjectContainer: {
//     backgroundColor: Color.lightCalender,
//     height: dynamicSize(23),
//     width: dynamicSize(93),
//     borderRadius: 9,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   date: {
//     fontSize:FontSize.font14,
//     color:Color.lightBlack,
//     lineHeight:20,
//     fontFamily:FontFamily.sSemiBold
//   },
//   lastDate: {
//     height: dynamicSize(42),
//   },
//   center: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // flex:1
//     flexDirection: 'row',
//   },
//   submitButton: {

//   }
// })


// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
// import { globallyStyle } from '../style/globalStyle'
// import LinearGradient from 'react-native-linear-gradient'
// import { FontFamily, Color, FontSize } from '../constants/constant'
// import { image } from '../data/ImageData'
// import { useNavigation } from '@react-navigation/native'
// import { dynamicSize } from '../style/Responsive'
// import { Divider } from 'react-native-paper'



// const AssignMent = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={globallyStyle.safeAreaView}>
//       <LinearGradient style={[styles.linearGradient]}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 2, y: 2 }}
//         colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//         <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

//         <Header iconLeft={image.backArrow} text='Time Table'
//           onpressLeft={() => navigation.goBack()} />
//         <Height top={66} />
//       </LinearGradient>

//       <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
//         <Height top={6} />
//         <ScrollView show showsVerticalScrollIndicator={false}>

//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Computer Science</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
//             </View>
//             <Divider />
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
//               <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 1</Text>
//             </View>
//             <Height top={15} />
//           </View>

//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Computer Science</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
//             </View>
//             <Divider />
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
//               <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 2</Text>
//             </View>
//             <Height top={15} />
//           </View>

//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Computer Science</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>08:15am - 9:00am</Text>
//             </View>
//             <Divider />
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
//               <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 3</Text>
//             </View>
//             <Height top={15} />
//           </View>

//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Lunch Break</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>10:30am - 11:00am</Text>
//               <Image style={styles.lunch} source={image.lunch} />
//             </View>
//             <Height top={18} />
//           </View>
//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Science</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>11:00am - 11:45am</Text>
//             </View>
//             <Divider />
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
//               <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 4</Text>
//             </View>
//             <Height top={15} />
//           </View>

//           <View style={styles.textInputContainer}>
//             <Height top={14} />
//             <TouchableOpacity>
//               <Text style={styles.subject}>Social Study</Text>
//             </TouchableOpacity>
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>11:45am - 12:30am</Text>
//             </View>
//             <Divider />
//             <Height top={8} />
//             <View style={styles.center}>
//               <Text style={[styles.subject, { color: Color.gray }]}>Cheris James</Text>
//               <Text style={[styles.subject, { color: Color.lightBlack }]}>Period 5</Text>
//             </View>
//             <Height top={15} />
//           </View>

//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default AssignMent
// const styles = StyleSheet.create({
//   lunch: {
//     height: dynamicSize(38),
//     width: 39
//   },
//   linearGradient: {
//     paddingHorizontal: 16,
//   },
//   textInputContainer: {
//     // height: dynamicSize(186),
//     // backgroundColor: Color.red,
//     borderWidth: 1,
//     borderColor: Color.feesRectBorder,
//     borderRadius: 15,
//     marginVertical: 16,
//     paddingHorizontal: 15
//   },
//   subject: {
//     fontSize: FontSize.font14,
//     color: Color.black,
//     fontFamily: FontFamily.sSemiBold,
//     lineHeight: 20
//   },
//   center: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   submitButton: {

//   }
// })






// import React, { useState } from 'react'
// import { View, Text, SafeAreaView, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Header, Height, StarPattern, SubmitButton } from '../components/commonComponent'
// import { globallyStyle } from '../style/globalStyle'
// import LinearGradient from 'react-native-linear-gradient'
// import { FontFamily, Color, FontSize } from '../constants/constant'
// import { image } from '../data/ImageData'
// import { useNavigation } from '@react-navigation/native'
// import { dynamicSize } from '../style/Responsive'
// import { Divider, TextInput, Provider } from 'react-native-paper'
// import DropDown from 'react-native-paper-dropdown'



// const AskDoubt = () => {
//   const [showDropDown, setShowDropDown] = useState(false);
//   const [teacher, setTeacher] = useState(false);
//   const teacherList = [
//     {
//       label: 'Alexa',
//       value: 'alexa'
//     },
//     {
//       label: 'Google',
//       value: 'google'
//     },
//     {
//       label: 'Vs',
//       value: 'Vs code'
//     },
//     {
//       label: 'Note 9',
//       value: 'Note 9'
//     },
//   ]
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={globallyStyle.safeAreaView}>
//       <LinearGradient style={[styles.linearGradient]}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 2, y: 2 }}
//         colors={[Color.darkthemeColor, Color.lightThemeColor]}>
//         <StarPattern top={31} opacity={0.35} star={image.star_pattern} />

//         <Header iconLeft={image.backArrow} text='Ask Doubt'
//           onpressLeft={() => navigation.goBack()} />
//         <Height top={66} />
//       </LinearGradient>
//       <Provider>
//         <View style={[globallyStyle.card, { paddingHorizontal: 16 }]}>
//           <Height top={6} />
//           <DropDown
//             label='Select Teacher'
//             value={teacher}
//             setValue={setTeacher}
//             list={teacherList}
//             visible={showDropDown}
//             dropDownContainerHeight={200}
//             dropdown
//             showDropDown={() => setShowDropDown(true)}
//             onDismiss={() => setShowDropDown(false)}
//             inputProps={{

//               right: <TextInput.Icon name={'menu-down'} />
//             }}
//           />
//         </View>
//       </Provider>
//     </SafeAreaView>
//   )
// }

// export default AskDoubt
// const styles = StyleSheet.create({
//   linearGradient: {
//     paddingHorizontal: 16,
//   },
// })








