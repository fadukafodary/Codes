import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, Alert, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StarPattern, Height, Header } from '../components/commonComponent'
import { Color, FontFamily, FontSize } from '../constants/constant'
import { image } from '../data/ImageData'
import { globallyStyle } from '../style/globalStyle'
import { useNavigation } from '@react-navigation/native'
import { dynamicSize } from '../style/Responsive'
// import { Dimensions } from 'react-native'

const Quiz = () => {
  const QuizData = [
    {
      id: 'item1',
      question: "in 2007 , which player became the leading run scorer of all tie in women's ODI cricket ?",
      questionNum: 'Question 1',
      totalQuestion: '/10',
      option1: 'A. Stefanie taylor',
      option2: 'B. Mithali Raj',
      option3: 'C. Suzia Betes',
      option4: 'D. HarmanPreet Kour',
    },
    {
      id: 'item2',
      question: "in 2007 , which player became the leading run scorer of all tie in women's ODI cricket ?",
      questionNum: 'Question 2',
      totalQuestion: '/10',
      option1: 'A. Stefanie taylor',
      option2: 'B. Mithali Raj',
      option3: 'C. Suzia Betes',
      option4: 'D. HarmanPreet Kour',
    },
    {
      id: 'item3',
      question: "in 2007 , which player became the leading run scorer of all tie in women's ODI cricket ?",
      questionNum: 'Question 3',
      totalQuestion: '/10',
      option1: 'A. Stefanie taylor',
      option2: 'B. Mithali Raj',
      option3: 'C. Suzia Betes',
      option4: 'D. HarmanPreet Kour',
    },
    {
      id: 'item4',
      question: "in 2007 , which player became the leading run scorer of all tie in women's ODI cricket ?",
      questionNum: 'Question 4',
      totalQuestion: '/10',
      option1: 'A. Stefanie taylor',
      option2: 'B. Mithali Raj',
      option3: 'C. Suzia Betes',
      option4: 'D. HarmanPreet Kour',
    },
  ]
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globallyStyle.safeAreaView}>
      <LinearGradient style={[styles.linearGradient]}
        start={{ x: 2, y: 2 }}
        end={{ x: 0.5, y: 0 }}
        colors={[Color.darkthemeColor, Color.lightThemeColor]}>
        <StarPattern top={31} opacity={0.35} star={image.star_pattern} />
        <View style={styles.header}>
          <Header iconLeft={image.backArrow} text='Play Quiz'
            onpressLeft={() => navigation.goBack()} rightText='Skip' onpressrighttext={() => { Alert.alert('Skipped') }}
          />
        </View>
        <ScrollView vertical={true}
          showsVerticalScrollIndicator={false}>
          <Height top={13} />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            // disableIntervalMomentum={true}
          >
            {QuizData.map((quiz) => {
              return (
                <View>
                  <View style={{ marginHorizontal: 16 }}>
                    <View style={styles.questionContainer}>
                      <View style={styles.questionNumContainer}>
                        <Text style={styles.questionTag}>{quiz.questionNum}</Text>
                        <Height left={11} />
                        <Text style={styles.totalQue}>{quiz.totalQuestion}</Text>
                      </View>
                      <Image style={{ width: 82, height: 32 }} source={image.users} />
                    </View>
                    <Height top={13} />
                    <View style={styles.dashedBorder}>
                    </View>
                  </View>

                  <View style={{ alignItems: 'center' }}>
                    <View style={styles.card}>
                      <Height top={23} />
                      <Text style={styles.question}>{quiz.question}</Text>
                      <Height top={36} />
                      <View>
                        <TouchableOpacity style={styles.option1Container}>
                          <Text style={[styles.optionText, { color: Color.option14 }]}>{quiz.option1}</Text>
                          <Image style={styles.checkbox} source={image.checkbox} />
                        </TouchableOpacity>
                        <Height top={20} />
                        <TouchableOpacity style={styles.option2Container}>
                          <Text style={[styles.optionText, { color: Color.green2, fontFamily: FontFamily.sBold }]}>{quiz.option2}</Text>
                          <Image style={styles.checkbox} source={image.confirmTick} />
                        </TouchableOpacity>
                        <Height top={21} />
                        <TouchableOpacity style={styles.option3Container}>
                          <Text style={[styles.optionText, { color: Color.red2 }]}>{quiz.option3}</Text>
                          <Image style={styles.checkbox} source={image.cancelRed} />
                        </TouchableOpacity>
                        <Height top={21} />
                        <TouchableOpacity style={styles.option1Container}>
                          <Text style={styles.optionText}>{quiz.option4}</Text>
                          <Image style={styles.checkbox} source={image.checkbox} />
                        </TouchableOpacity>
                      </View>
                      <Height top={25} />
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Quiz
const styles = StyleSheet.create({
  questionNumContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  totalQue: {
    fontSize: 18,
    fontFamily: FontFamily.sSemiBold,
    color: Color.white,
    lineHeight: 23
  },
  questionTag: {
    fontSize: 30,
    fontFamily: FontFamily.sSemiBold,
    color: Color.white,
    lineHeight: 38
  },
  header: {
    marginHorizontal: 16
  },
  dashedBorder: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Color.white,
  },
  optionText: {
    fontSize: FontSize.font16,
    fontFamily: FontFamily.sRegular,
    lineHeight: 20,
    color: Color.option14
  },
  card: {
    height: dynamicSize(459),
    backgroundColor: Color.white,
    borderRadius: 20,
    marginRight: 24,
    marginLeft: 24,
    marginVertical: 29,
    paddingHorizontal: 21,
    alignItems: 'center'
  },
  checkbox: {
    height: dynamicSize(25),
    width: dynamicSize(25),
  },
  confirmTick: {
    height: dynamicSize(26.7),
    width: dynamicSize(26.7)
  },
  canceRed: {
    height: dynamicSize(27),
    width: dynamicSize(27)
  },
  linearGradient: {
    height: '100%'
  },
  question: {
    color: Color.quizQuestion,
    fontSize: FontSize.font20,
    fontFamily: FontFamily.sBold,
    lineHeight: 25,
    height: dynamicSize(75),
    width: dynamicSize(308)
  },
  option1Container: {
    borderWidth: 1,
    borderColor: Color.silver,
    backgroundColor: Color.white,
    borderRadius: 12,
    height: dynamicSize(60),
    width: dynamicSize(303),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 17,
    paddingLeft: 25

  },
  option2Container: {
    width: dynamicSize(303),
    borderWidth: 2,
    borderColor: Color.green,
    backgroundColor: Color.lightGreen,
    borderRadius: 12,
    height: dynamicSize(60),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 16

  },
  option3Container: {
    borderWidth: 2,
    borderColor: Color.red,
    borderRadius: 12,
    height: dynamicSize(60),
    width: dynamicSize(303),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 16
  }
})