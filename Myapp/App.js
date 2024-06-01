import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App({ searchQuery, setSearchQuery }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.Devs}>
          <Text style={styles.headerText}>Hello, Devs</Text>
          <Text>14 Task today</Text>
        </View>
        <View style={styles.empty}></View>
        <View style={styles.Person}>
          <Image source={require('./assets/person.png')} style={styles.profileImage} />
        </View>
      </View>

      <View style={styles.searchInGeneral}>
        <View style={styles.searchEngine}>
          <View style={styles.searchInput}>
          <Image source={require('./assets/vector1.png')} style={styles.filterImage} />

            <TextInput
              style={styles.minisearchInput}
              placeholder='Search'
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>
        </View>
        <View style={styles.searchImage}>
          <Image source={require('./assets/Vector.png')} style={styles.searchIcon} />

        </View>
      </View>

      <View style={styles.categoriesBox}>
        <Text style={styles.catText}>Categories</Text>
      </View>
      <ScrollView style={styles.scroll} horizontal={true}>
        <View style={styles.categoriesBox1}>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Exercise</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.womanImage} source={require('./assets/young woman working online.png')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Study</Text>
              <Text style={styles.exTex1}>12 tasks</Text>
              <Image style={styles.womanImage} source={require('./assets/young woman working at desk.png')} />


            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Taking Picture</Text>
              <Text style={styles.exTex1}></Text>
              <Image style={styles.womanImage} source={require('./assets/Camera Boy.jpg')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Code</Text>
              <Text style={styles.exTex1}></Text>
              <Image style={styles.womanImage} source={require('./assets/Woman Coding.jpg')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Talk Code</Text>
              <Text style={styles.exTex1}></Text>
              <Image style={styles.womanImage} source={require('./assets/Talk Code.webp')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Robotic Automation</Text>
              <Text style={styles.exTex1}> </Text>
              <Image style={styles.womanImage} source={require('./assets/Robotic Automation.jpg')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Blockchain Technology </Text>
              <Text style={styles.exTex1}></Text>
              <Image style={styles.womanImage} source={require('./assets/Blockchain.jpeg')} />
            </View>
          </View>
          <View style={styles.catbox1}>
            <View style={styles.exerciseBox}>
              <Text style={styles.exText}>Cybersecurity</Text>
              <Text style={styles.exTex1}></Text>
              <Image style={styles.womanImage} source={require('./assets/Cybersecurity.webp')} />

            </View>
          </View>
          
        </View>
        </ScrollView>

<View style={styles.task}>
  <Text style={styles.taskText}>Ongoing Task</Text>
</View>
<ScrollView>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Mobile App Development</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Web Development</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Push Ups</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Sustainable and Green Computing</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Ethical Hacking and Penetration Testing</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Augumented Reality(AR) and Virtual Reality (VR) </Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Robotic Process Automation (RPA)</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Continuous Deployment(CD)</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Blockchain Technology</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Cloud Computing</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Artificial Intelligence(AI) and Machine learning (ML)</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Internet of Things(IoT)</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Full-Stack Development</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Data Science and Big Data Analytics</Text>
  </View>
  <View style={styles.taskContainer}>
    <Text style={styles.ongoingTask3}>Cybersecurity</Text>
  </View>
  {/* Add more tasks as needed */}
</ScrollView>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F7F0E8',
},
header: {
flexDirection: 'row',
marginBottom: 12,
padding: 20,
},
headerText: {
  fontSize: 32,
  fontWeight: '700',
},
Devs: {
  flex: 3,
},
empty: {
  flex: 2, 
},
Person: {
  flex: 1,
},
profileImage: {
  width: 50,
  height: 50,
},
searchInGeneral: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: 32,
},
searchEngine: {
  flex: 1,
  height: 48,
  backgroundColor: 'white',
  borderRadius: 14,
  flexDirection: 'row',
  alignItems: 'center',
},
searchInput: {
  flexDirection: 'row', alignItems: 'center',
  marginLeft: 6,
},
searchIcon: {
  width: 24,
  height: 24,
},
minisearchInput: {
  flex: 1,
  height: '100%',
  paddingHorizontal: 8,
  fontSize: 16,
},
searchImage: {
  width: 50,
  height: 48,
  backgroundColor: '#F0522F',
  borderRadius: 14,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
},
filterImage: {
  width: 28.3,
  height: 25.5,
},
categoriesBox: {
  marginHorizontal: 20,
  marginTop: 29,
},
catText: {
  fontSize: 20,
  fontWeight: '700',
},
categoriesBox1: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 20,
  marginTop: 6,
},
catbox1: {
  width: 150,
  height: 192,
  backgroundColor: 'white',
  borderRadius: 15,
  marginRight: 10,
},
exerciseBox: {
  padding: 10,
},
exText: {
  fontSize: 16,
  fontWeight: '700',
},
exTex1: {
  fontSize: 12,
  fontWeight: '400',
},
womanPhoto: {
  width: 150,
  height: 132,
  marginTop: 10,
},
task: {
  marginHorizontal: 20,
  marginTop: 20,
},
taskText: {
  fontSize: 20,
  fontWeight: '700',
},
taskContainer: {
  backgroundColor: 'white',
  width: 340,
  height: 128,
  marginHorizontal: 20,
  marginTop: 20,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
},
ongoingTask3: {
  fontSize: 16,
  fontWeight: '700',
},
scroll: {
  height: 550,
  },
womanImage: {
  width: 134,
  height: 132,
  marginTop: 10,}
});