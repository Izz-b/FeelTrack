import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  VStack, 
  HStack, 
  ScrollView, 
  useTheme, 
  Divider 
} from 'native-base';
import { Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const WeeklyWrapScreen = () => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width - 40;

  // Mock data for charts
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [3, 4, 2, 5, 3, 4, 5],
        color: () => theme.colors.lavender,
        strokeWidth: 2,
      },
    ],
    legend: ['Mood (1-5)'],
  };

  const emotionData = [
    {
      name: 'Happy',
      population: 4,
      color: theme.colors.skyBlue,
      legendFontColor: theme.colors.primaryText,
      legendFontSize: 12,
    },
    {
      name: 'Calm',
      population: 3,
      color: theme.colors.lavender,
      legendFontColor: theme.colors.primaryText,
      legendFontSize: 12,
    },
    {
      name: 'Neutral',
      population: 2,
      color: '#E0E0E0',
      legendFontColor: theme.colors.primaryText,
      legendFontSize: 12,
    },
    {
      name: 'Sad',
      population: 1,
      color: '#D1E5F0',
      legendFontColor: theme.colors.primaryText,
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: () => theme.colors.primaryText,
    labelColor: () => theme.colors.secondaryText,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: theme.colors.lavender,
    },
  };

  return (
    <Box flex={1} bg={theme.colors.cream} safeArea>
      <ScrollView px={5} py={6}>
        <VStack space={6}>
          <Box alignItems="center">
            <Heading size="lg" textAlign="center" color={theme.colors.primaryText}>
              Your Weekly FeelTrack
            </Heading>
            <Text mt={2} fontSize="md" textAlign="center" color={theme.colors.secondaryText}>
              May 1 - May 7, 2023
            </Text>
          </Box>

          <Box bg={theme.colors.cardBackground} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={4} color={theme.colors.primaryText}>
              Mood Trends
            </Heading>
            <LineChart
              data={moodData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={{
                borderRadius: 16,
              }}
            />
          </Box>

          <Box bg={theme.colors.cardBackground} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={4} color={theme.colors.primaryText}>
              Emotion Distribution
            </Heading>
            <PieChart
              data={emotionData}
              width={screenWidth - 40}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </Box>

          <Box bg={theme.colors.cardBackground} rounded="xl" p={5} shadow={2}>
            <Heading size="md" mb={4} color={theme.colors.primaryText}>
              Weekly Insights
            </Heading>
            
            <VStack space={4} divider={<Divider />}>
              <Box>
                <Text fontSize="sm" color={theme.colors.secondaryText}>
                  Most Frequent Emotion
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  Happy 😊
                </Text>
              </Box>
              
              <Box>
                <Text fontSize="sm" color={theme.colors.secondaryText}>
                  Hardest Moment
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  Wednesday - You felt sad but managed to practice self-care
                </Text>
              </Box>
              
              <Box>
                <Text fontSize="sm" color={theme.colors.secondaryText}>
                  Total Check-ins
                </Text>
                <Text fontSize="md" fontWeight="medium" color={theme.colors.primaryText}>
                  7 days in a row! 🎉
                </Text>
              </Box>
            </VStack>
            
            <Box mt={6} bg="rgba(230, 230, 250, 0.3)" p={4} rounded="lg">
              <Text fontSize="md" fontStyle="italic" textAlign="center" color={theme.colors.primaryText}>
                "Self-awareness is the first step toward positive change."
              </Text>
            </Box>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default WeeklyWrapScreen;