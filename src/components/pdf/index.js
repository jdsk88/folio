import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = (props) => 
// {
//     const section1 = props.section1;
//     const section2 = props.section2;
    (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>blabklbakdlakdhiryqwgrbhwafaehbfieabfieqbfeqf</Text>
        {/* <Text section1={section1}>{section1}</Text> */}
      </View>
      <View style={styles.section}>
    <Text >blablablalbaba</Text>
    {/* <Text section2={section2}>{section2}</Text> */}
      </View>
    </Page>
  </Document>
)
// }
;